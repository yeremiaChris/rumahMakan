import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {convertToRupiah} from './rupiah';
function bottomBar({totalHarga, reset, showModal}) {
  return (
    <View style={styles.containerDuaBottom}>
      <View style={styles.wrapTotal}>
        <View style={styles.totalCard}>
          <Text style={styles.price}>Total</Text>
          <Text style={styles.price}>{convertToRupiah(totalHarga)} </Text>
        </View>
        <View style={styles.wrapButton}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => {
              totalHarga > 0 ? showModal() : null;
            }}>
            <View style={[styles.addCardDua, {marginBottom: 2}]}>
              <Text style={styles.textAddCard}>Bayar</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5} onPress={() => reset()}>
            <View style={[styles.addCardDua, {backgroundColor: 'tan'}]}>
              <Text style={styles.textAddCard}>Reset</Text>
            </View>
          </TouchableOpacity>
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
    width: '100%',
    padding: 4,
    elevation: 0,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    position: 'relative',
    bottom: 25,
    borderColor: '#e1e3e3',
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
    padding: 5,
    width: 100,
  },
  textAddCard: {
    color: 'white',
  },
});
