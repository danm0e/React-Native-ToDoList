import React from 'react'
import { Text, View, FlatList, TouchableOpacity } from 'react-native'
import { CheckBox, Icon } from 'react-native-elements'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import PropTypes from 'prop-types'
import styles from './styles'

const {
  list,
  item,
  itemComplete,
  itemNumber,
  itemText,
  itemTextComplete,
  deleteBtn,
  deleteBtnText
} = styles

const List = ({ items, setItems }) => {
  const handleOnComplete = idx => {
    const itemsCopy = [...items]
    const updatedGoal = itemsCopy[idx]
    updatedGoal.isComplete = !updatedGoal.isComplete
    itemsCopy.splice(idx, 1, updatedGoal)
    setItems(itemsCopy)
  }

  const handleOnDelete = idx => {
    const itemsCopy = [...items]
    itemsCopy.splice(idx, 1)
    setItems(itemsCopy)
  }

  const handleOnSwipe = idx => (
    <TouchableOpacity onPress={() => handleOnDelete(idx)}>
      <View style={deleteBtn}>
        <Icon
          color='#FFF'
          name='delete-forever'
          size={25}
          type='material'
        />
        <Text style={deleteBtnText}>Delete</Text>
      </View>
    </TouchableOpacity>
  )

  return (
    <FlatList
      style={list}
      data={items}
      keyExtractor={goal => goal.id}
      renderItem={data => {
        const { index, item: { value, isComplete } } = data

        return (
          <Swipeable renderRightActions={() => handleOnSwipe(index)}>
            <View style={isComplete ? itemComplete : item}>
              <Text style={itemNumber}>{index + 1}</Text>
              <Text style={isComplete ? itemTextComplete : itemText}>{value}</Text>
              <CheckBox
                checked={isComplete}
                onPress={() => handleOnComplete(index)}
                testID='Toggle Complete'
              />
            </View>
          </Swipeable>
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
