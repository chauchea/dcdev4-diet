import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/Home';
import AlimentScreen from './screens/Aliments'

const Stack = createStackNavigator();

export default Routeur = () =>  {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="AUJOURD'HUI" component={HomeScreen}/>
        <Stack.Screen name="AJOUTER UN ALIMENT" component={AlimentScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
};


