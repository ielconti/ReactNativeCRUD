import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, FlatList } from 'react-native';
import firestore from '@react-native-firebase/firestore';

import { Styles } from './styles';

const List = () => {

  const [users, setUsers] = useState([])

  const listUsers = () => {
    firestore().collection('user')
      .get()
      .then(result => {
        var loadedUsers = []
        result.forEach( doc => {
          loadedUsers = [...loadedUsers, { id: doc.id, ...doc.data() }]
        })

        setUsers(loadedUsers)
      })
  }

  useEffect(() => {
    listUsers()
  }, [])

  return (
    <SafeAreaView style={Styles.container} >
      <StatusBar backgroundColor="#fff" />
      {
        users.map((user) => {
          return(
            <Text key={user.id} >{user.name}</Text>
          )
        })
      }
    </SafeAreaView>
  );
}

export default List;