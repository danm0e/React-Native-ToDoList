import React from 'react'
import { render } from '@testing-library/react-native'
import Toast from './Toast'

const baseProps = {
  header: 'some header',
  text: 'some text'
}

describe('components/Toast', () => {
  describe('When the component is rendered', () => {
    test('It should display the correct messaging', () => {
      const { getByText } = render(<Toast {...baseProps} />)
      const header = getByText(/some header/i)
      const text = getByText(/some text/i)

      expect(header).toBeDefined()
      expect(text).toBeDefined()
    })
  })
})
