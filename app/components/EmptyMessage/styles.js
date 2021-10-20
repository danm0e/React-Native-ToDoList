import { StyleSheet } from 'react-native'
import { palette } from '@assets/styles/colors'
import theme from '@assets/styles/theme'

const spacingMD = theme.spacing.md
const emptyHeaderColor = palette.primary
const emptyTextColor = palette.gray[50]

const styles = StyleSheet.create({
  empty: {
    alignItems: 'center',
    height: '95%',
    justifyContent: 'center'
  },

  emptyHeader: {
    color: emptyHeaderColor,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: spacingMD
  },

  emptyText: {
    color: emptyTextColor
  }
})

export default styles
