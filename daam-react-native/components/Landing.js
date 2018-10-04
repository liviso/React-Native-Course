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
                <View style={stylesHeader.container}>
                    <Image source={{ uri: `https://image4.owler.com/logo/cinepolis_owler_20160226_201852_original.png` }} style={stylesHeader.icon} />

                    <Text style={stylesHeader.titlePage}> Dinner and a Movie </Text>
                </View>
                <Modal visible={this.props.showFilmDetails}>
                    <FilmDetails  showings={showingsArray} 
                                selected_date={this.props.selected_date}
                                film={this.props.selected_films}/>
                </Modal>
                <ScrollView>
                    <View>
                        <Text style={stylesHeader.textMovie}> Tap a movie below to see its details. Then pick a date to see show times.</Text>
                        <DatePicker style={stylesHeader.textMovie}/>
                        {this.props.films.map(film => (
                            <FilmBrief  style={stylesHeader.textMovie} film={film} key={film.id} isSelected={false} />
                        ))}
                    </View>
                </ScrollView>
            </SafeAreaView>

        )
    }
}

const stylesHeader = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    icon: {
        flex:1
    },
    titlePage: {
        fontWeight: 'bold',
        fontSize:20,
        flex:3
    },
    textMovie:{
        top:10
    }
});





