import { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  TextInput, 
  View, 
  StatusBar, 
  Image, 
  Pressable, 
  TouchableOpacity, 
  Alert  
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
//Documentacion del gradiente
//https://docs.expo.dev/versions/latest/sdk/linear-gradient/
//expo install expo-linear-gradient
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function App() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [viewPassword, setViewPassword] = useState(true);

  const onPressEnviar = () => {
    if(user.length==0 || password.length==0){
      Alert.alert('Debe ingresar el usuario y contraseña');
    }else{
      Alert.alert('You ar Login as User: '+ user);
    }
  }
  return (
    <LinearGradient 
      style={styles.container}
      colors={['#3b5998', '#6d84b4','#afbdd4','#d8dfea']}
    >
      <StatusBar 
        style='auto' 
        backgroundColor={'#3b5998'}
      />
      <Image 
        source={require('./assets/Logo.png')} 
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
        <TouchableOpacity 
          style={{width:'100%'}}
          activeOpacity={0.5}  
          onPress={onPressEnviar}
          hitSlop={{ top:10, bottom:20, left:20, right: 20}}
        >
          <View style={styles.button}>
            <Text style={[styles.text,{color:'#fff'}]}>Enviar</Text>
          </View>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8ED2FF', //47B5FF
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
    backgroundColor:'#06283D',
    borderWidth:1,
  },
  containerinputButton:{
    width:'80%',
    maxWidth:400,
    alignItems: 'center',
  },
});