import { StyleSheet } from 'react-native'
import { palette } from '@assets/styles/colors'
import theme from '@assets/styles/theme'

const spacingLG = theme.spacing.lg
const spacingMD = theme.spacing.md
const themeRadius = theme.radius.md

const wrapperBgColor = palette.secondary
const headerColor = palette.white
const inputBgColor = palette.lowlight
const inputTextColor = palette.white
const inputPlaceholderColor = palette.gray[70]
const iconColor = palette.primary
const addButtonColor = palette.primary
const cancelButtonColor = palette.danger

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    backgroundColor: wrapperBgColor,
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: spacingLG,
    paddingVertical: spacingMD
  },

  header: {
    color: headerColor,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: spacingLG
  },

  input: {
    backgroundColor: inputBgColor,
    borderRadius: themeRadius,
    color: inputTextColor,
    padding: spacingMD,
    textAlign: 'center',
    width: '80%'
  },

  placeholder: {
    color: inputPlaceholderColor,
    fontStyle: 'italic'
  },

  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: spacingLG,
    width: '80%'
  },

  cancelButton: {
    color: cancelButtonColor
  },

  addButton: {
    color: addButtonColor
  },

  icon: {
    marginBottom: spacingLG,
    color: iconColor
  }
})

export default styles
