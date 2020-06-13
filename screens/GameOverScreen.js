import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>GAME OVER!</Text>
      <Text>Number of Rounds: {props.rounds}</Text>
      <Text>Number was: {props.userChoice}</Text>
      <Button title={"New Game"} onPress={props.onNewGame}/>
    </View>
  );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});

export default GameOverScreen;