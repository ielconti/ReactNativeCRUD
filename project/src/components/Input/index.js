import React, { useState, useEffect, memo } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Styles } from './styles';

const Input = ({ secureTextEntry, placeholder, label, keyboard, state, setState, editable }) => {
    const [sec, setSec] = useState(secureTextEntry)

    return (
        <View style={Styles(editable).container} >
            <Text style={Styles(editable).label} >{label}</Text>
            <View style={Styles(editable).row} >
                <TextInput
                    style={Styles(editable).input}
                    value={state}
                    onChangeText={setState}
                    underlineColorAndroid='transparent'
                    placeholderTextColor={'#777'}
                    placeholder={placeholder}
                    secureTextEntry={sec}
                    keyboardType={keyboard}
                    autoCapitalize='none'
                    editable={editable}
                />
                {
                    secureTextEntry && (
                        <TouchableOpacity onPress={() => setSec(!sec)} style={Styles(editable).iconSec} >
                            <Icon
                                // style={Styles.iconSec}
                                name={sec ? "eye" : "eye-off"}
                                color='#777'
                                size={26}
                            />
                        </TouchableOpacity>
                    )
                }
            </View>
        </View>
    );
}

export default memo(Input);