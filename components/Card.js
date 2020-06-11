import React from 'react';
import {View, StyleSheet} from 'react-native';

const Card = props => (
    <View style={{...styles.card, ...props.style}}>{props.children}</View>
)

const styles = StyleSheet.create({
    card: {
        shadowColor: "black",
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: .3,
        shadowRadius: 6,
        elevation: 15,
        backgroundColor: "white",
        borderRadius: 10,
        padding: 20
    }
});

export default Card;