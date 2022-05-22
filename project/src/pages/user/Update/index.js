import React, { useState, useEffect } from 'react';
import { SafeAreaView, StatusBar, Text, View, Image, TouchableOpacity, PermissionsAndroid } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

import Input from '../../../components/Input'
import InputDate from '../../../components/InputDate'

import { Styles } from './styles';

const Update = ({ route, navigation }) => {

    const { selected } = route.params
    const [image, setImage] = useState(selected.image)
    const [code, setCode] = useState(`${selected.code}`)
    const [name, setName] = useState(`${selected.name}`)
    const [birthdate, setBirthdate] = useState(new Date(selected.birthdate.toDate()))

    const [isLoading, setIsLoading] = useState(false)


    const callCamera = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
                {
                    title: "App Camera Permission",
                    message: "App needs access to your camera ",
                    buttonNeutral: "Ask Me Later",
                    buttonNegative: "Cancel",
                    buttonPositive: "OK"
                }
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {

                var options = {
                    skipBackup: true,
                    includeBase64: true,
                    maxHeight: 500,
                    mediaType: 'photo',
                    path: 'images',
                }

                launchCamera(options, (response) => {

                    if (response.didCancel) {
                        console.log('User cancelled image picker')
                        return
                    }

                    if (response.error) {
                        console.log('ImagePicker Error: ', response.error)
                        return
                    }

                    if (response.customButton) {
                        console.log('User tapped custom button: ', response.customButton)
                        alert(response.customButton)
                        return
                    }

                    setImage(response.assets[0].base64)
                }).catch((error) => alert(error))

            } else {
                console.log("Camera permission denied");
            }
        } catch (err) {
            console.warn(err);
        }
    }

    const callGalery = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
                {
                    title: "App Camera Permission",
                    message: "App needs access to your camera ",
                    buttonNeutral: "Ask Me Later",
                    buttonNegative: "Cancel",
                    buttonPositive: "OK"
                }
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {

                var options = {
                    skipBackup: true,
                    includeBase64: true,
                    maxHeight: 500,
                    maxWidth: 500,
                    mediaType: 'photo',
                    path: 'images',
                }

                launchImageLibrary(options, (response) => {

                    if (response.didCancel) {
                        console.log('User cancelled image picker')
                        return
                    }

                    if (response.error) {
                        console.log('ImagePicker Error: ', response.error)
                        return
                    }

                    if (response.customButton) {
                        console.log('User tapped custom button: ', response.customButton)
                        alert(response.customButton)
                        return
                    }

                    setImage(response.assets[0].base64)
                }).catch((error) => alert(error))

            } else {
                console.log("Camera permission denied");
            }
        } catch (err) {
            console.warn(err);
        }
    }

    const updateUser = () => {
        firestore()
        .collection('user')
        .doc(selected.id)
        .update({
            code: code,
            name: name,
            birthdate: birthdate,
            image: image
        })
        .then(() => {
            navigation.reset({
                index: 0,
                routes: [{ name: "UserList" }]
            })
        })
        .catch((error) => console.log(error))
    }

    const popNavigation = () => {
        navigation.pop()
    }

    useEffect(() => {

    }, [image])

    return (
        <SafeAreaView style={Styles.container} >
            <StatusBar backgroundColor="#fff" />
            <View style={Styles.header} >
                <TouchableOpacity onPress={popNavigation} >
                    <Icon name='chevron-left' color='#555' size={30} />
                </TouchableOpacity>
                <Text style={Styles.title} >Edit</Text>
                <TouchableOpacity onPress={() => !isLoading && console.log('delete')} >
                    <Text style={Styles.delete} >delete</Text>
                </TouchableOpacity>
            </View>

            {
                image ?
                    <View style={Styles.input} >
                        <Image style={Styles.avatarBg} source={{ uri: `data:image/jpg;base64,${image}` }} />
                    </View>
                    :
                    <View style={Styles.input} >
                        <View style={Styles.avatarBg} >
                            <Icon style={Styles.avatar} name='account' color='#022280' size={80} />
                        </View>
                    </View>
            }

            <View style={Styles.input} >
                <View style={{ width: 200, flexDirection: 'row', justifyContent: 'space-around' }} >
                    <TouchableOpacity style={Styles.imageOption} onPress={callCamera} >
                        <Icon style={{ alignSelf: 'center' }} name='camera' color='#fff' size={20} />
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.imageOption} onPress={callGalery} >
                        <Icon style={{ alignSelf: 'center' }} name='image-plus' color='#fff' size={20} />
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.imageOption} onPress={() => setImage(null)} >
                        <Icon style={{ alignSelf: 'center' }} name='image-off' color='#fff' size={20} />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={Styles.input} >
                <Input
                    placeholder={'User code'}
                    label={'User code'}
                    keyboard='numeric'
                    state={code}
                    setState={setCode}
                    editable={!isLoading}
                />
            </View>

            <View style={Styles.input} >
                <Input
                    placeholder={'User name'}
                    label={'User name'}
                    keyboard='default'
                    state={name}
                    setState={setName}
                    editable={!isLoading}
                />
            </View>

            <View style={Styles.input} >
                <InputDate
                    state={birthdate}
                    setState={setBirthdate}
                    label={'Birthdate'}
                    editable={!isLoading}
                />
            </View>

            <View style={Styles.input} >
                <TouchableOpacity style={Styles.button} onPress={updateUser} >
                    <Icon style={Styles.avatar} name='content-save' color='#fff' size={20} />
                    <Text style={Styles.btext} >Save</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    );
}

export default Update;