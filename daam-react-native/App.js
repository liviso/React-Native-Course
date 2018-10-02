import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Landing} from './components/Landing'
import { store } from './store/store.js'

export default class App extends React.Component {

  constructor(){
    super();
    this.state = store.getState();
    console.log(store.getState());
console.log("constructor");
    store.subscribe(() => this.setState(store.getState()))
  }

  componentDidMount(){
    console.log("fetching");
    store.dispatch({type: 'FETCH_FILMS'});
  }

  render() {
    console.log("Result: "+this.state.films);
    return (
      <View style={styles.container}>
       <Landing films={this.state.films}/>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
