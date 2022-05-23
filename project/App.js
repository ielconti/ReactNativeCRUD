import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import UserList from './src/pages/user/List'
import UserUpdate from './src/pages/user/Update'
import UserCreate from './src/pages/user/Create'


const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName='UserList' screenOptions={{ headerShown: false }} >
      <Stack.Screen name="UserList" component={UserList} />
      <Stack.Screen name="UserUpdate" component={UserUpdate} />
      <Stack.Screen name="UserCreate" component={UserCreate} />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer >
      <MyStack />
    </NavigationContainer>
  );
};

export default App;
