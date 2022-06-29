import React, { useState } from "react";
import { Button, StyleSheet, View, } from "react-native";
import { TextInputContainer, SendButton } from "../Components/indexComponents";
import DatePicker from 'react-native-date-picker'
const Viajes = (props) =>{
    const [open,setOpen] = useState(false)
    const [date, setDate] = useState(new Date())
    return(
        <View style={styles.body}>
            <View style={styles.container}>
                <TextInputContainer title='N. Factura: ' placeholder='xxx-xxx-xx-xxxxxxxx'/>
                <TextInputContainer title='Descripcion: ' placeholder='aaa'/>
                <TextInputContainer title='Total: ' placeholder='999.99' teclado='decimal-pad'/>
                <SendButton title='Enviar'/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    body:{
        flex:1,
        alignItems: "center",
        justifyContent: "center",
    },
    container:{
        width:'80%',
        maxWidth: 500,
        alignItems: "center",
        justifyContent: "center", 
    },
    datePickerStyle: {
        width: 230,
      },
})

export default Viajes;