import { StyleSheet } from 'react-native'
import { palette } from '@assets/styles/colors'
import theme from '@assets/styles/theme'

const itemBgColor = palette.gray[10]
const itemHighlightColor = palette.primary
const radius = theme.radius.sm
const spacingLG = theme.spacing.lg
const spacingMD = theme.spacing.md

const styles = StyleSheet.create({
  list: {
    height: '100%',
    paddingHorizontal: spacingLG,
    paddingVertical: spacingMD
  },

  item: {
    alignItems: 'center',
    backgroundColor: itemBgColor,
    borderLeftColor: itemHighlightColor,
    borderLeftWidth: radius,
    borderRadius: radius,
    flexDirection: 'row',
    marginBottom: spacingMD,
    padding: spacingMD
  },

  itemNumber: {
    alignSelf: 'flex-start',
    color: itemHighlightColor,
    flexBasis: 20,
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: spacingMD,
    minWidth: 20
  },

  itemText: {
    flex: 1,
    flexWrap: 'wrap'
  }
})

export default styles
