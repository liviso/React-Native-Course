import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Image, SafeAreaView } from 'react-native';
import {store} from '../store/store.js'
import {ShowingTimes} from './ShowingTimes'
import showings from '../json/showings.json'

export  class FilmDetails extends React.Component {
  constructor(props) {
    super(props);
    
  }

  closeModal(){
    store.dispatch({type:"HIDE_FILM_DETAILS"});
}

  render() {
      console.log(this.props);
    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{flex: 2}}>
                <Image source={{ uri: `http://localhost:5000/${this.props.film.poster_path}` }} style={stylesModal.icon}></Image>
                <View>
                    <Text> Showing time for: 10/10/2018</Text>
                    <Text>Showing Time:</Text>
                    {showings.map(showing => (
                        <ShowingTimes key={showing.id} showing_time={showing.showing_time} chooseTime={this.props.chooseTime}/>
                    ))}
                </View>
            </View>
            <View style={{flex: 1.6, justifyContent:'space-around' }}>
                <View>
                    <Text style={{ fontWeight: 'bold', fontSize: 20 }} >{this.props.film.title} </Text>
                    <Text>{this.props.film.tagline} </Text>
                    <Text style={{ fontSize: 11 }}>{this.props.film.homepage}</Text>
                </View>
                <View>
                    <Text >{this.props.film.overview}</Text>
                </View>
                <View>
                    <Text >Release Date: {this.props.film.release_date}</Text>
                </View>

                <View style={{flexDirection: 'row', justifyContent:'space-between'}} >
                    <Text > Rating: {this.props.film.vote_average} / 10</Text>
                    <Text style={{ fontSize: 10 }}>{this.props.film.vote_count} votes</Text>

                </View>
                <View>

                    <Button title="Done" onPress={this.closeModal} />
                </View>

            </View>
        </SafeAreaView>
    );
  }
}

const stylesModal = StyleSheet.create({
    modalContainer: {
        top: 50,
        flex: 1,
        alignItems: 'center'
    },
    icon:{
        width:350,
        height:300,
        resizeMode: 'contain'
    }
});