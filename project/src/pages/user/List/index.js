import React, { useState, useEffect } from 'react';
import { SafeAreaView, StatusBar, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import { FAB } from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Styles } from './styles';

const List = ({ navigation }) => {

  const [users, setUsers] = useState([])

  const listUsers = () => {
    firestore().collection('user')
      .get()
      .then(result => {
        var loadedUsers = []
        result.forEach(doc => {
          loadedUsers = [...loadedUsers, { id: doc.id, ...doc.data() }]
        })

        setUsers(loadedUsers)
      })
  }

  const renderItem = (item) => {
    return (
      <TouchableOpacity style={Styles.optionContainer} onPress={() => updateUser(item)} >

        {
          item.image ?
            <Image style={Styles.avatarBg} source={{ uri: `data:image/jpg;base64,${item.image}` }} />
            :
            <View style={Styles.avatarBg} >
              <Icon style={Styles.avatar} name="account" size={25} />
            </View>
        }

        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 15 }} >
          <View >
            <Text style={Styles.optionTitle} >{item.name}</Text>
            <Text style={Styles.optionDescription} >{new Date(item.birthdate.toDate()).toDateString()}</Text>
          </View>

          <Icon style={Styles.iconR} name="chevron-right" size={20} />
        </View>
      </TouchableOpacity>
    )
  }

  const updateUser = (item) => {
    navigation.navigate('UserUpdate', { selected: item })
  }

  useEffect(() => {
    listUsers()
  }, [])

  return (
    <SafeAreaView style={Styles.container} >
      <StatusBar backgroundColor="#fff" />
      <View style={Styles.header} >
        <View style={{ width: 30 }} />
        <Text style={Styles.title} >User list</Text>
        <View style={{ width: 30 }} />
      </View>

      <FlatList
        data={users || []}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => renderItem(item)}
        ListFooterComponent={() => {
          return (
            <View style={{ height: 80, width: 100 }} />
          )
        }}
      />

      <FAB
        style={Styles.fab}
        icon={(props) => <Icon style={Styles.fabIcon} name='plus' color='#fff' {...props} />}
        onPress={() => console.log('create')}
      />

    </SafeAreaView>
  );
}

export default List;