import React from 'react'
import { render } from '@testing-library/react-native'
import EmptyMessage from './EmptyMessage'

describe('components/EmptyMessage', () => {
  describe('When the component is rendered', () => {
    test('It should display the empty message', () => {
      const { getByText } = render(<EmptyMessage />)
      const header = getByText(/No goals/i)
      const text = getByText(/Let's get started/i)

      expect(header).toBeDefined()
      expect(text).toBeDefined()
    })
  })
})
