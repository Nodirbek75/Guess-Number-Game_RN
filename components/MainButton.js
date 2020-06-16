import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from "react-native";

import Colors from "../constants/colors";

const MainButtom = (props) => {
  let ButtonComponent = TouchableOpacity;

  if (Platform.OS == "android" && Platform.Version >= 21) {
    ButtonComponent = TouchableNativeFeedback;
  }

  return (
    <View style={styles.btnContainer}>
      <ButtonComponent activeOpacity={0.5} onPress={props.onPress}>
        <View style={{ ...styles.btn, ...props.style }}>
          <Text style={styles.btntext}>{props.children}</Text>
        </View>
      </ButtonComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  btnContainer:{
    borderRadius: 100,
    overflow: "hidden",
    
  },
  btn: {
    backgroundColor: Colors.primary,
    borderRadius: 100,
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  btntext: {
    color: "white",
    fontFamily: "open-sans",
  },
});

export default MainButtom;
