import React from 'react'
import { FlatList } from 'react-native'
import { ListItem, Button } from 'react-native-elements'
import PropTypes from 'prop-types'
import Item from '@components/Item'
import styles from './styles'

const {
  list,
  container,
  buttonContainer,
  deleteBtn
} = styles

const { Swipeable } = ListItem
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
            <Item
              index={index}
              value={value}
              isComplete={isComplete}
            />
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
