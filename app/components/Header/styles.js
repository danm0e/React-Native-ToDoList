import { StyleSheet } from 'react-native'
import { palette } from '@assets/styles/colors'

const styles = StyleSheet.create({
  header: {
    backgroundColor: palette.secondary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10
  },

  input: {
    backgroundColor: palette.white,
    borderColor: palette.neutral,
    borderRadius: 7,
    borderWidth: 2,
    padding: 10,
    width: '85%'
  }
})

export default styles
