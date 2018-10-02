import React, { Component } from 'react';
import { View, Text, Button,DatePickerAndroid,Platform, DatePickerIOS } from 'react-native';
import { store } from '../store/store.js'

export class DatePicker extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = { ...store.getState() }
        
    }



    static getDerivedStateFromProps(nextProps, prevState) {
        return { ...store.getState() };
    }

    setDate(date){
        const  showIOSPicker = false;
        store.dispatch({type:'SET_SELECTED_DATE', date: date});
    }

    showModal = () => {
        
        if(Platform.OS ==='ios'){
            console.log("IOS...");
            this.setState({showIOSPicker:true})
        }
        DatePickerAndroid.open({
            date: new Date()
        }).then(
            ({ month, day, year }) =>
                store.dispatch({ type: 'SET_SELECTED_DATE', date: new Date(year, month, day) })
        )

    }

    render() {
        console.log("VALUE: "+ this.state.showIOSPicker);
        const dateSelected=`Showing time for: ${this.state.selected_date.toDateString()}`
        return (
            <View>
                {   this.state.showIOSPicker ?                 
                <DatePickerIOS 
                date={this.state.selected_date}
                onDateChange={this.setDate} />  :
                <Button onPress={this.showModal} title={dateSelected} ></Button>
                }

            </View>

        );
    }
}
