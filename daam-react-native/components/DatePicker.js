import React, { Component } from 'react';
import { View, Text, Button,DatePickerAndroid,Platform, DatePickerIOS, StyleSheet } from 'react-native';
import { store } from '../store/store.js'

export class DatePicker extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = { ...store.getState() }
        
    }



    static getDerivedStateFromProps(nextProps, prevState) {
        return { ...store.getState() };
    }

    setDate = (date) => {
        store.dispatch({type:'SET_SELECTED_DATE', date: date});
        this.setState({showIOSPicker: false});
    }

    showModal = () => {
        
        if(Platform.OS ==='ios'){
            this.setState({showIOSPicker: !this.state.showIOSPicker})
        }
        DatePickerAndroid.open({
            date: new Date()
        }).then(
            ({ month, day, year }) =>
                store.dispatch({ type: 'SET_SELECTED_DATE', date: new Date(year, month, day) })
        )

    }

    render() {
        const dateSelected=`Showing time for: ${this.state.selected_date.toDateString()}`
        return (
            <View style={this.props.style} >
                {   this.state.showIOSPicker ?                 
                <DatePickerIOS 
                date={this.state.selected_date}
                onDateChange={this.setDate} />  :
                <Button   onPress={this.showModal} title={dateSelected} ></Button>
                }

            </View>

        );
    }
}

const stylesHeader = StyleSheet.create({
    action: {
        fontSize:1,
        backgroundColor:'pink'
    }
});
