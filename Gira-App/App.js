import React from 'react';
import { StyleSheet, StatusBar, View } from 'react-native';
import {Login,Navegador} from './src/Screens/indexScreens'

export default function App() {
  return (
    <>
      <StatusBar 
        style='auto' 
        backgroundColor={'#3b5998'}
      />
      <Navegador/> 
    </>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  }
});