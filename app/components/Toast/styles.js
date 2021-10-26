import { StyleSheet } from 'react-native'
import { palette } from '@assets/styles/colors'
import theme from '@assets/styles/theme'

const spacingSM = theme.spacing.sm
const spacingMD = theme.spacing.md
const spacingLG = theme.spacing.lg
const wrapperBgColor = 'rgba(0,0,0,0.85)'

const highlightColor = palette.primary
const messageColor = palette.white

const styles = StyleSheet.create({
  wrapper: {
    padding: spacingLG,
    maxWidth: '90%',
    backgroundColor: wrapperBgColor,
    borderRadius: theme.radius.md,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  icon: {
    marginRight: spacingSM,
    color: highlightColor
  },

  header: {
    color: highlightColor,
    fontWeight: 'bold',
    marginRight: spacingMD
  },

  message: {
    color: messageColor
  }
})

export default styles
