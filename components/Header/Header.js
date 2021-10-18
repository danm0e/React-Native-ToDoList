import React from 'react';
import PropTypes from 'prop-types';
import { View, Button, TextInput } from 'react-native';
import styles from './styles'

const Header = ({ value, onChange, onAdd }) => (
	<View style={styles.header}>
		<TextInput
			style={styles.input}
			placeholder="Add a Goal"
			onChangeText={onChange}
			value={value}
		/>
		<Button
			title="Add"
			onPress={onAdd}
		/>
	</View>
);

Header.propTypes = {
	value: PropTypes.string,
	onChange: PropTypes.func.isRequired,
	onAdd: PropTypes.func.isRequired
};

// const styles = StyleSheet.create({
// 	header: {
// 		paddingHorizontal: 15,
// 		paddingVertical: 10,
// 		flexDirection: 'row',
// 		justifyContent: 'space-between',
// 		backgroundColor: '#1B2737'
// 	},
// 	input: {
// 		borderColor: '#ccc',
// 		borderRadius: 7,
// 		borderWidth: 1,
// 		padding: 10,
// 		width: '85%',
// 		backgroundColor: 'white'
// 	},
// });


export default Header;