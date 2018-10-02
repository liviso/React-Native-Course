import React, { Component } from 'react';
import { View, Text, ScrollView, TextInput, Button,KeyboardAvoidingView,SafeAreaView } from 'react-native';

export  class Checkout extends React.Component {
  constructor(props) {
    super(props);
  }

  purchase(){

  }

  render() {
    return (
    <SafeAreaView>
    <KeyboardAvoidingView>
    
      <View>
       <ScrollView>
           <Text>Checking-Out</Text>
           <Text >First Name:</Text><TextInput></TextInput>
           <Text >Last Name:</Text><TextInput></TextInput>
           <Text>Credit Card:</Text><TextInput keyboardType='numeric'></TextInput>
           <Text >Email:</Text><TextInput keyboardType='email-address'></TextInput>
           <Text >Phone:</Text><TextInput keyboardType='phone-pad'></TextInput>
           <Button title="Purchase" onPress={this.purchase}></Button>
       </ScrollView>
      </View>
      </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}
