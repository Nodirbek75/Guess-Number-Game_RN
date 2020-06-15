import React from "react";
import { View, StyleSheet, Text, Button, Image } from "react-native";

import TitleText from "../components/TitleText";
import BodyText from "../components/BodyText";
import Colors from "../constants/colors";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <TitleText>GAME OVER!</TitleText>
      <View style={styles.imgContainer}>
        <Image
          style={styles.img}
          source={require("../assets/original.png")}
          resizeMode={"cover"}
        />
      </View>
      <BodyText style={styles.resultText}>
        Your phone needed <Text style={styles.highlight}>{props.rounds}</Text>{" "}
        rounds to guess the number{" "}
        <Text style={styles.highlight}>{props.userChoice}</Text>
      </BodyText>
      <Button title={"New Game"} color={Colors.secondary} onPress={props.onNewGame} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imgContainer: {
    width: 300,
    height: 300,
    borderWidth: 3,
    borderRadius: 200,
    overflow: "hidden",
    marginVertical: 20,
  },
  img: {
    width: "100%",
    height: "100%",
  },
  resultText: {
    fontSize: 20,
    marginHorizontal: 30,
    marginVertical: 15,
    textAlign: "center",
  },
  highlight: {
    color: Colors.primary,
    fontFamily: "open-sans-bold",
  },
});

export default GameOverScreen;
