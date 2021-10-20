import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

const EmptyMessage = () => (
  <View style={styles.empty}>
    <Text style={styles.emptyHeader}>
      No goals!
    </Text>
    <Text style={styles.emptyText}>
      Please add some to see them here.
    </Text>
  </View>
)

export default EmptyMessage
