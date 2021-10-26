import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import ToDoList from './ToDoList'

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

  describe('When a goal is added', () => {
    beforeEach(() => {
      const { getByPlaceholderText, getByTestId } = utils

      const input = getByPlaceholderText(/Add a goal/i)
      fireEvent.changeText(input, 'some goal')

      const button = getByTestId(/Add button/i)
      fireEvent.press(button)
    })

    describe('And the goal is valid', () => {
      test('It should render the correct item', async () => {
        const { getByText, getByA11yLabel } = utils

        const goal = getByText(/some goal/i)
        expect(goal).toBeDefined()

        const counter = getByA11yLabel(/0 of 1/i)
        expect(counter).toBeDefined()
      })
    })

    describe('And the goal is not valid', () => {
      test('It should not render a new item', async () => {
        const { getByPlaceholderText, getByTestId, getByA11yLabel } = utils

        const input = getByPlaceholderText(/Add a goal/i)
        const button = getByTestId(/Add button/i)

        fireEvent.changeText(input, 'some goal') // goal already exists
        fireEvent.press(button)

        const counter = getByA11yLabel(/0 of 1/i)
        expect(counter).toBeDefined()
      })
    })
  })
})
