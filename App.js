import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from '@components/Header'
import List from '@components/List'

export default function App() {
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

const styles = StyleSheet.create({
  container: {
    paddingVertical: 50,
  }
});
