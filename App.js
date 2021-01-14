import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

const Stack = createStackNavigator();

import UserList from './screens/UsersList'
import userDetailScreen from './screens/userDetailScreen'
import CreateUserScreen from './screens/CreateUserScreen'

function MyStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="UsersList" component={UserList} options={{title:'Users List'}}/>
      <Stack.Screen name="CreateUserScreen" component={CreateUserScreen} options={{title:'Create User'}}/>
      <Stack.Screen name="UserDetailScreen" component={userDetailScreen} options={{title:'User Detail'}}/>
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
