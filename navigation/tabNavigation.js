import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ItemMakan from '../shared/itemMakan';
import React from 'react';
import {StyleSheet} from 'react-native';
const Tab = createMaterialTopTabNavigator();

export default function MyTabs({data}) {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Makan" lazy={true}>
        {(props) => <ItemMakan {...props} data={data} />}
      </Tab.Screen>
      <Tab.Screen name="Minum" lazy={true}>
        {(props) => <ItemMakan {...props} data={data} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  test: {
    backgroundColor: 'red',
  },
});
