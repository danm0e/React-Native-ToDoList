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
    test('It should render the correct item', () => {
      const { getByPlaceholderText, getByTestId, getByText } = utils

      const input = getByPlaceholderText(/Add a goal/i)
      fireEvent.changeText(input, 'some goal')

      const button = getByTestId(/Add button/i)
      fireEvent.press(button)

      const goal = getByText(/some goal/i)
      expect(goal).toBeDefined()
    })
  })
})
