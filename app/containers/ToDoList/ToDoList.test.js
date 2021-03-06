import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import ToDoList from './ToDoList'

jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper')

jest.mock('react-native-toast-message', () => ({
  show: jest.fn()
}))

describe('modules/ToDoList', () => {
  let utils

  beforeEach(() => {
    utils = render(<ToDoList />)
  })

  describe('When there are no goals', () => {
    test('It should render the header and empty message', () => {
      const { getByPlaceholderText, getByText } = utils
      const input = getByPlaceholderText(/Add a goal/i)
      const emptyMessage = getByText(/No goals/i)

      expect(input).toBeDefined()
      expect(emptyMessage).toBeDefined()
    })
  })

  describe('When the plus button is pressed', () => {
    test('It should render the AddGoal view', () => {
      const { getByLabelText, getByTestId } = utils
      const addGoalButton = getByLabelText(/Add Goal/i)
      fireEvent.press(addGoalButton)

      const modal = getByTestId(/AddGoal modal/i)
      expect(modal.props.visible).toBe(true)
    })
  })

  describe('When the cancel button is pressed', () => {
    test('It should hide the AddGoal view', () => {
      const { getByText, getByTestId } = utils
      const cancelButton = getByText(/Cancel/i)

      fireEvent.press(cancelButton)

      const modalClosed = getByTestId(/AddGoal modal/i)
      expect(modalClosed.props.visible).toBe(false)
    })
  })

  describe('When a goal is added', () => {
    beforeEach(() => {
      const { getByPlaceholderText, getByTestId } = utils

      const input = getByPlaceholderText(/Add a goal/i)
      fireEvent.changeText(input, 'some goal')

      const button = getByTestId(/Add button/i)
      fireEvent.press(button)
    })

    describe('And the goal is valid', () => {
      test('It should add the correct item', () => {
        const { getByText, getByA11yLabel } = utils

        const goal = getByText(/some goal/i)
        expect(goal).toBeDefined()

        const counter = getByA11yLabel(/0 of 1/i)
        expect(counter).toBeDefined()
      })

      describe('When the goal is completed', () => {
        test('It should toggle the completion state', () => {
          const { getByLabelText } = utils
          const goal = getByLabelText(/Goal item/i)

          fireEvent.press(goal)

          expect(goal.props.isComplete).toBe(true)
        })
      })

      describe('When the goal is deleted', () => {
        test('It should remove the correct item', () => {
          const { getByPlaceholderText, getByTestId, getAllByText, queryAllByLabelText } = utils

          const input = getByPlaceholderText(/Add a goal/i)
          fireEvent.changeText(input, 'some new goal')

          const button = getByTestId(/Add button/i)
          fireEvent.press(button)

          const goalsBefore = queryAllByLabelText(/Goal item/i)
          expect(goalsBefore).toHaveLength(2)

          const deleteBtn = getAllByText(/Delete/i)[0]
          fireEvent.press(deleteBtn)

          const goalsAfter = queryAllByLabelText(/Goal item/i)
          expect(goalsAfter).toHaveLength(1)
        })
      })
    })

    describe('And the goal is a duplicate', () => {
      test('It should not add a new item', async () => {
        const { getByPlaceholderText, getByTestId, getByA11yLabel } = utils

        const input = getByPlaceholderText(/Add a goal/i)
        const button = getByTestId(/Add button/i)

        fireEvent.changeText(input, 'some goal') // goal already exists
        fireEvent.press(button)

        const counter = getByA11yLabel(/0 of 1/i)
        expect(counter).toBeDefined()
      })
    })

    describe('And the goal is empty', () => {
      test('It should not add a new item', () => {
        const { getByPlaceholderText, getByTestId, getByA11yLabel } = utils

        const input = getByPlaceholderText(/Add a goal/i)
        const button = getByTestId(/Add button/i)

        fireEvent.changeText(input, '')
        fireEvent.press(button)

        const counter = getByA11yLabel(/0 of 1/i)
        expect(counter).toBeDefined()
      })
    })
  })
})
