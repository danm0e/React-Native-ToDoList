import React from 'react';
import { Text, View, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles'

const List = ({ goals }) => (
	goals.length ? (
		<FlatList
			style={styles.list}
			data={goals}
			keyExtractor={goal => goal.id}
			renderItem={data => (
				<View style={styles.item}>
					<Text style={styles.itemNumber}>{data.index + 1}</Text>
					<Text>{data.item.value}</Text>
				</View>
			)}
		/>
	) : (
		<View style={styles.empty}>
			<Text style={styles.emptyHeader}>
				No goals!
			</Text>
			<Text style={styles.emptyText}>
				Please add some to see them here.
			</Text>
		</View>
	)
);

List.propTypes = {
	goals: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			value: PropTypes.string.isRequired
		}).isRequired
	).isRequired
};

export default List;