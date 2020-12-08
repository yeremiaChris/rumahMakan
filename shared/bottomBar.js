import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default function bottomBar() {
  return (
    <View style={styles.containerDuaBottom}>
      <View style={styles.totalCard}>
        <Text>Total</Text>
        <Text style={styles.price}>Rp. 0 k</Text>
      </View>
      <View style={styles.addCardDua}>
        <Text style={styles.textAddCard}>Make Order</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerDua: {
    backgroundColor: 'white',
    padding: 10,
  },
  containerDuaBottom: {
    backgroundColor: 'white',
    padding: 10,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 20,
  },
  price: {
    fontSize: 15,
    fontWeight: 'bold',
  },

  totalCard: {
    width: 130,
  },
  addCardDua: {
    backgroundColor: '#114444',
    width: '50%',
    borderRadius: 10,
    alignItems: 'center',
    padding: 10,
  },
  textAddCard: {
    color: 'white',
  },
});
