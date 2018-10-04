import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import {Landing} from './components/Landing'
import { store } from './store/store.js'
import { Checkout } from './components/Checkout';
import { PickSeats } from './components/PickSeats';
import { createStackNavigator } from 'react-navigation';
import {Ticket} from './components/Ticket';

const routes={
  Landing:{screen:Landing},
  PickSeats:{screen:PickSeats},
  Checkout:{screen:Checkout},
  Ticket:{screen: Ticket}
}

const stackNavConfig={
  initialRouteName:'Landing',
  navigationOptions:{
    headerStyle:{backgroundColor:'pink'},
    headerTintColor:{backgroundColor:'blue'},
    headerTitleStyle: {fontWeight: 'bold',}
    
  },
}
const MyStackNavigator=createStackNavigator(routes,stackNavConfig);

export default class App extends React.Component {

  constructor(){
    super();
    this.state = store.getState();
    store.subscribe(() => this.setState(store.getState()));
   
  }

  componentDidMount(){
    store.dispatch({type: 'FETCH_FILMS'});
  }

  render() {
    return <MyStackNavigator/>;
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
