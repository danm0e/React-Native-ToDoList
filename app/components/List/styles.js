import { StyleSheet } from 'react-native'
import { palette } from '@assets/styles/colors'

const styles = StyleSheet.create({
  list: {
    height: '100%',
    paddingHorizontal: 15,
    paddingVertical: 10
  },

  item: {
    alignItems: 'center',
    backgroundColor: palette.gray[10],
    borderLeftColor: palette.primary,
    borderLeftWidth: 5,
    borderRadius: 5,
    flexDirection: 'row',
    marginBottom: 10,
    padding: 10
  },

  itemNumber: {
    alignSelf: 'flex-start',
    color: palette.primary,
    flexBasis: 20,
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
    minWidth: 20
  },

  itemText: {
    flex: 1,
    flexWrap: 'wrap'
  },

  empty: {
    alignItems: 'center',
    height: '95%',
    justifyContent: 'center'
  },

  emptyHeader: {
    color: palette.primary,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },

  emptyText: {
    color: palette.gray[50]
  }
})

export default styles
