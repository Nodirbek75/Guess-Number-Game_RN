import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './components/Header';
import StartingGameScreen from './screens/StartingGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRound, setGuessRound] = useState(0);

  const newGameHandler = () => {
    setGuessRound(0);
    setUserNumber(null);
  }

  const startGameHandler = selectedNumber => {
    setUserNumber(selectedNumber);
  }

  const gameOverHandler = rounds => {
    setGuessRound(rounds);
  }

  let content = <StartingGameScreen onStartGame={startGameHandler}/>;

  if(userNumber && guessRound <= 0){
    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler}/>
  }else if(guessRound > 0){
    content = <GameOverScreen rounds={guessRound} userChoice={userNumber} onNewGame={newGameHandler}/>
  }

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
