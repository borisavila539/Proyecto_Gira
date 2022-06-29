import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Viajes} from './indexScreens'

function ScreenGastosViaje(){
    return(
        <Viajes/>
    )
}
function ScreenGastosHistorial(){
    return(
        <View style={styles.body}>
            <Text>Historial</Text>
        </View>
    )
}
function ScreenSolicitarProveedor(){
    return(
        <View style={styles.body}>
            <Text>Solicitar Proveedor</Text>
        </View>
    )
}
function ScreenNoSincronizado(){
    return(
        <View style={styles.body}>
            <Text>No Sincronizado</Text>
        </View>
    )

}

const Navegador = (props) =>{
    const Tab = createBottomTabNavigator();
    return(
        <NavigationContainer>
            <Tab.Navigator
            screenOptions={({route}) =>({
                tabBarIcon: ({focused,color}) => {
                    let iconName;
                    color=  focused? '#fff' : '#fff'
                    if(route.name === 'Gastos de Viaje'){
                        iconName='file-invoice-dollar';
                    }else if(route.name === 'Historial'){
                        iconName='history';
                    }else if(route.name === 'Solicitar Proveedor'){
                        iconName = 'user-plus';
                    }else if(route.name === 'No Sincronizado'){
                        iconName = 'sync';
                    }

                    return <FontAwesome5 name={iconName} size={30} color={color}/>
                },
                tabBarActiveTintColor:'#fff',
                tabBarInactiveTintColor: '#ddd',
                tabBarActiveBackgroundColor: '#47B5FF',
                tabBarInactiveBackgroundColor: '#afbdd4',
                tabBarStyle : {height: 70},
                tabBarLabelStyle: {paddingBottom:15},
                tabBarIconStyle: {marginTop:5},
                tabBarHideOnKeyboard:true,
                
            })}
            >
                <Tab.Screen name='Gastos de Viaje'  component={ScreenGastosViaje} options={{headerTitleAlign:'center'}}/>
                <Tab.Screen name='Historial' component={ScreenGastosHistorial} options={{headerShown:false}}/>
                <Tab.Screen name='Solicitar Proveedor' component={ScreenSolicitarProveedor} options={{headerShown:false}}/>
                <Tab.Screen name='No Sincronizado' component={ScreenNoSincronizado} options={{headerShown:false}}/>
            </Tab.Navigator>
        </NavigationContainer>
    )

}
const styles = StyleSheet.create({
    body:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    navigator:{
        paddingBottom:15,
    }
});

export default Navegador;
