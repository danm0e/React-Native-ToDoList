import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Button, TextInput } from 'react-native';
import Header from './components/Header'

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
      <FlatList
        keyExtractor={item => item.id}
        style={styles.row}
        data={goals}
        renderItem={data => (
          <View style={styles.item}>
            <Text>{data.item.value}</Text>
          </View>
        )}
      />
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 50,
  },
  row: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  input: {
    borderColor: '#ccc',
    borderRadius: 7,
    borderWidth: 1,
    padding: 10,
    width: '85%',
    backgroundColor: 'white'
  },
  item: {
    borderRadius: 7,
    padding: 10,
    backgroundColor: '#f1f1f1',
    marginBottom: 5
  }
});
