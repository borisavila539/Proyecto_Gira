import React, { Component, useState } from "react";
import { Button, StyleSheet, View, ScrollView, SafeAreaView, Text, Touchable, TouchableOpacity  } from "react-native";
import { TextInputContainer, SendButton, DropdownList } from "../Components/indexComponents";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import DatePicker from 'react-native-date-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { StatusBar } from "expo-status-bar";

const Viajes = (props) =>{
    const [nFactura,SetNFactura] = useState('')
    const [subTotal, setSubTotal] = useState(0.00)
    const [isv,setIsv] = useState(0.00)
    const [ist, setIst] = useState(0.00)
    const [total, setTotal] = useState(0.00)
    const [proveedor, setProveedor] = useState('')
    const [openDate, SetOpenDate] = useState(false)
    const [date,setDate] = useState('')
    const [showdate,setShowDate] = useState(new Date())
 
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

    const onChangeTipo = (value) => { 
        console.log('Selected Tipo: ' + JSON.stringify(value));
    }
    const onChangeCategoria = (value) => { 
        console.log('Selected Categoria: ' + JSON.stringify(value));
    }
    const onChangeProveedor = (value) => { 
        console.log('Selected Proveedor: ' + JSON.stringify(value));
    }
    const onchange = (event,selectedDate) => {
        const currentDate =selectedDate.getDate()+'/'+(selectedDate.getMonth()+1)+'/'+selectedDate.getFullYear();
        SetOpenDate(false)
        if(event.type==='set'){
            setDate(currentDate)
            setShowDate(selectedDate)
        }
        console.log(event)
    }
    
    return(
        <ScrollView contentContainerStyle={{alignItems: "center",backgroundColor:'#F5F5F5'}}>
            <View style={{width:'100%',borderWidth:1,alignItems: "center", backgroundColor:'#121212',padding:5}}>
                    <Text style={{fontSize:20,color:'#F5F5F5'}}>Boris Avila</Text>
                </View>
            <SafeAreaView  style={styles.container}>
                <DropdownList label='Tipo de Gasto:' data={Tipo} onChangeText={(value) => onChangeTipo(value)}/>
                <DropdownList label='Categoria de Gasto:' data={Categoria} onChangeText={(value) => onChangeCategoria(value)}/>
                <View style={styles.buscarProveedor}>
                    <View style={{width:'90%'}}>
                    <TextInputContainer title='RTN: ' placeholder='XXXXXXXXXXXXXX'  maxLength={14} teclado='decimal-pad'/>
                    </View>
                    <FontAwesome5 name='search' style={styles.icons}/>
                </View>
                
                <DropdownList label='Proveedor:' data={Categoria} onChangeText={(value) => onChangeProveedor(value)}/>
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
                <TouchableOpacity onPress={()=>SetOpenDate(true)} style={{flexDirection:'row',alignItems:'center'}}>
                    <TextInputContainer title='Fecha Recibo' editable={false} value={date+''} onPressIn={()=>SetOpenDate(true)}></TextInputContainer>
                    <FontAwesome5 name="calendar-alt" style={styles.icons}/>
                </TouchableOpacity>
                {openDate && (<DateTimePicker
                    mode='calendar'  
                    value={showdate}
                    onChange={onchange}
                    onTouchCancel={()=>console.log('Cancelado')}
                />)}
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
        marginTop:30,
        
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
        color:'#000'
      },
})

export default Viajes;