import React from 'react'
import { View, Text } from 'react-native'
import { Icon } from 'react-native-elements'
import PropTypes from 'prop-types'
import styles from './styles'

const { wrapper, icon, header, message } = styles

const Toast = ({ text1, props }) => (
  <View style={wrapper}>
    <Icon
      name='error-outline'
      type='material'
      color={icon.color}
      style={icon}
    />
    <Text style={header}>{text1}</Text>
    <Text style={message}>{props.text2}</Text>
  </View>
)

Toast.propTypes = {
  text1: PropTypes.string.isRequired
}

export default Toast
