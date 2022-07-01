import { Dropdown } from 'react-native-material-dropdown-v2';
import {View, } from 'react-native'

const DropdownList = (props) => {
    return(
        <View style={{width:'100%'}}>
            <Dropdown
            label={props.label}
            data={props.data}
            animationDuration={225}
            itemCount={3}
            dropdownPosition={0}
            value={props.value}
            onChangeText={props.onChangeText}
            />
        </View>
    )
}

export default DropdownList;