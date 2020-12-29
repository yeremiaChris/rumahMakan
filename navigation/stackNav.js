import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AddItem from '../component/makanan/addItem';
import Home from '../component/makanan/homeMakan';

const Stack = createStackNavigator();
export default function stackNav({
  setLaporan,
  laporan,
  pindahPage,
  params,
  route,
}) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home">
        {(props) => (
          <Home
            {...props}
            setLaporan={setLaporan}
            laporan={laporan}
            pilihPage={pindahPage}
          />
        )}
      </Stack.Screen>
      <Stack.Screen name="Update">
        {(props) => (
          <AddItem {...props} pindahPage={pindahPage} params={route.params} />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
