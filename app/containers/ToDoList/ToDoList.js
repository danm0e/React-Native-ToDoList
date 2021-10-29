import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import { FAB as FaButton } from 'react-native-elements'
import AddGoal from '@views/AddGoal'
import List from '@components/List'
import GoalCounter from '@components/GoalCounter'
import EmptyMessage from '@components/EmptyMessage'
import styles from './styles'
import Toast from 'react-native-toast-message'
import dataStore from '@services/dataStore'

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

  useEffect(() => {
    const fetchGoals = async () => {
      try {
        const storedGoals = await dataStore.get()
        storedGoals && setGoals(storedGoals)
      } catch (e) {
        console.log(e)
      }
    }

    fetchGoals()
  }, [])

  useEffect(() => {
    const updateGoals = async () => {
      try {
        await dataStore.set(goals)
      } catch (e) {
        console.log(e)
      }
    }

    updateGoals()
  }, [goals])

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
    handleOnReset()
  }

  const handleOnComplete = idx => {
    const goalsCopy = [...goals]
    const updatedGoal = goalsCopy[idx]
    updatedGoal.isComplete = !updatedGoal.isComplete
    goalsCopy.splice(idx, 1, updatedGoal)
    setGoals(goalsCopy)
  }

  const handleOnDelete = idx => {
    const goalsCopy = [...goals]
    goalsCopy.splice(idx, 1)
    setGoals(goalsCopy)
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
