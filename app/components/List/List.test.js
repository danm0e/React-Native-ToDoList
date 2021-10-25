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

  afterEach(() => {
    jest.resetAllMocks()
  })

  describe('When the component is rendered', () => {
    test('It should render the correct number of items', () => {
      const { getAllByText } = utils
      const listItems = getAllByText(/some value/i)

      expect(listItems).toHaveLength(2)
    })
  })

  describe('When the item is pressed', () => {
    test('It should toggle the completion state', () => {
      const { getByText } = utils
      const listItem = getByText(/some value 1/i)

      fireEvent.press(listItem)

      expect(setItemsSpy).toHaveBeenCalledTimes(1)
      expect(setItemsSpy).toHaveBeenCalledWith([
        { id: 'some-id-1', value: 'some value 1', isComplete: false },
        { id: 'some-id-2', value: 'some value 2', isComplete: false }
      ])
    })
  })

  describe('When delete is pressed', () => {
    test('It should remove the correct item', () => {
      const { getAllByText } = utils
      const deleteBtn = getAllByText(/Delete/i)[0]

      fireEvent.press(deleteBtn)

      expect(setItemsSpy).toHaveBeenCalledTimes(1)
      expect(setItemsSpy).toHaveBeenCalledWith([
        { id: 'some-id-2', value: 'some value 2', isComplete: false }
      ])
    })
  })
})
