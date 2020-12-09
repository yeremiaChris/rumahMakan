import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Header from '../../shared/header';
import BottomBar from '../../shared/bottomBar';

import ItemMakan from '../../shared/itemMakan';
import Chip from '../../shared/chip';
import TabNavigation from '../../navigation/tabNavigation';
export default function homeMakan({navigation}) {
  // dummy data
  const data = [
    {
      name: 'Americano',
      price: 10,
      key: 1,
    },
    {
      name: 'Americano',
      price: 10,
      key: 2,
    },
    {
      name: 'Americano',
      price: 10,
      key: 3,
    },
    {
      name: 'Americano',
      price: 10,
      key: 4,
    },
  ];
  const data2 = [
    {
      name: 'Makan',
      price: 10,
      key: 1,
    },
    {
      name: 'Geprek',
      price: 10,
      key: 2,
    },
    {
      name: 'Mata Sapi',
      price: 10,
      key: 3,
    },
    {
      name: 'Dadar',
      price: 10,
      key: 4,
    },
  ];
  const datas = data;

  const [item, setData] = useState(datas);
  return (
    <>
      <View style={styles.container}>
        <Header navigation={navigation} />
        <BottomBar />
        <TabNavigation data={item} />
        {/* <Chip setData={setData} dataDua={data2} /> */}
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
