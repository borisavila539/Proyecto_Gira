import React, { Component, useState } from "react";
import { Button, StyleSheet, View, ScrollView, SafeAreaView, Text  } from "react-native";
import { TextInputContainer, SendButton, DropdownList } from "../Components/indexComponents";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Viajes = (props) =>{
    const [nFactura,SetNFactura] = useState('')
    const [subTotal, setSubTotal] = useState(0.00)
    const [isv,setIsv] = useState(0.00)
    const [ist, setIst] = useState(0.00)
    const [total, setTotal] = useState(0.00)
 
    const onChanceNFactura = (value) =>{

        if(value.length==16){
            SetNFactura(value[0]+value[1]+value[2]+'-'+value[3]+value[4]+value[5]+'-'+value[6]+value[7]+'-'+value[8]+value[9]+value[10]+value[11]+value[12]+value[13]+value[14]+value[15])
        }else if(value.length==17){ 
            value = value[0]+value[1]+value[2]+value[4]+value[5]+value[6]+value[8]+value[9]+value[11]+value[12]+value[13]+value[14]+value[15]+value[16]
            SetNFactura(value);
        }else{
            SetNFactura(value);
        }
    }
    
    let Tipo = [
        {value: 'GASTOS DE VIAJE',},
        {value: 'GASTOS DE COMBUSTIBLE',},
        {value: 'GASTOS POR DEPRECIACION',}
    ];
    let Categoria = [
        {value: 'HOSPEDAJE',},
        {value: 'ALIMENTACION',},
        {value: 'COMBUSTIBLE',},
        {value: 'PAPELERIA',},
        {value: 'PEAJE',},
        {value: 'OTROS',} 
    ]

    
    return(
        <ScrollView contentContainerStyle={styles.scrollview}>
            <SafeAreaView  style={styles.container}>
                <DropdownList label='Tipo de Gasto:' data={Tipo}/>
                <DropdownList label='Categoria de Gasto:' data={Categoria}/>
                <View style={styles.buscarProveedor}>
                    <View style={{width:'90%'}}>
                    <TextInputContainer title='RTN: ' placeholder='XXXXXXXXXXXXXX'  maxLength={14} teclado='decimal-pad'/>
                    </View>
                    <FontAwesome5 name='search' style={styles.icons}/>
                </View>
                
                <DropdownList label='Proveedor:' data={Categoria}/>
                <TextInputContainer title='N. Factura: ' placeholder='XXX-XXX-XX-XXXXXXXX' value={nFactura} onChangeText={(value)=>onChanceNFactura(value)} maxLength={19}  teclado='decimal-pad'/>
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
    },
    buscarProveedor:{
        width:'100%',
        flexDirection:'row',
        alignItems: "center"
    },
    icons:{
        flex:0,
        fontSize:20,
        marginLeft:5,
      },
})

export default Viajes;