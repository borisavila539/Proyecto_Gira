import React from 'react';
import { StyleSheet, StatusBar, View } from 'react-native';
import {Login,Navegador} from './src/Screens/indexScreens'

export default function App() {
  return (
    <>
      
      <Login/> 
    </>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  }
});