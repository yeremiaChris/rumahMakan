import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Header from '../../shared/header';
import BottomBar from '../../shared/bottomBar';
import Chip from '../../shared/chip';
import Items from './item';
import Modal from '../../shared/modal';
import ModalPay from '../../shared/modalPay';
import {useDispatch} from 'react-redux';
import {cancelOrderItem, resetAction} from '../../reducer/actionRedux';
import StackNav from '../../navigation/stackNav';
import {increment, decrement} from '../../shared/utils';
export default function homeMakan({
  pilihPage,
  setLaporan,
  laporan,
  state,
  navigation,
  route,
  setInfoLaporan,
  infoLaporan,
  kalimat,
  routeName,
  params,
}) {
  // dispatch
  const dispatch = useDispatch();

  // total harga
  const [totalHarga, setTotalHarga] = useState(0);
  const [orderan, setOrderan] = useState([]);
  const total = () => {};

  // cancel order
  const cancelOrder = (key, totalPrice) => {
    setOrderan(orderan.filter((item) => item.key !== key));
    dispatch(cancelOrderItem(key));
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
    dispatch(resetAction());
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
        <Header navigation={pilihPage} showModal={showModal} />
        <BottomBar
          totalBarang={totalBarang}
          totalHarga={totalHarga}
          reset={reset}
          showModal={showModal}
        />
        <Chip />
        <Items
          paramsKalimat={params}
          kalimat={kalimat}
          pilihPage={pilihPage}
          increment={(index) => increment(index, dispatch)}
          decrement={(index) => decrement(index, dispatch)}
          setOrderan={setOrderan}
          setTotalHarga={setTotalHarga}
          cancelOrder={cancelOrder}
          kunci={navigation}
          routeName={routeName}
          orderan={orderan}
        />
        <ModalPay
          totalBarang={totalBarang}
          totalYangDiBeli={totalYangDiBeli}
          laporan={laporan}
          setLaporan={setLaporan}
          orderan={orderan}
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
          setInfoLaporan={setInfoLaporan}
          infoLaporan={infoLaporan}
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
