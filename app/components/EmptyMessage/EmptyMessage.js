import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

const EmptyMessage = () => (
  <View style={styles.empty}>
    <Text style={styles.emptyHeader}>
      No goals
    </Text>
    <Text style={styles.emptyText}>
      Let's get started!
    </Text>
  </View>
)

export default EmptyMessage
