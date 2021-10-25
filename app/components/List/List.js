import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { CheckBox, ListItem, Button } from 'react-native-elements'
import PropTypes from 'prop-types'
import styles from './styles'

const {
  list,
  container,
  item,
  inner,
  itemComplete,
  itemNumber,
  itemNumberComplete,
  itemText,
  itemTextComplete,
  buttonContainer,
  deleteBtn
} = styles

const { Swipeable, Content } = ListItem
const icon = { name: 'delete', color: 'white' }

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

  return (
    <FlatList
      style={list}
      data={items}
      keyExtractor={goal => goal.id}
      renderItem={data => {
        const { index, item: { value, isComplete } } = data

        const content = isComplete ? itemComplete : item
        const number = isComplete ? itemNumberComplete : itemNumber
        const task = isComplete ? itemTextComplete : itemText

        return (
          <Swipeable
            onPress={() => handleOnComplete(index)}
            containerStyle={container}
            rightStyle={buttonContainer}
            rightContent={
              <Button
                title='Delete'
                icon={icon}
                buttonStyle={deleteBtn}
                onPress={() => handleOnDelete(index)}
              />
            }
          >
            <Content style={content}>
              <View style={inner}>
                <Text style={number}>{index + 1}</Text>
                <Text style={task} numberOfLines={1}>{value}</Text>
                <CheckBox
                  disabled
                  checked={isComplete}
                />
              </View>
            </Content>
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
