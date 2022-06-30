import { Dropdown } from 'react-native-material-dropdown-v2';
import {View, } from 'react-native'

const DropdownList = (props) => {
    return(
        <View style={{width:'100%'}}>
            <Dropdown
            label={props.label}
            data={props.data}
            />
        </View>
    )
}

export default DropdownList;