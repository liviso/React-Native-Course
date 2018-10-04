import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Button } from 'react-native';
import { Card } from 'react-native-material-cards'
import tables from '../json/tables.json'


export class PickSeats extends React.Component {
    constructor(props) {
        super(props);
    }

    navigateScreen = () => {
       // this.props.navigation.navigate('Checkout', {checkout: this.props.navigation.state.params});
    }

    render() {
        return (
            <SafeAreaView style={stylesPickSeats.container}>
                <View style={stylesPickSeats.titleSection}>
                    <Text>Choose your seats for</Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{this.props.navigation.state.params.selected_film.title}</Text>
                    <Text style={{ fontSize: 10 }}>on</Text>
                    <Text>{this.props.navigation.state.params.selected_date.toDateString()}</Text>
                </View>
                <ScrollView >
                    {tables.map(table => (
                        <Card style={[stylesPickSeats.cardTable]} >
                            <Text key={table.id}>Table {table.table_number}</Text>
                            <View style={{ flexDirection: 'row' }}>
                                {
                                    table.seats.map(seat =>

                                        <View>
                                            {
                                                seat.status == 'seatIsTaken' ?
                                                    <Text key={seat._id} style={{ color: 'red' }} >   Seat {seat.seat_number}</Text>
                                                    :
                                                    <Text key={seat._id} style={{ color: 'green' }}>   Seat {seat.seat_number}   </Text>

                                            }
                                        </View>
                                    )}
                            </View>
                        </Card>
                    ))}

                </ScrollView>
                <View style={stylesPickSeats.checkoutButton}>
                    <Button  onPress={this.navigateScreen} title="Checkout"></Button>
                </View>
            </SafeAreaView>
        );
    }
}

const stylesPickSeats = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1,
    },
    titleSection: {
        flex: 3,
        alignItems: 'center'
    },
    tableSeats: {
        flex: 7
    },
    cardTable:{
        height: 35,
        top:30
    },
    checkoutButton: {
        flex: 6
    }
});