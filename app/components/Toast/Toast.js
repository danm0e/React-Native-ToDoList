import React from 'react'
import { View, Text } from 'react-native'
import { Icon } from 'react-native-elements'
import PropTypes from 'prop-types'
import styles from './styles'

const { wrapper, iconStyle, heading, message } = styles

const Toast = ({ icon, header, text }) => (
  <View style={wrapper}>
    <Icon
      name={icon}
      type='material'
      color={iconStyle.color}
      style={iconStyle}
    />
    <Text style={heading}>{header}</Text>
    <Text style={message}>{text}</Text>
  </View>
)

Toast.propTypes = {
  icon: PropTypes.string,
  header: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default Toast
