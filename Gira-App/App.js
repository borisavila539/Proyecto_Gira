import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, StatusBar, Image, Pressable, TouchableHighlight, Alert } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [viewPassword, setViewPassword] = useState(true);
  const onPressEnviar = () => {
    
  }
  return (
    <View style={[styles.container,styles.gradiente]}>
    <StatusBar style='auto' backgroundColor={'#3B83BD'}/>
    <Image source={require('./assets/Logo.png')} style={styles.imagen}></Image>

      {
        //<Text style={styles.text}>Digitalizacion Gira de Asesores</Text>
      }
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
          keyboardType='email-address'
          onChangeText={(value)=>setEmail(value)}
          autoCompleteType='off' 
        ></TextInput>
      </View>
      <View style={styles.textInputAlign}>
      <FontAwesome5 
        name='key' 
        style={styles.icons}/>
        <TextInput 
          style={styles.input} 
          placeholder='Contraseña' 
          secureTextEntry={viewPassword} 
          onChangeText={(value)=>setPassword(value)}
          ></TextInput>
          <Pressable 
            onPress={()=>setViewPassword(!viewPassword)} 
            hitSlop={{ top:20, bottom:20, left: 20, right: 20}}>
            <FontAwesome5 name={viewPassword?'eye':'eye-slash'} style={styles.icons} solid/>
          </Pressable>
      </View>
      <Pressable style={({pressed})=>[{backgroundColor: pressed?'#C3B299':'#247BA0'},styles.button]} 
      onPress={onPressEnviar} 
      hitSlop={{ top:20, bottom:20, left: 20, right: 20}}
      >
          <Text style={[styles.text,{color:'#fff'}]}>Enviar</Text>
      </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CBD4C2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize:20,
    color:'#000',
  },
  input:{
    flex:3,
    padding:5,
    marginLeft: 10,
    fontSize:20,
    color:'#000',
  },
  textInputAlign:{
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:15,
    width:'100%',
    borderRadius:5,
    paddingHorizontal:3,
    backgroundColor:'#fff',
    maxWidth:500,
  },
  imagen:{
    width:220,
    height: 220,
    marginBottom: 20,
  },
  icons:{
    flex:0,
    fontSize:20,
    marginLeft:5,
  },
  button:{
    marginTop:10,
    width:'100%',
    padding:10,
    alignItems: 'center',
    borderRadius:5,
  },
  containerinputButton:{
    width:'80%',
    maxWidth:400,
    alignItems: 'center',
  },
  gradiente:{
    color1:{
      backgroundColor:'#000',
    },
    color2:{
      backgroundColor:'#fff',
    }
  }
});
