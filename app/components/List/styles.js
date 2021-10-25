import { StyleSheet } from 'react-native'
import { palette } from '@assets/styles/colors'
import theme from '@assets/styles/theme'

const itemBgColor = palette.gray[10]
const itemHighlightColor = palette.primary
const itemCompleteColor = palette.neutral
const radius = theme.radius.sm
const spacingMD = theme.spacing.md
const spacingLG = theme.spacing.lg
const deleteBtnBgColor = palette.danger

const itemStyles = {
  backgroundColor: itemBgColor,
  borderLeftColor: itemHighlightColor,
  borderLeftWidth: radius,
  borderRadius: radius,
  padding: 0
}

const itemNumberStyles = {
  color: itemHighlightColor,
  flexBasis: 20,
  fontSize: 18,
  fontWeight: 'bold',
  marginLeft: spacingMD,
  marginRight: spacingMD,
  minWidth: 20
}

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

  item: {
    ...itemStyles
  },

  itemComplete: {
    ...itemStyles,
    borderLeftColor: itemCompleteColor
  },

  inner: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  itemNumber: {
    ...itemNumberStyles
  },

  itemNumberComplete: {
    ...itemNumberStyles,
    color: itemCompleteColor
  },

  itemText: {
    flex: 1,
    flexWrap: 'wrap'
  },

  itemTextComplete: {
    flex: 1,
    textDecorationLine: 'line-through',
    opacity: 0.5
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
