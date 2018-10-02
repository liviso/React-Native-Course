import React from 'react';
import { Text, View, Image, Button, StyleSheet, ScrollView, SafeAreaView, DatePickerIOS, DatePickerAndroid, Platform } from 'react-native';
import { FilmBrief } from './FilmBrief'
import {DatePicker} from './DatePicker';

export class Landing extends React.Component {

    setDate(date) {
        console.log("DATE: ", date);
    }
    pickDate() {
        DatePickerAndroid.open({
            date: new Date()
        }).then(
            ({ month, day, year }) =>
                setDate(new Date(year, month, day)
                )
        )
    }

    render() {

        return (



            <SafeAreaView >
                <ScrollView>
                    <View>

                        <Text>
                            Dinner and a Movie
                </Text>
                        <Text>
                            Film Details...



                        </Text>
                            <DatePicker/>


                        {this.props.films.map(film => (
                            <FilmBrief film={film} key={film.id} />


                        ))}
                    </View>
                </ScrollView>
            </SafeAreaView>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        top: 50
    },
});

