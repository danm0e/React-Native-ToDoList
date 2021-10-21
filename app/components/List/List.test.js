import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import List from './List'

const mockItems = [
  { id: 'some-id-1', value: 'some value 1', isComplete: true },
  { id: 'some-id-2', value: 'some value 2', isComplete: false }
]

const setItemsSpy = jest.fn()

describe('components/List', () => {
  let utils

  beforeEach(() => {
    utils = render(<List items={mockItems} setItems={setItemsSpy} />)
  })

  describe('When the component is rendered', () => {
    test('It should render the correct number of items', () => {
      const { getAllByText } = utils
      const listItems = getAllByText(/some value/i)

      expect(listItems).toHaveLength(2)
    })
  })

  describe('When the checkbox is pressed', () => {
    test('It should toggle the completion state', () => {
      const { getAllByTestId } = utils
      const checkbox = getAllByTestId(/Toggle Complete/i)[0]
      fireEvent.press(checkbox)

      expect(setItemsSpy).toHaveBeenCalledTimes(1)
      expect(setItemsSpy).toHaveBeenCalledWith([
        { id: 'some-id-1', value: 'some value 1', isComplete: false },
        { id: 'some-id-2', value: 'some value 2', isComplete: false }
      ])
    })
  })
})
