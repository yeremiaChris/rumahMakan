import React, {useState, useEffect} from 'react';
import {Card, Title, Paragraph, IconButton} from 'react-native-paper';
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {convertToRupiah} from '../../shared/rupiah';
// accesing global state redux
import {useSelector} from 'react-redux';
function item({item, increment, decrement, orderColor, cancelOrder, orderan}) {
  // accessing global state from redux
  const data = useSelector((state) => state);
  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.cardWrap}
        data={data.item}
        keyExtractor={(item) => item.key}
        renderItem={({item}) => {
          return (
            <Card style={styles.card}>
              <Card.Content style={styles.contentCard}>
                <View>
                  <Title style={{fontSize: 18}}>{item.name}</Title>
                  <Paragraph>{convertToRupiah(item.price)} </Paragraph>
                </View>
                <View>
                  <View style={styles.jumlah}>
                    <IconButton
                      style={styles.iconButton}
                      icon="plus"
                      color="white"
                      size={15}
                      onPress={() => {
                        item.order === false ? increment(item.key) : null;
                      }}
                    />
                    <Text>{item.quantity}</Text>
                    <IconButton
                      style={styles.iconButton}
                      icon="minus"
                      color="white"
                      size={15}
                      onPress={() => {
                        item.order === false ? decrement(item.key) : null;
                      }}
                    />
                  </View>
                  <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => {
                      item.order === false
                        ? orderColor(
                            item.key,
                            item.quantity,
                            item.price,
                            item.quantity * item.price,
                            item.name,
                          )
                        : cancelOrder(item.key, item.quantity * item.price);
                    }}>
                    <View
                      style={[
                        styles.addCard,
                        {backgroundColor: item.orderColor},
                      ]}>
                      <Text style={styles.textAddCard}>{item.orderText}</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </Card.Content>
            </Card>
          );
        }}
      />
    </View>
  );
}

export default React.memo(item);

// mapstate redux
const mapStateToProps = (state) => {
  return state;
};

const styles = StyleSheet.create({
  cardWrap: {
    padding: 10,
  },
  iconButton: {
    backgroundColor: '#b3bdbd',
  },
  textAddCard: {
    color: 'white',
  },
  card: {
    borderRadius: 0,
    elevation: 0,
    flexDirection: 'row',
    marginBottom: 10,
    borderColor: '#e5e8e9',
    borderWidth: 1,
  },
  contentCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  addCard: {
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
  },
  jumlah: {
    backgroundColor: '#f2f5f5',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 3,
    width: 150,
  },
  container: {
    height: 340,
  },
});
