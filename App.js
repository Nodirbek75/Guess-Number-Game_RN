import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './components/Header';
import StartingGameScreen from './screens/StartingGameScreen';
import GameScreen from './screens/GameScreen';
export default function App() {

  const [userNumber, setUserNumber] = useState();

  const startGameHandler = selectedNumber => {
    setUserNumber(selectedNumber);
  }

  const newGameHandler = () => {
    setUserNumber('');
  }

  const content = userNumber ? <GameScreen userChoice={userNumber} onNewGame={newGameHandler}/> : <StartingGameScreen onStartGame={startGameHandler}/>

  return (
    <View style={styles.screen}>
      <Header title={"Guess a Number"} />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
