import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

function bottomBar({totalHarga}) {
  return (
    <View style={styles.containerDuaBottom}>
      <View style={styles.wrapTotal}>
        <View style={styles.totalCard}>
          <Text>Total</Text>
          <Text style={styles.price}>Rp. {totalHarga} K</Text>
        </View>
        <View style={styles.wrapButton}>
          <View style={[styles.addCardDua, {marginBottom: 2}]}>
            <Text style={styles.textAddCard}>Make Order</Text>
          </View>
          <View style={[styles.addCardDua, {backgroundColor: 'tan'}]}>
            <Text style={styles.textAddCard}>Reset</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
export default React.memo(bottomBar);

const styles = StyleSheet.create({
  containerDua: {
    backgroundColor: 'white',
    padding: 10,
  },
  wrapTotal: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    width: '95%',
    padding: 4,
    elevation: 20,
    borderRadius: 20,
    position: 'relative',
    bottom: 20,
  },
  containerDuaBottom: {
    backgroundColor: 'white',
    alignItems: 'center',
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
    borderRadius: 10,
    alignItems: 'center',
    padding: 8,
  },
  textAddCard: {
    color: 'white',
  },
});
