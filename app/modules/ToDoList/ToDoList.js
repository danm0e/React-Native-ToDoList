import React, { useState } from 'react'
import { View, Button } from 'react-native'
import Header from '@components/Header'
import List from '@components/List'
import GoalCounter from '@components/GoalCounter'
import EmptyMessage from '@components/EmptyMessage'
import styles from './styles'

const ToDoList = () => {
  const [newGoal, setNewGoal] = useState('')
  const [goals, setGoals] = useState([])
  const [modalOpen, setModalOpen] = useState(false)

  const handleOnChange = value => setNewGoal(value)

  const handleOnReset = () => {
    setModalOpen(false)
    setNewGoal('')
  }

  // only add the goal if it's not empty or doesn't already exist
  const isValidGoal = newGoal.length && !goals.find(goal => goal.value.toLowerCase() === newGoal.toLowerCase())

  const handleOnAdd = () => {
    if (!isValidGoal) {
      return
    }

    setGoals(currentGoals => [
      ...currentGoals,
      {
        id: Math.random().toString(), // mocking an id for key
        value: newGoal,
        isComplete: false
      }
    ])
    handleOnReset()
  }

  const handleOnCancel = () => handleOnReset()

  return (
    <View style={styles.container}>
      <Button title='Add goal' onPress={() => setModalOpen(true)} />
      <Header
        value={newGoal}
        onChange={handleOnChange}
        onAdd={handleOnAdd}
        onCancel={handleOnCancel}
        visible={modalOpen}
      />
      {goals.length
        ? (
          <>
            <GoalCounter goals={goals} />
            <List items={goals} setItems={setGoals} />
          </>
          )
        : <EmptyMessage />}
    </View>
  )
}

export default ToDoList
