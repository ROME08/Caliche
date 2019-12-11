/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button
} from 'react-native';
import MyHeader from './Components/Subcomponents/MyHeader/MyHeader';
import ListDictionary from './Components/Subcomponents/ListDictionary/ListDictionary';


export default class App extends Component{
  render(){
      return (
        <View style={styles.container}>
            <MyHeader/>
            <ListDictionary/>     
        </View>
        
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: 'column'
  },
})


