import React from 'react';
import {Card, Title, Paragraph, IconButton} from 'react-native-paper';
import {StyleSheet, View, Text, Image, FlatList} from 'react-native';
export default function makanan({item, add}) {
  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.cardWrap}
        data={item}
        keyExtractor={(item) => item.key}
        renderItem={({item}) => (
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
                    onPress={() => add()}
                  />
                  <Text>{item.quantity}</Text>
                  <IconButton
                    style={styles.iconButton}
                    icon="minus"
                    color="white"
                    size={15}
                    onPress={() => console.log('Pressed')}
                  />
                </View>
                <View style={styles.addCard}>
                  <Text style={styles.textAddCard}>Order</Text>
                </View>
              </View>
            </Card.Content>
          </Card>
        )}
      />
    </View>
  );
}

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
    elevation: 3,
    flexDirection: 'row',
    marginBottom: 10,
  },
  contentCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  addCard: {
    backgroundColor: 'orange',
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
