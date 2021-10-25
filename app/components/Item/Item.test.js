import React from 'react'
import { render } from '@testing-library/react-native'
import Item from './Item'

const baseProps = {
  index: 1,
  value: 'some value',
  isComplete: false
}

describe('components/Item', () => {
  test('It should render the item', () => {
    const { getByText } = render(<Item {...baseProps} />)
    const item = getByText(/some value/i)

    expect(item).toBeDefined()
  })
})
