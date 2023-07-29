import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Text, Alert } from 'react-native';
import { Header } from './src/components/Header';
import { ListItem } from './src/components/ListItem';
import { Form } from './src/components/Form';

export default function App() {
  const [list, setList] = useState([
    { text: 'Buy milk', key: '1' },
    { text: 'Buy car', key: '2' },
    { text: 'Buy potato', key: '3' },
    { text: 'Find job', key: '4' },
  ]);

  function generateRandomId() {
    const timestamp = Date.now().toString(36); // Поточний час у базовому 36 форматі
    const randomChars = Math.random().toString(36).substr(2, 5); // Випадкові символи (5 символів після коми) у базовому 36 форматі
    const randomId = `${timestamp}-${randomChars}`;
    return randomId;
  }

  const addHandler = (text) => {
    const repeatTask = list.find(
      (item) => item.text.toLowerCase() === text.toLowerCase()
    );

    repeatTask
      ? Alert.alert('Oh no', 'You have this task')
      : setList((list) => {
          return [...list, { text: text, key: generateRandomId() }];
        });
  };

  const deleteHandler = (key) => {
    setList((list) => {
      return list.filter((item) => item.key !== key);
    });
  };

  return (
    <View style={styles.container}>
      <Header />
      <Form addHandler={addHandler} />
      <View style={styles.listContainer}>
        <FlatList
          data={list}
          renderItem={({ item }) => (
            <ListItem el={item} deleteHandler={deleteHandler} />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
  },
});
