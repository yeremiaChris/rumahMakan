import React, {useState, useEffect, useReducer} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Header from '../../shared/header';
import BottomBar from '../../shared/bottomBar';
import Chip from '../../shared/chip';
// import TabNavigation from '../../navigation/tabNavigation';

import Items from './item';

import {reducer} from '../../reducer/orderReducer';

// dummy data
const makan = [
  {
    name: 'Nasi Goreng',
    price: 10,
    key: '1',
    quantity: 0,
    jenis: 'Makanan',
    orderColor: 'orange',
    orderText: 'Order',
    order: false,
  },
  {
    name: 'Mie Goreng',
    price: 5,
    key: '2',
    quantity: 0,
    jenis: 'Makanan',
    orderColor: 'orange',
    orderText: 'Order',
    order: false,
  },
  {
    name: 'Geprek',
    price: 8,
    key: '3',
    quantity: 0,
    jenis: 'Makanan',
    orderColor: 'orange',
    orderText: 'Order',
    order: false,
  },
  {
    name: 'Ayam Penyet',
    price: 12,
    key: '4',
    quantity: 0,
    jenis: 'Makanan',
    orderColor: 'orange',
    orderText: 'Order',
    order: false,
  },
  {
    name: 'Kopi Panas',
    price: 4,
    key: '5',
    quantity: 0,
    jenis: 'Minuman',
    orderColor: 'orange',
    orderText: 'Order',
    order: false,
  },
  {
    name: 'Teh Panas',
    price: 3,
    key: '6',
    quantity: 0,
    jenis: 'Minuman',
    orderColor: 'orange',
    orderText: 'Order',
    order: false,
  },
  {
    name: 'Americano',
    price: 15,
    key: '7',
    quantity: 0,
    jenis: 'Minuman',
    orderColor: 'orange',
    orderText: 'Order',
    order: false,
  },
  {
    name: 'Es Jeruk',
    price: 5,
    key: '8',
    quantity: 0,
    jenis: 'Minuman',
    orderColor: 'orange',
    orderText: 'Order',
    order: false,
  },
];
const minum = [];

export default function homeMakan({navigation}) {
  const [item, setItem] = useState(makan);
  const items = {
    makan: item,
  };
  const [state, dispatch] = useReducer(reducer, items);

  // increment
  const increment = (index) => {
    // setItem(
    //   item.map((item) =>
    //     item.key === index && item.quantity >= 0
    //       ? {...item, quantity: item.quantity + 1}
    //       : item,
    //   ),
    // );
    dispatch({type: 'incrementOrder', id: index});
  };

  // decrement
  const decrement = (index) => {
    // setItem(
    //   item.map((item) =>
    //     item.key === index && item.quantity > 0
    //       ? {...item, quantity: item.quantity - 1}
    //       : item,
    //   ),
    // );
    dispatch({type: 'decrementOrder', id: index});
  };

  // total harga
  const [totalHarga, setTotalHarga] = useState(0);
  const [orderan, setOrderan] = useState([]);
  const total = () => {};

  // change color order and order Text
  const orderColor = (key, totalQuantity, totalPrice, name) => {
    // setItem(
    //   item.map((item) =>
    //     item.key === key && item.quantity > 0
    //       ? {...item, orderColor: '#114444', orderText: 'Ordered', order: true}
    //       : item,
    //   ),
    // );
    dispatch({type: 'orderItem', id: key});
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
      setTotalHarga((prev) => prev + totalPrice);
    }
  };

  // cancel order
  const cancelOrder = (key, totalPrice) => {
    setOrderan(orderan.filter((item) => item.key !== key));
    // setItem(
    //   item.map((item) =>
    //     item.key === key && item.order === true
    //       ? {...item, orderColor: 'orange', orderText: 'Order', order: false}
    //       : item,
    //   ),
    // );
    dispatch({type: 'cancelOrderItem', id: key});
    setTotalHarga((prev) => prev - totalPrice);
  };

  //  total uang
  const totalUang = () =>
    orderan.reduce((acc, curr) => {
      setTotalHarga(acc.totalPrice + curr.totalPrice);
    });

  // reset semua
  const reset = () => {
    setOrderan([]);
    setTotalHarga(0);
    dispatch({type: 'reset'});
    // setItem([
    //   ...item.map((data) => {
    //     setOrderan([]);
    //     setTotalHarga(0);
    //     return {
    //       ...data,
    //       orderColor: 'orange',
    //       orderText: 'Order',
    //       order: false,
    //       quantity: 0,
    //     };
    //   }),
    // ]);
  };

  // urutkan
  // berdasarkan makanan

  return (
    <>
      <View style={styles.container}>
        <Header navigation={navigation} />
        <BottomBar totalHarga={totalHarga} reset={reset} />
        <Chip dispatch={dispatch} />
        <Items
          item={state.makan}
          increment={increment}
          decrement={decrement}
          orderColor={orderColor}
          cancelOrder={cancelOrder}
          totalUang={totalUang}
          orderan={orderan}
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
