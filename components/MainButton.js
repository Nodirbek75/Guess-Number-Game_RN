import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import Colors from '../constants/colors';

const MainButtom = (props) => {
  return (
    <TouchableOpacity activeOpacity={.5} onPress={props.onPress}>
      <View style={{...styles.btnContainer, ...props.style}}>
        <Text style={styles.btntext}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    btnContainer:{
        backgroundColor: Colors.primary,
        borderRadius: 100,
        margin: 10
    },
    btntext:{
        paddingHorizontal: 30,
        paddingVertical: 10,
        color: "white",
        fontFamily: "open-sans"
    }
});

export default MainButtom;
