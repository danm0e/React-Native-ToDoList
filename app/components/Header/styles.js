import { StyleSheet } from 'react-native'
import { palette } from '@assets/styles/colors'
import theme from '@assets/styles/theme'

const headerBgColor = palette.secondary
const spacingLG = theme.spacing.lg
const spacingMD = theme.spacing.md
const inputBgColor = palette.white
const inputBorderColor = palette.neutral
const themeRadius = theme.radius.md

const styles = StyleSheet.create({
  header: {
    backgroundColor: headerBgColor,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: spacingLG,
    paddingVertical: spacingMD
  },

  input: {
    backgroundColor: inputBgColor,
    borderColor: inputBorderColor,
    borderRadius: themeRadius,
    borderWidth: 2,
    padding: spacingMD,
    width: '85%'
  }
})

export default styles
