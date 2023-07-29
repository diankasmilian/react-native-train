import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
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

  const addHandler = (text) => {
    setList((list) => {
      return [
        ...list,
        { text: text, key: Math.random().toString.substring(7) },
      ];
    });
  };

  const deleteHandler = (key) => {
    setList((list) => {
      return list.filter((item) => item.key !== key);
    });
  };

  return (
    <View>
      <Header />
      <Form addHandler={addHandler} />
      <View>
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

const styles = StyleSheet.create({});
