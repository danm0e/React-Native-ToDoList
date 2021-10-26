import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import { FAB as FaButton } from 'react-native-elements'
import AddGoal from '@views/AddGoal'
import List from '@components/List'
import GoalCounter from '@components/GoalCounter'
import EmptyMessage from '@components/EmptyMessage'
import styles from './styles'
import Toast from 'react-native-toast-message'

const fabIcon = { name: 'add', type: 'material', color: 'white' }

const ToDoList = () => {
  const [newGoal, setNewGoal] = useState('')
  const [goals, setGoals] = useState([])
  const [modalOpen, setModalOpen] = useState(false)
  const [showToast, setShowToast] = useState(false)

  useEffect(() => {
    showToast && Toast.show({
      type: 'default',
      position: 'bottom',
      topOffset: 50,
      visibilityTime: 2000,
      onHide: () => setShowToast(false),
      text1: 'Oops!',
      props: {
        text2: 'That goal is already on the list!'
      }
    })
  }, [showToast])

  const handleOnChange = value => setNewGoal(value)

  const handleOnReset = () => {
    setModalOpen(false)
    setNewGoal('')
  }

  // only add the goal if it's not empty or doesn't already exist
  const isValidGoal = newGoal.length && !goals.find(goal => goal.value.toLowerCase() === newGoal.toLowerCase().trim())

  const handleOnAdd = () => {
    if (!isValidGoal) {
      handleOnReset()
      setShowToast(true)
      return
    }

    setGoals(currentGoals => [
      ...currentGoals,
      {
        id: Math.random().toString(), // mocking an id for key
        value: newGoal.trim(),
        isComplete: false
      }
    ])
    handleOnReset()
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
              <List items={goals} setItems={setGoals} />
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
