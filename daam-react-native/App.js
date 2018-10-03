import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import {Landing} from './components/Landing'
import { store } from './store/store.js'
import { Checkout } from './components/Checkout';

export default class App extends React.Component {

  constructor(){
    super();
    this.state = store.getState();
    store.subscribe(() => this.setState(store.getState()))
  }

  componentDidMount(){
    store.dispatch({type: 'FETCH_FILMS'});
  }

  render() {
    return (
      <View style={styles.container}>
      <StatusBar barStyle="dark-content"></StatusBar>
     <Landing films={this.state.films} 
       selected_films={this.state.selected_films}
       showFilmDetails={this.state.showFilmDetails}
       selected_date={this.state.selected_date}/>
     {/* <Checkout></Checkout>*/}

      </View>
     
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
