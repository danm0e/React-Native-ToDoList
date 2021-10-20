import React from 'react'
import { render } from '@testing-library/react-native'
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
})
