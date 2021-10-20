import React from 'react'
import PropTypes from 'prop-types'
import { View, Button, TextInput } from 'react-native'
import styles from './styles'

const Header = ({ value, onChange, onAdd }) => (
  <View style={styles.header}>
    <TextInput
      style={styles.input}
      placeholder='Add a Goal'
      onChangeText={onChange}
      value={value}
    />
    <Button
      title='Add'
      onPress={onAdd}
    />
  </View>
)

Header.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired
}

export default Header
