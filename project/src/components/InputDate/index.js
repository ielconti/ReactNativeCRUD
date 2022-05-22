import React, { useState, useEffect, memo } from 'react';
import { View, Text, TouchableOpacity, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import { Styles } from './styles';

const InputDate = ({ label, state, setState, editable, language }) => {

    const [show, setShow] = useState(false);

    const dataFormatada = (orig) => {
        var data = new Date(orig),
            dia = data.getDate().toString(),
            diaF = (dia.length == 1) ? '0' + dia : dia,
            mes = (data.getMonth() + 1).toString(),
            mesF = (mes.length == 1) ? '0' + mes : mes,
            anoF = data.getFullYear();

        //Criar um if para cada formato de data nesta função
        //Retorna por padrão o formato pt-BR
        // if(language === 'en-US'){ return mesF + "/" + diaF + "/" + anoF }

        return language === 'pt-BR' ? `${diaF}/${mesF}/${anoF}` : `${mesF}/${diaF}/${anoF}`;
    }

    return (
        <View style={Styles(editable).container} >
            <Text style={Styles(editable).label} >{label}</Text>

            <TouchableOpacity onPress={() => editable && setShow(!show)} >
                <View style={Styles(editable).row} >
                    <Text style={Styles(editable).input} >{dataFormatada(state)}</Text>
                </View>
            </TouchableOpacity>

            {
                show &&
                <DateTimePicker
                    testID='DateTimePicker'
                    dateFormat='day month year'
                    value={state}
                    mode='date'
                    display='default'
                    onChange={(e, selectedDate) => {

                        if (!selectedDate) {
                            selectedDate = state
                            setShow(false)
                        }

                        setShow(false)
                        setState(selectedDate)
                    }} />
            }

        </View>
    );
}

export default memo(InputDate);