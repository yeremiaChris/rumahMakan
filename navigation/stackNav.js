import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeMakan from '../component/makanan/homeMakan';
const Stack = createStackNavigator();

export default function StackNav() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home">
        {(props) => <HomeMakan {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
