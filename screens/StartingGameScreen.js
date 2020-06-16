import React, { useState } from "react";
import {
  View,
  Button,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";

import Card from "../components/Card";
import Input from "../components/Input";
import MainButton from "../components/MainButton";
import NumberContainer from "../components/NumberContainer";
import TitleText from "../components/TitleText";
import BodyText from "../components/BodyText";
import Colors from "../constants/colors";

const StartingGameScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const inputChangeHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ""));
  };

  const resetHandler = () => {
    setEnteredValue("");
    setConfirmed(false);
  };

  const confirmHandler = () => {
    const choosenNumber = enteredValue;
    if (isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99) {
      Alert.alert("Invalid Number!", "Number has to be beetwen 1 and 99.", [
        { text: "okay", style: "destructive", onPress: resetHandler },
      ]);
    } else {
      setConfirmed(true);
      setEnteredValue("");
      setSelectedNumber(Number(choosenNumber));
      Keyboard.dismiss();
    }
  };

  let confiremOutput;

  if (confirmed) {
    confiremOutput = (
      <Card style={styles.summaryContainer}>
        <BodyText>You selected</BodyText>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <MainButton onPress={() => props.onStartGame(selectedNumber)}>
          Start Game
        </MainButton>
      </Card>
    );
  }

  return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.screen}>
          <TitleText style={styles.title}>Start a New Game!</TitleText>
          <Card style={styles.inputContainer}>
            <BodyText>Select a Number</BodyText>
            <Input
              style={styles.input}
              blurOnSubmit
              autoCorrect={false}
              autoCapitalize={"none"}
              maxLength={2}
              keyboardType={"number-pad"}
              value={enteredValue}
              onChangeText={inputChangeHandler}
            />
            <View style={styles.btnContainer}>
              <View style={styles.btn}>
                <Button
                  title={"Reset"}
                  color={Colors.secondary}
                  onPress={resetHandler}
                />
              </View>
              <View style={styles.btn}>
                <Button
                  title={"Confirm"}
                  color={Colors.primary}
                  onPress={confirmHandler}
                />
              </View>
            </View>
          </Card>
          {confiremOutput}
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: "80%",
    minWidth: 300,
    maxWidth: "95%",
    alignItems: "center"
  },
  btnContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  btn: {
    width: 100,
  },
  input: {
    width: 50,
  },
  error: {
    borderColor: "red",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "salmon",
    color: "white",
    padding: 10,
    margin: 10,
  },
  summaryContainer: {
    marginTop: 30,
    alignItems: "center",
  },
});

export default StartingGameScreen;
