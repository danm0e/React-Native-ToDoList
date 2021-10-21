import { StyleSheet } from 'react-native'
import { palette } from '@assets/styles/colors'
import theme from '@assets/styles/theme'

const itemBgColor = palette.gray[10]
const itemHighlightColor = palette.primary
const radius = theme.radius.sm
const spacingSM = theme.spacing.sm
const spacingMD = theme.spacing.md
const spacingLG = theme.spacing.lg

const itemStyles = {
  alignItems: 'center',
  backgroundColor: itemBgColor,
  borderLeftColor: itemHighlightColor,
  borderLeftWidth: radius,
  borderRadius: radius,
  flexDirection: 'row',
  marginBottom: spacingMD,
  paddingVertical: spacingSM
}

const styles = StyleSheet.create({
  list: {
    height: '100%',
    paddingHorizontal: spacingLG,
    paddingVertical: spacingMD
  },

  item: {
    ...itemStyles
  },

  itemComplete: {
    ...itemStyles,
    opacity: 0.5
  },

  itemNumber: {
    color: itemHighlightColor,
    flexBasis: 20,
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: spacingMD,
    marginRight: spacingMD,
    minWidth: 20
  },

  itemText: {
    flex: 1,
    flexWrap: 'wrap'
  },

  itemTextComplete: {
    flex: 1,
    textDecorationLine: 'line-through'
  }
})

export default styles
