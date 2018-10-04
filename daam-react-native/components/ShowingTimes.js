import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

export class ShowingTimes extends React.Component {
    constructor(props) {
        super(props);
        console.log('CONSTRUCTOR');
    }

    render() {
        return (
            <View>
                <TouchableHighlight onPress={() => this.props.chooseTime(this.props.showing_time)}>
                    <Text key={this.props.key}>{this.props.showing_time}</Text>
                </TouchableHighlight>
            </View>
        );
    }
}
