import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	list: {
		paddingHorizontal: 15,
		paddingVertical: 10,
	},

	item: {
		alignItems: 'center',
		backgroundColor: '#f1f1f1',
		borderRadius: 7,
		flexDirection: 'row',
		marginBottom: 5,
		padding: 10,
	},

	itemNumber: {
		color: '#1D8DEE',
		fontSize: 18,
		fontWeight: 'bold',
		marginRight: 10,
		minWidth: 20,
	}
});

export default styles;