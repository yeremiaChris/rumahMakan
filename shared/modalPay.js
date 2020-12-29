import React, {useState} from 'react';
import {TextInput, StyleSheet, View, Form} from 'react-native';
import {
  Button,
  Modal,
  Portal,
  Text,
  Provider,
  IconButton,
} from 'react-native-paper';
import {convertToRupiah} from './rupiah';
import {Formik} from 'formik';
import {onChange} from 'react-native-reanimated';

export default function modalPay({
  visible,
  hideModal,
  showModalDua,
  totalHarga,
  kembalian,
  setKembalian,
  setUangBayar,
  button,
  setButton,
  orderan,
  setLaporan,
  laporan,
  totalYangDiBeli,
  setInfoLaporan,
  infoLaporan,
}) {
  const containerStyle = {backgroundColor: 'white', padding: 20};
  // mengelola kembalian uang bayar
  const uangKembalian = (text) => {
    setKembalian(text - totalHarga);
  };

  // state untuk jumlah pelanggan
  const [pelangganNo, setPelangganNo] = useState(1);

  // onSubmit
  const submit = (data) => {
    const totalBarang = orderan.reduce(
      (acc, curr) => acc + curr.totalQuantity,
      0,
    );

    setLaporan([
      ...laporan,
      {
        key: Math.random().toString(),
        pelanggan: 'Pelanggan ' + pelangganNo,
        jumlahBeli: totalBarang,
        totalHarga: totalHarga,
        item: orderan,
        uangBayar: data.uangBayar,
        kembalian: kembalian,
      },
    ]);

    // info laporan mendapatkan pendapatan dan jumlah belinya
    setInfoLaporan({
      pendapatan: infoLaporan.pendapatan + totalHarga,
      total: infoLaporan.total + totalBarang,
    });
    setPelangganNo((prevState) => prevState + 1);
    hideModal();
    showModalDua();
    setUangBayar(data.uangBayar);
    setButton(true);
  };

  return (
    <Provider>
      <Portal>
        <Modal visible={visible} contentContainerStyle={containerStyle}>
          <Formik
            initialValues={{uangBayar: ''}}
            onSubmit={(data) => submit(data)}>
            {({handleChange, handleSubmit, values}) => (
              <>
                <TextInput
                  keyboardType="numeric"
                  name="uangBayar"
                  value={values.uangBayar}
                  style={styles.input}
                  placeholder="Uang Bayar"
                  onChangeText={handleChange('uangBayar')}
                  onChange={(e) => {
                    e.nativeEvent.text >= totalHarga
                      ? setButton(false) ||
                        uangKembalian(parseInt(e.nativeEvent.text))
                      : setButton(true) || setKembalian(0);
                  }}
                  // onChangeText={(text) => {
                  //   handleChange('uangBayar');

                  // text >= totalHarga
                  //   ? setButton(false) && uangKembalian(parseInt(text))
                  //   : setButton(true) || setKembalian(0);
                  // }}
                />
                <View style={styles.buttonCon}>
                  <View style={styles.kembalian}>
                    <Text style={styles.text}>Kembalian</Text>
                    <Text style={styles.text}>
                      {convertToRupiah(kembalian)}
                    </Text>
                  </View>
                  <View style={styles.pay}>
                    <View>
                      <Text style={styles.text}>Total </Text>
                      <Text style={styles.text}>
                        {convertToRupiah(totalHarga)}
                      </Text>
                    </View>

                    <Button
                      disabled={button}
                      style={styles.button}
                      color="white"
                      onPress={handleSubmit}>
                      Pay
                    </Button>
                  </View>
                </View>
              </>
            )}
          </Formik>
        </Modal>
      </Portal>
    </Provider>
  );
}

const styles = StyleSheet.create({
  buttonCon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    width: 80,
    marginLeft: 20,
    backgroundColor: '#ff9300',
  },
  text: {
    fontWeight: 'bold',
  },
  input: {
    padding: 10,
    borderColor: 'gray',
    borderWidth: 0.3,
    fontSize: 18,
  },
  pay: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  close: {
    marginTop: -50,
    marginLeft: -20,
    padding: 0,
  },
});
