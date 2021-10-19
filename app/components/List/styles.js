import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	list: {
		height: '100%',
		paddingHorizontal: 15,
		paddingVertical: 10,
	},

	item: {
		alignItems: 'center',
		backgroundColor: '#f1f1f1',
		borderLeftColor: '#1D8DEE',
		borderLeftWidth: 7,
		borderRadius: 7,
		flexDirection: 'row',
		marginBottom: 10,
		padding: 10,
	},

	itemNumber: {
		alignSelf: 'flex-start',
		color: '#1D8DEE',
		flexBasis: 20,
		fontSize: 18,
		fontWeight: 'bold',
		marginRight: 10,
		minWidth: 20,
	},

	itemText: {
		flex: 1,
		flexWrap: 'wrap',
	},

	empty: {
		alignItems: 'center',
		height: '95%',
		justifyContent: 'center',
	},

	emptyHeader: {
		color: '#1D8DEE',
		fontSize: 18,
		fontWeight: 'bold',
		marginBottom: 10,
	},

	emptyText: {
		color: '#777'
	}
});

export default styles;