import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import ToDoList from './ToDoList'

describe('modules/ToDoList', () => {
  describe('When the module is rendered', () => {
    test('It should render the header and empty message', () => {
      const { getByPlaceholderText, getByText } = render(<ToDoList />)
      const input = getByPlaceholderText(/Add a goal/i)
      const emptyMessage = getByText(/No goals/i)

      expect(input).toBeDefined()
      expect(emptyMessage).toBeDefined()
    })
  })

  describe('When a goal is added', () => {
    test('It should display the correct item in the list', () => {
      const { getByPlaceholderText, getByDisplayValue, getByTestId, getByText } = render(<ToDoList />)

      const input = getByPlaceholderText(/Add a goal/i)
      fireEvent.changeText(input, 'some goal')

      const changedInput = getByDisplayValue(/some goal/i)
      expect(changedInput).toBeDefined()

      const button = getByTestId(/Add button/i)
      fireEvent.press(button)

      const goal = getByText(/some goal/i)
      expect(goal).toBeDefined()
    })
  })
})
