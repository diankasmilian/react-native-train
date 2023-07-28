import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  Button,
  Alert,
  ImageBackground,
  View,
} from 'react-native';

export default function App() {
  const handlePressButton = () => {
    return Alert.alert('Hello!', 'Say hello me)', [
      { text: 'Hello', onPress: handlePressHello },
      { text: 'Exit' },
    ]);
  };

  const handlePressHello = () =>
    Alert.alert('Hello!', 'Thanks, have a nice day😉', [{ text: 'Thanks' }, ,]);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./assets/background.png')}
        resizeMode="cover"
        style={styles.image}
      >
        <Text>Hello word!</Text>
        <Button title="Click" onPress={handlePressButton} />
        <Text>Vay, this is good!</Text>
      </ImageBackground>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});
