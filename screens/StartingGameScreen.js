import React, { useState } from "react";
import {
  View,
  Button,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";

import Card from "../components/Card";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";
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
      setSelectedNumber(choosenNumber);
      Keyboard.dismiss();
    }
  };

  let confiremOutput;

  if (confirmed) {
    confiremOutput = (
      <Card style={styles.summaryContainer}>
        <Text>You selected</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <Button
          title={"Start Game"}
          color={Colors.primary}
          onPress={() => props.onStartGame(selectedNumber)}
        />
      </Card>
    );
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.screen}>
        <Text style={styles.title}>Start a New Game!</Text>
        <Card style={styles.inputContainer}>
          <Text>Select a Number</Text>
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
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
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
