import React, { useState, useRef } from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";

import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";

const generateRandomNumber = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rnd = Math.floor(Math.random() * (max - min)) + min;

  if (rnd === exclude) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return rnd;
  }
};

const GameScreen = (props) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomNumber(1, 100, props.userChoice)
  );
  const currentMin = useRef(1);
  const currentMax = useRef(100);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < props.userChoice) ||
      (direction === "greater" && currentGuess > props.userChoice)
    ) {
      Alert.alert("Don't lie!", "You know it is not right hint...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      currentMax.current = currentGuess;
    } else {
      currentMin.current = currentGuess;
    }
    const nextGuess = generateRandomNumber(
      currentMin.current,
      currentMax.current,
      currentGuess
    );
    console.log(nextGuess);
    console.log(props.userChoice);
    if (nextGuess == props.userChoice) {
      console.log("FOUND!");
      Alert.alert("Congratulations!", "Your number is correctly found...", [
        { text: "Start New Game", style: "default", onPress: props.onNewGame },
      ]);
    }
    setCurrentGuess(nextGuess);
  };
  
  return (
    <View style={styles.screen}>
      <Text>Guessed Number</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.btnContainer}>
        <Button title={"Lower"} onPress={() => nextGuessHandler("lower")} />
        <Button title={"Greater"} onPress={() => nextGuessHandler("greater")} />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: 300,
    maxWidth: "80%",
    marginTop: 20,
  },
});

export default GameScreen;