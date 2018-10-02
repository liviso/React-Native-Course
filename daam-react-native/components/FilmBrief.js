import React from 'react';
import { Text, View, Image, StyleSheet, TouchableHighlight } from 'react-native';
import { Card } from 'react-native-material-cards'
import { store } from '../store/store.js';

export class FilmBrief extends React.Component {

    selectThisFilm(props){
       
        console.log(props.film);
        store.dispatch({type: 'SET_SELECTED_FILM', film: props.film});
        store.dispatch({type:"SHOW_FILM_DETAILS"});
    }


    render() {
        return (
            <TouchableHighlight onPress={()=>this.selectThisFilm(this.props)}>
            <Card containerStyle={{ padding: 0.5 }}>
                <Image source={{ uri: `http://localhost:5000/${this.props.film.poster_path}` }} style={styles.container} />

                <Text>Title:: {this.props.film.title}</Text>
                <Text>TagName:: {this.props.film.tagline}</Text>

            </Card>
            </TouchableHighlight>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: 50,
        height: 50

    },
});
