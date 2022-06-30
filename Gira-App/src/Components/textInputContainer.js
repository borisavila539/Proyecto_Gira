 import { StyleSheet, View, Text, TextInput } from "react-native";
 
 const  TextInputContainer = (props) => {

    return(
        <View style={styles.textInput}>
            <Text style={styles.text}>{props.title}</Text>
            <TextInput 
            style={styles.input} 
            placeholder={props.placeholder} 
            keyboardType={props.teclado} 
            multiline={props.multiline} 
            editable={props.editable}
            onChangeText={props.onChangeText}
            value={props.value}
            maxLength={props.maxLength}
            ></TextInput>
        </View>

    )
 }

 const styles = StyleSheet.create({
    text:{
        fontSize:16,
        width:'30%',
    },
    textInput:{
        flexDirection: 'row',
        width: '100%',
        alignItems: "center",
        padding:5,
    },
    input:{
        flex:1,
        borderWidth:1,
        borderRadius:5,
        textAlign: "center",
        maxHeight:100,
        fontSize:16,
        backgroundColor: '#fff',
        borderColor:'#ddd',
        height:35,
    }

 })

 export default TextInputContainer;