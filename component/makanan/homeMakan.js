import React, {useState, useEffect, useReducer} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Header from '../../shared/header';
import BottomBar from '../../shared/bottomBar';
import Chip from '../../shared/chip';
// import TabNavigation from '../../navigation/tabNavigation';
import Items from './item';
import Modal from '../../shared/modal';
import {reducer} from '../../reducer/orderReducer';
import ModalPay from '../../shared/modalPay';

// dummy data
const makan = [
  {
    name: 'Nasi Goreng',
    price: 10000,
    key: '1',
    quantity: 0,
    jenis: 'Makanan',
    orderColor: 'orange',
    orderText: 'Order',
    order: false,
  },
  {
    name: 'Mie Goreng',
    price: 5000,
    key: '2',
    quantity: 0,
    jenis: 'Makanan',
    orderColor: 'orange',
    orderText: 'Order',
    order: false,
  },
  {
    name: 'Geprek',
    price: 8000,
    key: '3',
    quantity: 0,
    jenis: 'Makanan',
    orderColor: 'orange',
    orderText: 'Order',
    order: false,
  },
  {
    name: 'Ayam Penyet',
    price: 12000,
    key: '4',
    quantity: 0,
    jenis: 'Makanan',
    orderColor: 'orange',
    orderText: 'Order',
    order: false,
  },
  {
    name: 'Kopi Panas',
    price: 4000,
    key: '5',
    quantity: 0,
    jenis: 'Minuman',
    orderColor: 'orange',
    orderText: 'Order',
    order: false,
  },
  {
    name: 'Teh Panas',
    price: 3000,
    key: '6',
    quantity: 0,
    jenis: 'Minuman',
    orderColor: 'orange',
    orderText: 'Order',
    order: false,
  },
  {
    name: 'Americano',
    price: 15000,
    key: '7',
    quantity: 0,
    jenis: 'Minuman',
    orderColor: 'orange',
    orderText: 'Order',
    order: false,
  },
  {
    name: 'Es Jeruk',
    price: 5000,
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
  const orderColor = (key, totalQuantity, price, totalPrice, name) => {
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
          price,
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

  // modal pay
  const [visible, setVisible] = useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  // modal struk
  const [visibleDua, setVisibleDua] = useState(false);
  const showModalDua = () => setVisibleDua(true);
  const hideModalDua = () => setVisibleDua(false);

  // mengelola kembalian uang
  const [kembalian, setKembalian] = useState(0);

  // mengelola uang bayar
  const [uangBayar, setUangBayar] = useState(0);

  return (
    <>
      <View style={styles.container}>
        <Header navigation={navigation} showModal={showModal} />
        <BottomBar
          totalHarga={totalHarga}
          reset={reset}
          showModal={showModal}
        />
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
        <ModalPay
          visible={visible}
          hideModal={hideModal}
          showModalDua={showModalDua}
          totalHarga={totalHarga}
          kembalian={kembalian}
          setKembalian={setKembalian}
          setUangBayar={setUangBayar}
        />
        <Modal
          reset={reset}
          orderan={orderan}
          visibleDua={visibleDua}
          hideModalDua={hideModalDua}
          kembalian={kembalian}
          totalHarga={totalHarga}
          uangBayar={uangBayar}
        />
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
