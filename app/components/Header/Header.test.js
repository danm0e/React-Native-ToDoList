import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import Header from './Header'

const onChangeSpy = jest.fn()
const onAddSpy = jest.fn()

describe('components/Header', () => {
  let utils

  beforeEach(() => {
    utils = render(
      <Header onChange={onChangeSpy} onAdd={onAddSpy} />
    )
  })

  describe('When the component is rendered', () => {
    test('It should render the correct elements', () => {
      const { getByPlaceholderText, getByText } = utils

      const input = getByPlaceholderText(/Add a goal/i)
      const button = getByText(/Add/i)

      expect(input).toBeDefined()
      expect(button).toBeDefined()
    })
  })

  describe('When the input value is changed', () => {
    test('It should call the onChange method', () => {
      const { getByPlaceholderText } = utils

      const input = getByPlaceholderText(/Add a goal/i)
      fireEvent.changeText(input, 'some goal')

      expect(onChangeSpy).toHaveBeenCalledTimes(1)
      expect(onChangeSpy).toHaveBeenCalledWith('some goal')
    })
  })

  describe('When the add button is pressed', () => {
    test('It should call the onAdd method', () => {
      const { getByText } = utils

      const button = getByText(/Add/i)
      fireEvent.press(button)

      expect(onAddSpy).toHaveBeenCalledTimes(1)
    })
  })
})
