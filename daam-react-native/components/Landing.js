import React from 'react';
import { Text, View, Image, Button, StyleSheet, Modal, ScrollView, SafeAreaView, DatePickerIOS, DatePickerAndroid, Platform, StatusBar } from 'react-native';
import { FilmBrief } from './FilmBrief'
import { DatePicker } from './DatePicker';
import {store} from '../store/store.js'
import {FilmDetails} from './FilmDetails';

export class Landing extends React.Component {

    constructor(props){
        super(props);
    }

    setDate(date) {
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

    wasFound(films) {
        for (const film of films) {
            if (film == this.props.selected_film) {

                return true;
            } else {
                return false;
            }

        }

    }

    closeModal(){
        store.dispatch({type:"HIDE_FILM_DETAILS"});
    }

   
    render() {
        const showingsArray=[{id:'5bb292a29f7576d74498f190',
    showing_time: '2018-10-04T01:30:00.000Z'}];
        return (



            <SafeAreaView >
                <Modal visible={this.props.showFilmDetails}>
                <FilmDetails  showings={showingsArray} 
                selected_date={this.props.selected_date}
                film={this.props.selected_films}/>
                    <Button title="Done" onPress={this.closeModal} />

                </Modal>
                <ScrollView>
                    <View>

                        <Text>
                            Dinner and a Movie
                </Text>
                        <Text>
                            Film Details...



                        </Text>
                        <DatePicker />


                        {this.props.films.map(film => (
                            <FilmBrief film={film} key={film.id} isSelected={false} />


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

