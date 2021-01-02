import React, {useState, useReducer} from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import drawer from './drawerNav';
import Tambah from '../component/makanan/addItem';
import Home from '../component/makanan/homeMakan';
import {reducer} from '../reducer/orderReducer';
import {IconButton} from 'react-native-paper';
import {StyleSheet} from 'react-native';
import Stack from './stackNav';
import Laporan from '../component/makanan/laporan';
import Add from '../component/makanan/addItem';
export default function bottomNav({
  name,
  navigation,
  setLaporan,
  laporan,
  route,
  infoLaporan,
  setInfoLaporan,
}) {
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
          return (
            <Stack
              {...props}
              setLaporan={setLaporan}
              laporan={laporan}
              pindahPage={navigation}
              params={route.params}
              setInfoLaporan={setInfoLaporan}
              infoLaporan={infoLaporan}
            />
          );
        }}
      </Tab.Screen>
      <Tab.Screen
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate('Laporan');
          },
        }}
        options={{
          tabBarLabel: false,
          tabBarIcon: ({color}) => {
            return (
              <IconButton icon="store" color={color} style={styles.icon} />
            );
          },
        }}
        name="Laporan">
        {(props) => (
          <Laporan
            {...props}
            laporan={laporan}
            name="Laporan"
            infoLaporan={infoLaporan}
          />
        )}
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
        {(props) => (
          <Add
            {...props}
            name="Tambah"
            setLaporan={setLaporan}
            laporan={laporan}
            pindahPage={navigation}
          />
        )}
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
    justifyContent: 'center',
    height: 30,
  },
});
