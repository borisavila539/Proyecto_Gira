 import { StyleSheet, View, Text, TextInput } from "react-native";
 
 const  TextInputContainer = (props) => {

    return(
        <View style={styles.textInput}>
            <Text style={styles.text}>{props.title}</Text>
            <TextInput style={styles.input} placeholder={props.placeholder} keyboardType={props.teclado}></TextInput>
        </View>

    )
 }

 const styles = StyleSheet.create({
    text:{
        fontSize:15,
        width:'30%',
        textAlign: "right",
    },
    textInput:{
        flexDirection: 'row',
        width: '100%',
        alignItems: "center",
        padding:10, 
    },
    input:{
        flex:1,
        borderWidth:1,
        borderRadius:5,
        textAlign: "center",
    }

 })

 export default TextInputContainer;