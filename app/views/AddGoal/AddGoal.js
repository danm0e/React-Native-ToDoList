import React from 'react'
import PropTypes from 'prop-types'
import { Modal, View, Text, Button, TextInput } from 'react-native'
import { Icon } from 'react-native-elements'
import styles from './styles'

const {
  wrapper,
  icon,
  header,
  input,
  placeholder,
  buttonRow,
  cancelButton,
  addButton
} = styles

const AddGoalView = ({ value, onChange, onAdd, onCancel, isVisible }) => (
  <Modal
    visible={isVisible}
    animationType='slide'
    testID='AddGoal modal'
  >
    <View style={wrapper}>
      <Icon
        name='loupe'
        type='material'
        color={icon.color}
        size={40}
        style={icon}
      />

      <Text style={header}>
        What do you need to do?
      </Text>

      <TextInput
        style={input}
        placeholder='Add a Goal'
        placeholderTextColor={placeholder.color}
        onChangeText={onChange}
        value={value}
        // clearButtonMode='always'
        autoFocus
      />

      <View style={buttonRow}>
        <Button
          title='Cancel'
          onPress={onCancel}
          color={cancelButton.color}
          testID='Cancel button'
        />

        <Button
          title='Add'
          onPress={onAdd}
          color={addButton.color}
          testID='Add button'
        />
      </View>
    </View>
  </Modal>
)

AddGoalView.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  isVisible: PropTypes.bool
}

export default AddGoalView
