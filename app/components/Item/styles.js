import { StyleSheet } from 'react-native'
import { palette } from '@assets/styles/colors'
import theme from '@assets/styles/theme'

const itemBgColor = palette.gray[10]
const itemHighlightColor = palette.primary
const itemCompleteColor = palette.neutral
const radius = theme.radius.sm
const spacingMD = theme.spacing.md

const itemStyles = {
  alignItems: 'center',
  backgroundColor: itemBgColor,
  borderLeftColor: itemHighlightColor,
  borderLeftWidth: radius,
  borderRadius: radius,
  flexDirection: 'row',
  padding: 0
}

const itemNumberStyles = {
  color: itemHighlightColor,
  fontSize: 18,
  fontWeight: 'bold',
  marginLeft: spacingMD,
  marginRight: spacingMD,
  minWidth: 20
}

const styles = StyleSheet.create({
  item: {
    ...itemStyles
  },

  itemComplete: {
    ...itemStyles,
    borderLeftColor: itemCompleteColor
  },

  itemNumber: {
    ...itemNumberStyles
  },

  itemNumberComplete: {
    ...itemNumberStyles,
    color: itemCompleteColor
  },

  itemText: {
    flex: 1
  },

  itemTextComplete: {
    flex: 1,
    textDecorationLine: 'line-through',
    opacity: 0.5
  }
})

export default styles
