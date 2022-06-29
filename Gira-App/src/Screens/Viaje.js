import React, { useState } from "react";
import { Button, StyleSheet, View, ScrollView, SafeAreaView  } from "react-native";
import { TextInputContainer, SendButton } from "../Components/indexComponents";
import DatePicker from 'react-native-date-picker'
const Viajes = (props) =>{
    const [subTotal, setSubTotal] = useState(0.00)
    const [isv,setIsv] = useState(0.00)
    const [ist, setIst] = useState(0.00)
    const [total, setTotal] = useState(0.00)
    return(
        <ScrollView contentContainerStyle={styles.scrollview}>
            <SafeAreaView  style={styles.container}>
                <TextInputContainer title='RTN: ' placeholder='XXXXXXXXXXXXXX'/>
                <TextInputContainer title='N. Factura: ' placeholder='XXX-XXX-XX-XXXXXXXX'/>
                <TextInputContainer title='Descripcion: ' multiline={true} maxLength={300}/>
                <TextInputContainer title='SubTotal: ' placeholder='999.99' teclado='decimal-pad'
                onChangeText={(value)=>{
                    setSubTotal(value)
                    setIsv((value*0.15).toFixed(2))
                    setIst((value*0.04).toFixed(2))
                    setTotal((value*1.19).toFixed(2))
                    }}/>
                <TextInputContainer title='ISV 15%: ' teclado='decimal-pad' editable={false} value={isv+''}/>
                <TextInputContainer title='IST: 4% ' teclado='decimal-pad' editable={false} value={ist+''}/>
                <TextInputContainer title='Total: ' teclado='decimal-pad' editable={false} value={total+''}/>
                <SendButton title='Enviar'/>
            </SafeAreaView >
        </ScrollView>
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
        marginVertical:20,
    },
    scrollview:{
        flex:1,
        alignItems: "center", 
        justifyContent: "center", 
    }

})

export default Viajes;