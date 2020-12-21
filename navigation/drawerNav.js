import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import stackNav from './stackNav';
const Drawer = createDrawerNavigator();
export default function drawerNav() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={stackNav} />
    </Drawer.Navigator>
  );
}
