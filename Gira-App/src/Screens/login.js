import { useState } from 'react';
import { 
  StyleSheet,  
  TextInput, 
  View,  
  ImageBackground, 
  Pressable,  
  Alert,
  Image,
  StatusBar, 
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {SendButton} from '../Components/indexComponents'

const Login = (props) =>{
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [viewPassword, setViewPassword] = useState(true);

    const onPressEnviar= () =>{
        if(user.length==0 || password.length==0){
            Alert.alert('Debe ingresar el usuario y contraseña');
          }else{
            Alert.alert('You ar Login as User: ');
          }
    }
    return(
      
        
        <LinearGradient 
        style={styles.container}
        colors={['#4E9F3D','#D8E9A8']}
        >
          <StatusBar 
        style='auto' 
        backgroundColor={'#4E9F3D'}
      />
          {
            //<ImageBackground
          //source={require('../../assets/background_dot.png')}
          //resizeMode='repeat'
          //style={styles.container}
          //>
        }
        
        <Image
            source={require('../../assets/Logo.png')} 
            style={styles.imagen}
        />
        <View style={styles.containerinputButton}>
            <View style={styles.textInputAlign}>
            <FontAwesome5 
                name='user' 
                style={styles.icons} 
                solid
            />
            <TextInput 
                style={styles.input} 
                placeholder='Usuario' 
                onChangeText={(value)=>setUser(value)}
                autoCompleteType='off' 
                />
            </View>
            <View style={styles.textInputAlign}>
            <FontAwesome5 
                name='key' 
                style={styles.icons}
            />
            <TextInput 
                style={styles.input} 
                placeholder='Contraseña' 
                secureTextEntry={viewPassword} 
                onChangeText={(value)=>setPassword(value)}
            />
            <Pressable 
                onPress={()=>setViewPassword(!viewPassword)} 
                hitSlop={{ top:20, bottom:20, left: 20, right: 20}}
            >
                <FontAwesome5 
                name={viewPassword?'eye':'eye-slash'} 
                style={styles.icons} 
                solid
                />
            </Pressable>
            </View>
            <View style={{width:'100%',marginTop:20}}>
            <SendButton title='Login' onPressFunction={onPressEnviar}/>
            </View>
        </View>
        </LinearGradient>
        
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      width:'100%',
      //backgroundColor: '#8ED2FF', //47B5FF
      alignItems: 'center',
      justifyContent: 'center',
    },
    input:{
      flex:3,
      padding:5,
      marginLeft: 10,
      fontSize:20,
      color:'#1E5128',
    },
    textInputAlign:{
      flexDirection:'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop:15,
      width:'100%',
      paddingHorizontal:3,
      backgroundColor:'#fff',
      maxWidth:500,
      borderRadius:5,
      shadowColor:'#000',
      shadowOffset:{
        width:0,
        height:12,
      },
      shadowOpacity: 0.58,
      shadowRadius:16.00,
      elevation:24,
    },
    imagen:{
      width:300,
      height: 300,
      marginBottom: 20,
    },
    icons:{
      flex:0,
      fontSize:20,
      marginLeft:5,
      color:'#1E5128',
    },
    containerinputButton:{
      width:'80%',
      maxWidth:400,
      alignItems: 'center',
   
    },
  });

export default Login;