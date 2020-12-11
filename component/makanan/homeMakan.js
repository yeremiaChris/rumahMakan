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
      key: '1',
      quantity: 0,
      orderColor: 'orange',
      orderText: 'Order',
      order: false,
    },
    {
      name: 'Mie Goreng',
      price: 5,
      key: '2',
      quantity: 0,
      orderColor: 'orange',
      orderText: 'Order',
      order: false,
    },
    {
      name: 'Geprek',
      price: 8,
      key: '3',
      quantity: 0,
      orderColor: 'orange',
      orderText: 'Order',
      order: false,
    },
    {
      name: 'Ayam Penyet',
      price: 12,
      key: '4',
      quantity: 0,
      orderColor: 'orange',
      orderText: 'Order',
      order: false,
    },
  ];
  const minum = [
    {
      name: 'Kopi Panas',
      price: 4,
      key: '1',
      quantity: 0,
      orderColor: 'orange',
      orderText: 'Order',
      order: false,
    },
    {
      name: 'Teh Panas',
      price: 3,
      key: '2',
      quantity: 0,
      orderColor: 'orange',
      orderText: 'Order',
      order: false,
    },
    {
      name: 'Americano',
      price: 15,
      key: '3',
      quantity: 0,
      orderColor: 'orange',
      orderText: 'Order',
      order: false,
    },
    {
      name: 'Es Jeruk',
      price: 5,
      key: '4',
      quantity: 0,
      orderColor: 'orange',
      orderText: 'Order',
      order: false,
    },
  ];

  // tambah quantity
  const [item, setItem] = useState(makan);

  // increment
  const increment = (index) => {
    setItem(
      item.map((item) =>
        item.key === index && item.quantity >= 0
          ? {...item, quantity: item.quantity + 1}
          : item,
      ),
    );
  };

  // decrement
  const decrement = (index) => {
    setItem(
      item.map((item) =>
        item.key === index && item.quantity > 0
          ? {...item, quantity: item.quantity - 1}
          : item,
      ),
    );
  };

  // total harga
  const [totalHarga, setTotalHarga] = useState(0);
  const [orderan, setOrderan] = useState([]);
  const total = () => {};

  // change color order and order Text
  const orderColor = (key, totalQuantity, totalPrice, name) => {
    setItem(
      item.map((item) =>
        item.key === key && item.quantity > 0
          ? {...item, orderColor: '#114444', orderText: 'Ordered', order: true}
          : item,
      ),
    );
    if (totalQuantity > 0) {
      setOrderan([
        ...orderan,
        {
          key,
          totalQuantity,
          totalPrice,
          name,
        },
      ]);
    }
    // const totalUang = (items) => items.reduce((acc, curr) => {

    // })
  };
  // cancel order
  const cancelOrder = (key) => {
    setOrderan(orderan.filter((item) => item.key !== key));
    setItem(
      item.map((item) =>
        item.key === key && item.order === true
          ? {...item, orderColor: 'orange', orderText: 'Order', order: false}
          : item,
      ),
    );
  };
  return (
    <>
      <View style={styles.container}>
        <Header navigation={navigation} />
        <BottomBar totalHarga={totalHarga} />
        <Chip minum={minum} makan={makan} setItem={setItem} />
        <Items
          item={item}
          increment={increment}
          decrement={decrement}
          orderColor={orderColor}
          cancelOrder={cancelOrder}
        />
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
