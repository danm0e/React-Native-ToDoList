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

const List = ({ items, onComplete, onDelete }) => (
  <FlatList
    style={list}
    data={items}
    keyExtractor={goal => goal.id}
    renderItem={data => {
      const { index, item: { value, isComplete } } = data

      return (
        <Swipeable
          onPress={() => onComplete(index)}
          containerStyle={container}
          rightStyle={buttonContainer}
          rightContent={
            <Button
              title='Delete'
              icon={icon}
              buttonStyle={deleteBtn}
              onPress={() => onDelete(index)}
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

List.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onComplete: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default List
