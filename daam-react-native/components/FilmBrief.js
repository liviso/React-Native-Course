import React from 'react';
import { Text, View, Image, StyleSheet, TouchableHighlight } from 'react-native';
import { Card } from 'react-native-material-cards'
import { store } from '../store/store.js';

export class FilmBrief extends React.Component {

    selectThisFilm(props) {

        console.log(props.film);
        store.dispatch({ type: 'SET_SELECTED_FILM', film: props.film });
        store.dispatch({ type: "SHOW_FILM_DETAILS" });
    }


    render() {
        return (
            <TouchableHighlight onPress={() => this.selectThisFilm(this.props)} style={this.props.style}>
                <Card style={stylesFilm.container}>
                    <Image source={{ uri: `http://localhost:5000/${this.props.film.poster_path}` }} style={stylesFilm.posterFilm} />
<View style={stylesFilm.detailFilm}>

    <Text style={stylesFilm.title}>{this.props.film.title}</Text>
                    <Text>{this.props.film.tagline}</Text>

</View>
                    
                </Card>
            </TouchableHighlight>
        )
    }
}

const stylesFilm = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 90

    },
    posterFilm: {
        height: 90,
        width: 90,
        resizeMode:'contain'
        
    },
    detailFilm: {
        flex: 3
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20
    }
});
