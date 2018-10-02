import React, { Component } from 'react';
import { View, Text } from 'react-native';

export  class FilmDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      console.log(this.props);
    return (
      <View>
        <Text>title: {this.props.film.title} </Text>
    
        <Text> showing time for: {this.props.selected_date.toDateString()}</Text>
        {this.props.showings.map(showing=>{
            <Text key={showing.id} >{showing.showing_time}</Text>

        })}
      </View>
    );
  }
}
