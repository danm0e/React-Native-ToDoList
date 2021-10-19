import React, { useState } from 'react';
import { View } from 'react-native';
import Header from '@components/Header'
import List from '@components/List'
import styles from './styles'

const ToDoList = () => {
	const [newGoal, setNewGoal] = useState('')
	const [goals, setGoals] = useState([])

	const handleOnChange = value => {
		setNewGoal(value)
	}

	const handleOnAdd = () => {
		newGoal.length && setGoals(currentGoals => [
			...currentGoals,
			// using math random to mock key
			{ id: Math.random().toString(), value: newGoal }
		])
	}

	return (
		<View style={styles.container}>
			<Header
				value={newGoal}
				onChange={handleOnChange}
				onAdd={handleOnAdd}
			/>
			<List goals={goals} />
		</View >
	);
}

export default ToDoList;