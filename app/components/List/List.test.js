import React from 'react'
import { render } from '@testing-library/react-native'
import List from './List'

const mockGoals = [
  { id: 'some-id-1', value: 'some value 1' },
  { id: 'some-id-2', value: 'some value 2' }
]

describe('components/List', () => {
  describe('When the component is rendered', () => {
    describe('And there are goals set', () => {
      test('It should render the correct number of list items', () => {
        const { getAllByText } = render(<List goals={mockGoals} />)
        const listItems = getAllByText(/some value/i)

        expect(listItems).toHaveLength(2)
      })
    })

    describe('And there are no goals set', () => {
      test('It should render the empty message', () => {
        const { getByText } = render(<List goals={[]} />)
        const emptyMessage = getByText(/No goals/i)

        expect(emptyMessage).toBeDefined()
      })
    })
  })
})
