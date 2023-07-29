import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

export const Form = ({ addHandler }) => {
  const [text, setText] = useState('');

  const onChange = (text) => {
    setText(text);
  };

  const addTask = () => {
    addHandler(text);
    setText('');
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChange}
        value={text}
        placeholder="Task"
      />
      <Button title="Add" color="green" onPress={addTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    padding: 10,
    marginVertical: 30,
    marginHorizontal: '20%',
    width: '60%',
  },
});
