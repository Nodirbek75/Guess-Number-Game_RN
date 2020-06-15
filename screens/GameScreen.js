import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, Alert } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import MainButton from "../components/MainButton";
import NumberContainer from "../components/NumberContainer";
import BodyText from "../components/BodyText";
import Card from "../components/Card";
import Colors from "../constants/colors";

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

const renderListItems = (value, numberOfRound) => {
  return(
    <View style={styles.listItem} key={value}>
      <Text>#{numberOfRound}</Text>
      <Text>{value}</Text>
    </View>
  )
}

const GameScreen = (props) => {
  const initGueass = generateRandomNumber(1, 100, props.userChoice);
  const [currentGuess, setCurrentGuess] = useState(initGueass);
  const [pastGuesses, setPastGuesses] = useState([initGueass]);
  const currentMin = useRef(1);
  const currentMax = useRef(100);

  const { userChoice, onGameOver } = props;

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(pastGuesses.length);
    }
  }, [currentGuess, userChoice, onGameOver]);

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
      currentMin.current = currentGuess + 1;
    }
    const nextGuess = generateRandomNumber(
      currentMin.current,
      currentMax.current,
      currentGuess
    );
    setCurrentGuess(nextGuess);
    setPastGuesses(crntPastGuess => [nextGuess,...crntPastGuess]);
  };

  return (
    <View style={styles.screen}>
      <BodyText>Guessed Number</BodyText>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.btnContainer}>
        <MainButton
          style={styles.btnLower}
          onPress={() => nextGuessHandler("lower")}>
          <Ionicons name={"md-remove"} color={"white"} size={24}/>
        </MainButton>
        <MainButton onPress={() => nextGuessHandler("greater")}>
          <Ionicons name={"md-add"} color={"white"} size={24}/>
        </MainButton>
      </Card>
      <View style={styles.list}>
      <ScrollView>
        {pastGuesses.map((guess, index) => renderListItems(guess, pastGuesses.length-index))}
      </ScrollView>
      </View>
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
  btnLower: {
    backgroundColor: Colors.secondary,
  },
  list: {
    width: "70%",
    flex: 1
  },
  listItem:{
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 3,
    padding: 15,
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: "space-between",
  }
});

export default GameScreen;
