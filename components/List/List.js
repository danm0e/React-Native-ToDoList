import React from 'react';
import { Text, View, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles'

const List = ({ goals }) => (
	<FlatList
		keyExtractor={goal => goal.id}
		style={styles.list}
		data={goals}
		renderItem={data => (
			<View style={styles.item}>
				<Text style={styles.itemNumber}>{data.index + 1}</Text>
				<Text>{data.item.value}</Text>
			</View>
		)}
	/>
);

List.propTypes = {
	goals: PropTypes.array.isRequired
};

export default List;