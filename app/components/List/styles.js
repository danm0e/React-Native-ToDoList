import { StyleSheet } from 'react-native'
import { palette } from '@assets/styles/colors'
import theme from '@assets/styles/theme'

const spacingMD = theme.spacing.md
const spacingLG = theme.spacing.lg
const deleteBtnBgColor = palette.danger

const styles = StyleSheet.create({
  list: {
    height: '100%',
    paddingHorizontal: spacingLG,
    paddingVertical: spacingMD
  },

  container: {
    borderBottomWidth: 4,
    borderColor: 'white',
    borderTopWidth: 4,
    padding: 0
  },

  buttonContainer: {
    justifyContent: 'center'
  },

  deleteBtn: {
    backgroundColor: deleteBtnBgColor,
    borderRadius: theme.borderRadius,
    borderTopRightRadius: theme.radius.sm,
    color: palette.white,
    height: 50,
    paddingRight: 20
  },

  deleteBtnText: {
    color: palette.white
  }
})

export default styles
