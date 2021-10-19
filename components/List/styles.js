import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	list: {
		paddingHorizontal: 15,
		paddingVertical: 10,
	},

	item: {
		backgroundColor: '#f1f1f1',
		borderRadius: 7,
		flexDirection: 'row',
		marginBottom: 5,
		padding: 10,
		alignItems: 'center'
	},

	itemNumber: {
		marginRight: 10,
		fontSize: 18,
		fontWeight: 'bold',
		color: '#1D8DEE'
	}
});

export default styles;