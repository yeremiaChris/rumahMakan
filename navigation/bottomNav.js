import React, {useState, useReducer} from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import drawer from './drawerNav';
import Tambah from '../component/makanan/addItem';
import Home from '../component/makanan/homeMakan';
import {reducer} from '../reducer/orderReducer';
import {IconButton} from 'react-native-paper';
import {StyleSheet} from 'react-native';
export default function bottomNav({name, navigation, setLaporan, laporan}) {
  const Tab = createMaterialBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName={name}
      barStyle={styles.tab}
      activeColor="white">
      <Tab.Screen
        name="Home"
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate('Home');
          },
        }}
        options={{
          tabBarLabel: false,
          tabBarIcon: ({color}) => {
            return <IconButton icon="home" color={color} style={styles.icon} />;
          },
        }}>
        {(props) => {
          return <Home setLaporan={setLaporan} laporan={laporan} {...props} />;
        }}
      </Tab.Screen>
      <Tab.Screen
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate('Tambah');
          },
        }}
        options={{
          tabBarLabel: false,
          tabBarIcon: ({color}) => {
            return <IconButton icon="plus" color={color} style={styles.icon} />;
          },
        }}
        name="Tambah">
        {(props) => <Tambah {...props} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  icon: {
    fontSize: 10,
  },
  tab: {
    backgroundColor: '#114444',
    elevation: 0,
    padding: 0,
    zIndex: -1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
  },
});
