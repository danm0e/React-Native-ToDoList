import React from 'react'
import { Text, View, FlatList } from 'react-native'
import PropTypes from 'prop-types'
import styles from './styles'

const List = ({ goals }) => (
  <FlatList
    style={styles.list}
    data={goals}
    keyExtractor={goal => goal.id}
    renderItem={data => (
      <View style={styles.item}>
        <Text style={styles.itemNumber}>{data.index + 1}</Text>
        <Text style={styles.itemText}>{data.item.value}</Text>
      </View>
    )}
  />
)

List.propTypes = {
  goals: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}

export default List
