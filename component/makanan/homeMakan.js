import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Header from '../../shared/header';
import BottomBar from '../../shared/bottomBar';
import Chip from '../../shared/chip';
// import TabNavigation from '../../navigation/tabNavigation';

import Items from './item';
export default function homeMakan({navigation}) {
  // dummy data
  const makan = [
    {
      name: 'Nasi Goreng',
      price: 10,
      image: './assets/nasiGoreng.png',
      key: '1',
      quantity: 0,
    },
    {
      name: 'Mie Goreng',
      price: 5,
      key: '2',
      quantity: 0,
    },
    {
      name: 'Geprek',
      price: 8,
      key: '3',
      quantity: 0,
    },
    {
      name: 'Ayam Penyet',
      price: 12,
      key: '4',
      quantity: 0,
    },
  ];
  const minum = [
    {
      name: 'Kopi Panas',
      price: 4,
      key: '1',
      quantity: 0,
    },
    {
      name: 'Teh Panas',
      price: 3,
      key: '2',
      quantity: 0,
    },
    {
      name: 'Americano',
      price: 15,
      key: '3',
      quantity: 0,
    },
    {
      name: 'Es Jeruk',
      price: 5,
      key: '4',
      quantity: 0,
    },
  ];

  // tambah quantity

  const [item, setItem] = useState(makan);
  const add = () => {
    setItem(
      item.map(v, (i) => {
        v.key === i ? {...v, quantity: item.quantity + 1} : v;
      }),
    );
  };
  return (
    <>
      <View style={styles.container}>
        <Header navigation={navigation} />
        <BottomBar />
        <Chip minum={minum} makan={makan} setItem={setItem} />
        <Items item={item} add={add} />
        {/* <TabNavigation data={item} /> */}
        {/* <ItemMakan data={item} /> */}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
