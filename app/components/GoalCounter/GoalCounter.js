import React from 'react'
import { View, Text } from 'react-native'
import { Icon } from 'react-native-elements'
import PropTypes from 'prop-types'
import styles from './styles'

const { wrapper, content, message, highlight } = styles

const GoalCounter = ({ goals }) => {
  const totalGoals = goals.length
  const totalComplete = goals.filter(goal => goal.isComplete === true).length
  const allComplete = totalComplete === totalGoals

  const Message = () => (
    allComplete
      ? (
        <>
          <Text style={highlight}>All done!</Text>
          <Icon
            name='emoji-events'
            type='material'
            color='#999'
          />
        </>
        )
      : (
        <>
          <Text style={highlight}>{totalComplete}</Text>
          <Text style={message}>of</Text>
          <Text style={highlight}>{totalGoals}</Text>
          <Text style={message}>complete</Text>
        </>
        )
  )

  return (
    <View style={wrapper}>
      <View style={content}>
        <Message />
      </View>
    </View>
  )
}

GoalCounter.propTypes = {
  goals: PropTypes.array.isRequired
}

export default GoalCounter
