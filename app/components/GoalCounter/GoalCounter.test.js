import React from 'react'
import { render } from '@testing-library/react-native'
import GoalCounter from './GoalCounter'

const mockGoalsComplete = [
  { id: 'some-id-1', value: 'some value 1', isComplete: true },
  { id: 'some-id-2', value: 'some value 2', isComplete: true }
]

const mockGoalsToDo = [
  { id: 'some-id-1', value: 'some value 1', isComplete: true },
  { id: 'some-id-2', value: 'some value 2', isComplete: false }
]

describe('components/GoalCounter', () => {
  describe('When all goals are complete', () => {
    test('It should display the all done message', () => {
      const { getByText } = render(<GoalCounter goals={mockGoalsComplete} />)
      const message = getByText(/All done/i)

      expect(message).toBeDefined()
    })
  })

  describe('When there are goals to complete', () => {
    test('It should display the correct counter', () => {
      const { getByA11yLabel } = render(<GoalCounter goals={mockGoalsToDo} />)
      const message = getByA11yLabel(/1 of 2/i)

      expect(message).toBeDefined()
    })
  })
})
