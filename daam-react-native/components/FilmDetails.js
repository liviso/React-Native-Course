import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import {store} from '../store/store.js'

export  class FilmDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  closeModal(){
    store.dispatch({type:"HIDE_FILM_DETAILS"});
}

  render() {
      console.log(this.props.film.poster_path);
    return (
      <View style={stylesModal.modalContainer}>
        <Image source={{ uri:`http://localhost:5000/${this.props.film.poster_path}`}} style={stylesModal.icon}></Image>
        <View style={stylesModal.detailsFilm}>
            <View>
            <Text style={[stylesModal.showingText]}> Showing time for: {this.props.selected_date.toDateString()}</Text>
            {/*this.props.showings.map(showing=>{
                <Text key={showing.id} >{showing.showing_time}</Text>

            })*/}
            </View>
            <View style={{top: 35}}>
               <View>
               <Text style={{fontWeight: 'bold', fontSize: 20}} >{this.props.film.title} </Text>
               <Text>{this.props.film.tagline} </Text>
               <Text style={{fontSize: 11}}>{this.props.film.homepage}</Text>
               </View>
               <View style={{top: 15}}>
               <Text >{this.props.film.overview}</Text>
               </View>
                <View style={{top: 35}}>
                <Text >Release Date: {this.props.film.release_date}</Text>
                </View>
               
               <View style={{top: 50, flexDirection: 'row', justifyContent:'space-around'}}>
                <Text > Rating: {this.props.film.vote_average} / 10</Text>
                <Text style={{fontSize: 10}}>{this.props.film.vote_count} votes</Text>
                
               </View>
               <View style={{top: 75}}>

<Button  title="Done" onPress={this.closeModal} />
               </View>
                
                
            </View>
        </View>
      </View>
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
    },
    detailsFilm:{
        flex: 1,
        top: 20
    },
    showingText: {
        fontWeight: 'bold',
        textAlign:'center'
    },
    topInfo: {
        top: 20
    }
});