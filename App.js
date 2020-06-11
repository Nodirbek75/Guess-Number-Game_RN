import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './components/Header';
import StartingGameScreen from './screens/StartingGameScreen';
export default function App() {
  return (
    <View style={styles.screen}>
      <Header title={"Guess a Number"} />
      <StartingGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
