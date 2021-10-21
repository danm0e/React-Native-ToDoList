import React from 'react'
import { Text, View, FlatList } from 'react-native'
import { CheckBox } from 'react-native-elements'
import PropTypes from 'prop-types'
import styles from './styles'

const { list, item, itemComplete, itemNumber, itemText, itemTextComplete } = styles

const List = ({ goals, onComplete }) => (
  <FlatList
    style={list}
    data={goals}
    keyExtractor={goal => goal.id}
    renderItem={data => {
      const { index, item: { value, isComplete } } = data

      return (
        <View style={isComplete ? itemComplete : item}>
          <Text style={itemNumber}>{index + 1}</Text>
          <Text style={isComplete ? itemTextComplete : itemText}>{value}</Text>
          <CheckBox
            checked={isComplete}
            onPress={() => onComplete(index)}
          />
        </View>
      )
    }}
  />
)

List.propTypes = {
  goals: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onComplete: PropTypes.func.isRequired
}

export default List
