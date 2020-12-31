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
  const renderItem = ({item}) => {
    return (
      <DataTable.Row>
        <DataTable.Cell>
          <Text style={styles.textPutih}>{item.name}</Text>
        </DataTable.Cell>
        <DataTable.Cell numeric>
          <Text style={styles.textPutih}>{item.totalQuantity}</Text>
        </DataTable.Cell>
        <DataTable.Cell numeric>
          <Text style={styles.textPutih}>{convertToRupiah(item.price)}</Text>
        </DataTable.Cell>
        <DataTable.Cell numeric>
          <Text style={styles.textPutih}>
            {convertToRupiah(item.totalPrice)}
          </Text>
        </DataTable.Cell>
      </DataTable.Row>
    );
  };
  return (
    <Provider>
      <Portal>
        <Modal visible={visible} onDismiss={hideModal}>
          <View style={styles.container}>
            <Text style={styles.header}>Detail {detailItems.pelanggan}</Text>
            <View style={styles.wrapHeader}>
              <DataTable>
                <DataTable.Header>
                  <DataTable.Title>
                    <Text style={styles.textPutih}>Nama</Text>
                  </DataTable.Title>
                  <DataTable.Title numeric>
                    <Text style={styles.textPutih}>Jumlah Beli</Text>
                  </DataTable.Title>
                  <DataTable.Title numeric>
                    <Text style={styles.textPutih}>Harga</Text>
                  </DataTable.Title>
                  <DataTable.Title numeric>
                    <Text style={styles.textPutih}>Total Harga</Text>
                  </DataTable.Title>
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
    backgroundColor: '#114444',
    padding: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  wrapHeader: {
    flexDirection: 'row',
  },
  textPutih: {
    color: 'white',
  },
});
