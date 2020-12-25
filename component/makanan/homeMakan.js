import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Header from '../../shared/header';
import BottomBar from '../../shared/bottomBar';
import Chip from '../../shared/chip';
import Items from './item';
import Modal from '../../shared/modal';
import ModalPay from '../../shared/modalPay';
import {useDispatch} from 'react-redux';
export default function homeMakan({navigation, setLaporan, laporan, state}) {
  // dispatch
  const dispatch = useDispatch();
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

  // const total jumlah yang di order
  const [totalYangDiBeli, setTotalYangDiBeli] = useState(0);
  const totalBarang = () =>
    orderan.reduce((acc, curr) => {
      console.log(acc);
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

  // membuat button disable ketika belum memenuhi syaratnya
  const [button, setButton] = useState(true);

  return (
    <>
      <View style={styles.container}>
        <Header navigation={navigation} showModal={showModal} />
        <BottomBar
          totalBarang={totalBarang}
          totalHarga={totalHarga}
          reset={reset}
          showModal={showModal}
        />
        <Chip dispatch={dispatch} />
        <Items
          item={state}
          increment={increment}
          decrement={decrement}
          orderColor={orderColor}
          cancelOrder={cancelOrder}
          orderan={orderan}
        />
        <ModalPay
          totalBarang={totalBarang}
          totalYangDiBeli={totalYangDiBeli}
          laporan={laporan}
          setLaporan={setLaporan}
          orderan={orderan}
          visible={visible}
          hideModal={hideModal}
          showModalDua={showModalDua}
          totalHarga={totalHarga}
          kembalian={kembalian}
          setKembalian={setKembalian}
          setUangBayar={setUangBayar}
          button={button}
          setButton={setButton}
        />
        <Modal
          setTotalYangDiBeli={setTotalYangDiBeli}
          setTotalHarga={setTotalHarga}
          setKembalian={setKembalian}
          reset={reset}
          orderan={orderan}
          visibleDua={visibleDua}
          hideModalDua={hideModalDua}
          kembalian={kembalian}
          totalHarga={totalHarga}
          uangBayar={uangBayar}
          setTotalYangDiBeli={setTotalYangDiBeli}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
});
