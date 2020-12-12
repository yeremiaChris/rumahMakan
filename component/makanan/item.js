import React, {useState} from 'react';
import {Card, Title, Paragraph, IconButton} from 'react-native-paper';
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
function item({
  item,
  increment,
  decrement,
  orderColor,
  cancelOrder,
  totalUang,
  orderan,
}) {
  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.cardWrap}
        data={item}
        keyExtractor={(item) => item.key}
        renderItem={({item}) => {
          return (
            <Card style={styles.card}>
              <Card.Content style={styles.contentCard}>
                <View>
                  <Title>{item.name}</Title>
                  <Paragraph>Rp {item.price} K</Paragraph>
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
    borderRadius: 10,
    elevation: 0,
    flexDirection: 'row',
    marginBottom: 10,
    borderColor: 'grey',
    borderWidth: 0.3,
  },
  contentCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  addCard: {
    borderRadius: 10,
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
    height: 330,
  },
});
