import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {
  Modal,
  Portal,
  Text,
  Button,
  Provider,
  DataTable,
} from 'react-native-paper';
import {convertToRupiah} from './rupiah';
export default function modalDetail({visible, hideModal, detailItems}) {
  const containerStyle = {
    backgroundColor: 'white',
    padding: 20,
  };
  const renderItem = ({item}) => {
    return (
      <DataTable.Row>
        <DataTable.Cell>{item.name}</DataTable.Cell>
        <DataTable.Cell numeric>{item.totalQuantity}</DataTable.Cell>
        <DataTable.Cell numeric>{convertToRupiah(item.price)}</DataTable.Cell>
        <DataTable.Cell numeric>
          {convertToRupiah(item.totalPrice)}
        </DataTable.Cell>
      </DataTable.Row>
    );
  };
  return (
    <Provider>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}>
          <View style={styles.container}>
            <Text style={styles.header}>Detail {detailItems.pelanggan}</Text>
            <View style={styles.wrapHeader}>
              <DataTable>
                <DataTable.Header>
                  <DataTable.Title>Nama</DataTable.Title>
                  <DataTable.Title numeric>Jumlah Beli</DataTable.Title>
                  <DataTable.Title numeric>Harga</DataTable.Title>
                  <DataTable.Title numeric>Total Harga</DataTable.Title>
                </DataTable.Header>

                <FlatList
                  data={detailItems.detail}
                  keyExtractor={(item) => item.key.toString()}
                  renderItem={renderItem}
                />
              </DataTable>
            </View>
          </View>
        </Modal>
      </Portal>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  wrapHeader: {
    flexDirection: 'row',
  },
});
