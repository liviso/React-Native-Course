import React, { Component } from 'react';
import { View, Text } from 'react-native';

export class Ticket extends React.Component {
    constructor(props) {
        super(props);
    }

    generateRandomNumber() {
       return  Math.random();
    }
    render() {
        return (
            <View>
                <Text> We're looking forward to seeing you soon.
                     Please show this to the host when you arrive.
                      This is your ticket</Text>

                      <Text>{this.props.navigation.state.params.checkout.selected_film.title}</Text>
                <Text> Ticket Number: {this.generateRandomNumber()} </Text>
            </View>
        );
    }
}
