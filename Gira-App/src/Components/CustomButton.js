import React from "react";
import {
    TouchableOpacity,
    View,
    Text,
    StyleSheet,
} from 'react-native';

const SendButton= (props) => {
    return(
        <TouchableOpacity 
          style={{width:'100%'}}
          activeOpacity={0.5}  
          onPress={props.onPressFunction}
          hitSlop={{ top:10, bottom:20, left:20, right: 20}}
        >
          <View style={styles.button}>
            <Text style={[styles.text,{color:'#fff'}]}>{props.title}</Text>
          </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        marginTop:10,
        width:'100%',
        padding:10,
        alignItems: 'center',
        borderRadius:5,
        backgroundColor:'#06283D',
        borderWidth:1,
      },
      text:{
        fontSize:20,
        color:'#000',
      },
})

export default SendButton;