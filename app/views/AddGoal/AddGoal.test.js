import React from 'react'
import { render } from '@testing-library/react-native'
import AddGoal from './AddGoal'

const onChangeSpy = jest.fn()
const onAddSpy = jest.fn()

describe('views/AddGoal', () => {
  describe('When the component is rendered', () => {
    test('It should render the correct elements', () => {
      const { getByPlaceholderText, getByText } = render(
        <AddGoal onChange={onChangeSpy} onAdd={onAddSpy} />
      )

      const input = getByPlaceholderText(/Add a goal/i)
      const button = getByText(/Add/i)

      expect(input).toBeDefined()
      expect(button).toBeDefined()
    })
  })
})
