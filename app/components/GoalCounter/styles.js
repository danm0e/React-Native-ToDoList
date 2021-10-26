import { StyleSheet } from 'react-native'
import { palette } from '@assets/styles/colors'
import theme from '@assets/styles/theme'

const spacingSM = theme.spacing.sm
const spacingLG = theme.spacing.lg
const contentBorderColor = palette.gray[40]
const messageColor = palette.gray[50]
const highlightColor = palette.primary
const iconColor = palette.highlight

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: spacingLG,
    paddingBottom: 0
  },

  content: {
    alignItems: 'center',
    borderColor: contentBorderColor,
    borderRadius: 20,
    borderWidth: 1,
    flexDirection: 'row',
    height: 40,
    justifyContent: 'center',
    paddingVertical: spacingSM,
    paddingHorizontal: spacingLG
  },

  message: {
    color: messageColor
  },

  highlight: {
    color: highlightColor,
    fontWeight: 'bold',
    paddingHorizontal: spacingSM
  },

  icon: {
    color: iconColor
  }
})

export default styles
