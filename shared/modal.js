import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Modal,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {DataTable, Button} from 'react-native-paper';
export default function modal({visibleDua, hideModalDua}) {
  return (
    <View>
      <Modal visible={visibleDua} animationType="slide">
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={{color: 'white'}}>STRUK PEMBAYARAN</Text>
          </View>
          <View style={styles.tanggal}>
            <Text>Selasa, 20 Des 2020</Text>
            <Text>Pukul: 08:20</Text>
          </View>
          <View style={styles.content}>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title>
                  <Text style={styles.text}>Nama Item</Text>
                </DataTable.Title>
                <DataTable.Title numeric>
                  <Text style={styles.text}>Jumlah Beli</Text>
                </DataTable.Title>
                <DataTable.Title numeric>
                  <Text style={styles.text}>Harga</Text>
                </DataTable.Title>
                <DataTable.Title numeric>
                  <Text style={styles.text}>Total Harga</Text>
                </DataTable.Title>
              </DataTable.Header>
              <ScrollView style={styles.scroll}>
                <DataTable.Row>
                  <DataTable.Cell>Frozen yogurt</DataTable.Cell>
                  <DataTable.Cell numeric>2</DataTable.Cell>
                  <DataTable.Cell numeric>Rp. 20 K</DataTable.Cell>
                  <DataTable.Cell numeric>Rp. 40 K</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Frozen yogurt</DataTable.Cell>
                  <DataTable.Cell numeric>2</DataTable.Cell>
                  <DataTable.Cell numeric>Rp. 20 K</DataTable.Cell>
                  <DataTable.Cell numeric>Rp. 40 K</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Frozen yogurt</DataTable.Cell>
                  <DataTable.Cell numeric>2</DataTable.Cell>
                  <DataTable.Cell numeric>Rp. 20 K</DataTable.Cell>
                  <DataTable.Cell numeric>Rp. 40 K</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Frozen yogurt</DataTable.Cell>
                  <DataTable.Cell numeric>2</DataTable.Cell>
                  <DataTable.Cell numeric>Rp. 20 K</DataTable.Cell>
                  <DataTable.Cell numeric>Rp. 40 K</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Frozen yogurt</DataTable.Cell>
                  <DataTable.Cell numeric>2</DataTable.Cell>
                  <DataTable.Cell numeric>Rp. 20 K</DataTable.Cell>
                  <DataTable.Cell numeric>Rp. 40 K</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Frozen yogurt</DataTable.Cell>
                  <DataTable.Cell numeric>2</DataTable.Cell>
                  <DataTable.Cell numeric>Rp. 20 K</DataTable.Cell>
                  <DataTable.Cell numeric>Rp. 40 K</DataTable.Cell>
                </DataTable.Row>
              </ScrollView>
            </DataTable>
            <DataTable style={styles.bayar}>
              <DataTable.Header>
                <DataTable.Title>
                  <Text style={styles.text}>Total</Text>
                </DataTable.Title>
                <DataTable.Title numeric>
                  <Text style={{fontWeight: 'bold', fontSize: 15}}>40 K</Text>
                </DataTable.Title>
              </DataTable.Header>
              <DataTable.Header>
                <DataTable.Title>
                  <Text style={styles.text}>Uang Bayar</Text>
                </DataTable.Title>
                <DataTable.Title numeric>
                  <Text style={{fontWeight: 'bold', fontSize: 15}}>40 K</Text>
                </DataTable.Title>
              </DataTable.Header>
              <DataTable.Header>
                <DataTable.Title>
                  <Text style={styles.text}>Kembalian</Text>
                </DataTable.Title>
                <DataTable.Title numeric>
                  <Text style={{fontWeight: 'bold', fontSize: 15}}>40 K</Text>
                </DataTable.Title>
              </DataTable.Header>
            </DataTable>
          </View>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.conPrint}
            onPress={() => {
              hideModalDua();
            }}>
            <Text style={styles.print}>PRINT</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
  },
  print: {
    color: 'white',
    marginBottom: 10,
  },
  bayar: {
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    position: 'relative',
    bottom: -20,
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: '#114444',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#114444',
    borderRadius: 0,
    paddingTop: 25,
  },
  conPrint: {
    justifyContent: 'flex-end',
    zIndex: -1,
    backgroundColor: '#114444',
    alignItems: 'center',
    height: 60,
  },
  content: {
    flex: 1,
    backgroundColor: 'white',
  },
  tanggal: {
    paddingLeft: 15,
    paddingTop: 10,
    paddingRight: 15,
    paddingBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  scroll: {
    height: 200,
    marginTop: 20,
  },
});
