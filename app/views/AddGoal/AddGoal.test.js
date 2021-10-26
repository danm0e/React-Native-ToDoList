import React from 'react'
import { render } from '@testing-library/react-native'
import AddGoal from './AddGoal'

const onChangeSpy = jest.fn()
const onAddSpy = jest.fn()
const onCancelSpy = jest.fn()

describe('views/AddGoal', () => {
  describe('When the component is rendered', () => {
    test('It should render the correct elements', () => {
      const { getByPlaceholderText, getByText } = render(
        <AddGoal
          onChange={onChangeSpy}
          onAdd={onAddSpy}
          onCancel={onCancelSpy}
        />
      )

      const header = getByText(/What do you need to do/i)
      const input = getByPlaceholderText(/Add a goal/i)
      const addButton = getByText(/Add/i)
      const cancelButton = getByText(/Cancel/i)

      expect(header).toBeDefined()
      expect(input).toBeDefined()
      expect(addButton).toBeDefined()
      expect(cancelButton).toBeDefined()
    })
  })
})
