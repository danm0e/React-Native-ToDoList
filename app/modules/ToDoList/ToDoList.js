import React, { useState } from 'react'
import { View } from 'react-native'
import Header from '@components/Header'
import List from '@components/List'
import EmptyMessage from '@components/EmptyMessage'
import styles from './styles'

const ToDoList = () => {
  const [newGoal, setNewGoal] = useState('')
  const [goals, setGoals] = useState([])

  const handleOnChange = value => {
    setNewGoal(value)
  }

  const isValidGoal = newGoal.length && !goals.find(goal => goal.value === newGoal)

  const handleOnAdd = () => {
    // only add the goal if it's not empty or doesn't already exist
    isValidGoal && setGoals(currentGoals => [
      ...currentGoals,
      {
        id: Math.random().toString(), // mocking an id for key
        value: newGoal,
        isComplete: false
      }
    ])
  }

  const handleOnComplete = idx => {
    const goalsCopy = [...goals]
    const updatedGoal = goalsCopy[idx]
    updatedGoal.isComplete = !updatedGoal.isComplete
    goalsCopy.splice(idx, 1, updatedGoal)
    setGoals(goalsCopy)
  }

  return (
    <View style={styles.container}>
      <Header
        value={newGoal}
        onChange={handleOnChange}
        onAdd={handleOnAdd}
      />
      {goals.length
        ? <List goals={goals} onComplete={handleOnComplete} />
        : <EmptyMessage />}
    </View>
  )
}

export default ToDoList
