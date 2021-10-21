import React from 'react'
import { Text, View, FlatList } from 'react-native'
import { CheckBox } from 'react-native-elements'
import PropTypes from 'prop-types'
import styles from './styles'

const { list, item, itemComplete, itemNumber, itemText, itemTextComplete } = styles

const List = ({ items, setItems }) => {
  const handleOnComplete = idx => {
    const itemsCopy = [...items]
    const updatedGoal = itemsCopy[idx]
    updatedGoal.isComplete = !updatedGoal.isComplete
    itemsCopy.splice(idx, 1, updatedGoal)
    setItems(itemsCopy)
  }

  return (
    <FlatList
      style={list}
      data={items}
      keyExtractor={goal => goal.id}
      renderItem={data => {
        const { index, item: { value, isComplete } } = data

        return (
          <View style={isComplete ? itemComplete : item}>
            <Text style={itemNumber}>{index + 1}</Text>
            <Text style={isComplete ? itemTextComplete : itemText}>{value}</Text>
            <CheckBox
              checked={isComplete}
              onPress={() => handleOnComplete(index)}
              testID='Toggle Complete'
            />
          </View>
        )
      }}
    />
  )
}

List.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  setItems: PropTypes.func.isRequired
}

export default List
