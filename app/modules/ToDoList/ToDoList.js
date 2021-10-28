import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import { FAB as FaButton } from 'react-native-elements'
import useStorage from '@hooks/UseStorage'
import AddGoal from '@views/AddGoal'
import List from '@components/List'
import GoalCounter from '@components/GoalCounter'
import EmptyMessage from '@components/EmptyMessage'
import styles from './styles'
import Toast from 'react-native-toast-message'

const fabIcon = { name: 'add', type: 'material', color: 'white' }
const toastProps = {
  type: 'default',
  position: 'top',
  topOffset: 50,
  visibilityTime: 2000,
  text1: 'Oops!',
  props: {
    text2: 'We already have that goal!'
  }
}

const ToDoList = () => {
  const [newGoal, setNewGoal] = useState('')
  const [goals, setGoals] = useState([])
  const [modalOpen, setModalOpen] = useState(false)
  const [storedValue, setStoredValue] = useStorage('goals')

  useEffect(() => {
    setGoals(storedValue)
  }, [])

  // useEffect(() => {
  //   setStoredValue(goals)
  // }, [goals])

  const handleOnChange = value => setNewGoal(value)

  const handleOnReset = () => {
    setModalOpen(false)
    setNewGoal('')
  }

  const handleOnAdd = () => {
    // do nothing if empty
    if (!newGoal.length) {
      return
    }

    // show error if duplicate
    const isDuplicate = goals.find(goal => goal.value.toLowerCase() === newGoal.toLowerCase().trim())

    if (isDuplicate) {
      handleOnReset()
      Toast.show(toastProps)
      return
    }

    const newGoals = [
      ...goals,
      {
        id: Math.random().toString(),
        value: newGoal.trim(),
        isComplete: false
      }
    ]

    setGoals(newGoals)
    setStoredValue(newGoals)
    handleOnReset()
  }

  const handleOnComplete = idx => {
    const goalsCopy = [...goals]
    const updatedGoal = goalsCopy[idx]
    updatedGoal.isComplete = !updatedGoal.isComplete
    goalsCopy.splice(idx, 1, updatedGoal)
    setGoals(goalsCopy)
    setStoredValue(goalsCopy)
  }

  const handleOnDelete = idx => {
    const goalsCopy = [...goals]
    goalsCopy.splice(idx, 1)
    setGoals(goalsCopy)
    setStoredValue(goalsCopy)
  }

  const handleOnCancel = () => handleOnReset()

  return (
    <View style={styles.container}>
      <AddGoal
        value={newGoal}
        onChange={handleOnChange}
        onAdd={handleOnAdd}
        onCancel={handleOnCancel}
        isVisible={modalOpen}
      />

      {
        goals.length
          ? (
            <>
              <GoalCounter goals={goals} />
              <List
                items={goals}
                onComplete={handleOnComplete}
                onDelete={handleOnDelete}
              />
            </>
            )
          : <EmptyMessage />
      }

      <FaButton
        placement='right'
        onPress={() => setModalOpen(true)}
        icon={fabIcon}
        color={styles.faButton.color}
        accessibilityLabel='Add Goal'
      />
    </View>
  )
}

export default ToDoList
