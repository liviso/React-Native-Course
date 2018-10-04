import React, { Component } from 'react';
import { View, Text, ScrollView, TextInput, Button,KeyboardAvoidingView,SafeAreaView,StyleSheet } from 'react-native';
import { Card } from 'react-native-material-cards'

export  class Checkout extends React.Component {
  constructor(props) {
    super(props);
  }

  purchase(){

  }

  render() {
    return (

            <SafeAreaView style={stylesCheckOut.container}>
                <KeyboardAvoidingView behavior="padding" enabled>
                    <ScrollView style={stylesCheckOut.scrollView}>
                        <View style={stylesCheckOut.listCheckout}>
                            <Text style={{fontWeight:'bold', fontSize: 20, textAlign: 'center'}}>Checking-Out</Text>
                            <View style={{top: 20, marginLeft: 40}}>
                                <Text style={{fontWeight: 'bold'}}>Your Cart</Text>
                                <Card style={[{backgroundColor: 'gold', width: 370},stylesCheckOut.textInputBox]}>
                                    <View style={{flexDirection: 'row'}}>
                                        <Text style={{flex: 4}}>Table 10, Seat 3</Text>
                                        <Text style={{flex: 1}}>32</Text>
                                    </View>
                                    <View style={{flexDirection: 'row'}}>
                                        <Text style={{flex: 4}}></Text>
                                        <Text style={{flex: 2}}>_____________</Text>
                                    </View>
                                    <View style={{flexDirection: 'row'}}>
                                        <Text style={{flex: 3}}></Text>
                                        <Text style={{flex: 2}}>Subtotal: 32.20</Text>
                                    </View>
                                    <View style={{flexDirection: 'row'}}>
                                        <Text style={{flex: 4.4}}></Text>
                                        <Text style={{flex: 2}}>Tax: 32.20</Text>
                                    </View>
                                    <View style={{flexDirection: 'row'}}>
                                        <Text style={{flex: 4}}></Text>
                                        <Text style={{flex: 2}}>_____________</Text>
                                    </View>
                                    <View style={{flexDirection: 'row'}}>
                                        <Text style={{flex: 4}}></Text>
                                        <Text style={{flex: 2}}>Total: 32.20</Text>
                                    </View>
                                </Card>
                                <View style={{top: 30}}>
                                    <Text style={{fontWeight: 'bold'}}>First Name:</Text>
                                    <TextInput style={stylesCheckOut.textInputBox}></TextInput>
                                </View>
                                <View style={{top: 45}}>
                                    <Text style={{fontWeight: 'bold'}}>Last Name:</Text>
                                    <TextInput style={stylesCheckOut.textInputBox}></TextInput>
                                </View>
                                <View style={{top: 60}}>
                                    <Text style={{fontWeight: 'bold'}}>Credit Card:</Text>
                                    <TextInput style={stylesCheckOut.textInputBox} keyboardType='numeric'></TextInput>
                                </View>
                                <View style={{top: 75}}>
                                    <Text style={{fontWeight: 'bold'}}>Email:</Text>
                                    <TextInput style={stylesCheckOut.textInputBox} keyboardType='email-address'></TextInput>
                                </View>
                                <View style={{top: 90}}>
                                    <Text style={{fontWeight: 'bold'}}>Phone:</Text>
                                    <TextInput style={stylesCheckOut.textInputBox} keyboardType='phone-pad'></TextInput>
                                </View>
                                <View style={{top: 105}}>
                                    <Button title="Purchase" onPress={this.purchase}></Button>
                                </View>
                            </View>
                        </View>
                       {/* <View style={stylesCheckOut.checkoutData}>
                            <Text >First Name:</Text><TextInput></TextInput>
                            <Text >Last Name:</Text><TextInput></TextInput>
                            <Text>Credit Card:</Text><TextInput keyboardType='numeric'></TextInput>
                            <Text >Email:</Text><TextInput keyboardType='email-address'></TextInput>
                            <Text >Phone:</Text><TextInput keyboardType='phone-pad'></TextInput>
                            <Button title="Purchase" onPress={this.purchase}></Button>
    </View> */}
                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView>
    );
  }
}

const stylesCheckOut = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView:{
        width: '90%',
        height:'50%',
    },
    listCheckout:{
        flex: 10,
    },
    checkoutData:{
        flex: 1,
    },
    textInputBox: {
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,

    }
});