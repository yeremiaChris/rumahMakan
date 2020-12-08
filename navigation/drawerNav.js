import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import home from '../component/makanan/homeMakan';
const Drawer = createDrawerNavigator();
export default function drawerNav() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Feed" component={home} />
    </Drawer.Navigator>
  );
}
