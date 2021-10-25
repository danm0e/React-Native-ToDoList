import React from 'react'
import { View, Text } from 'react-native'
import { CheckBox } from 'react-native-elements'
import PropTypes from 'prop-types'
import styles from './styles'

const {
  item,
  itemComplete,
  itemNumber,
  itemNumberComplete,
  itemText,
  itemTextComplete
} = styles

const Item = ({ index, value, isComplete }) => {
  const wrapper = isComplete ? itemComplete : item
  const number = isComplete ? itemNumberComplete : itemNumber
  const task = isComplete ? itemTextComplete : itemText

  return (
    <View style={wrapper}>
      <Text style={number}>{index + 1}</Text>
      <Text style={task} numberOfLines={1}>{value}</Text>
      <CheckBox checked={isComplete} disabled />
    </View>
  )
}

Item.propTypes = {
  index: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired,
  isComplete: PropTypes.bool
}

export default Item
