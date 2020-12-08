import React from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import {
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  IconButton,
  Colors,
} from 'react-native-paper';
export default function itemMakan(item) {
  return (
    <View style={styles.wrapContent}>
      <Card style={styles.card}>
        <Card.Cover
          source={{
            uri:
              'https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
          }}
        />
        <Card.Content style={styles.cardContent}>
          <Paragraph style={styles.textTitle}>{item.name}</Paragraph>
          <Text style={styles.price}>{item.price} K</Text>
        </Card.Content>
        <Card.Actions style={styles.cardAction}>
          <View style={styles.jumlah}>
            <IconButton
              style={styles.iconButton}
              icon="plus"
              color="white"
              size={15}
              onPress={() => console.log('Pressed')}
            />
            <Text>0</Text>
            <IconButton
              style={styles.iconButton}
              icon="minus"
              color="white"
              size={15}
              onPress={() => console.log('Pressed')}
            />
          </View>
        </Card.Actions>
        <Card.Actions style={styles.cardAction}>
          <View style={styles.addCard}>
            <Text style={styles.textAddCard}>Add To Card</Text>
          </View>
        </Card.Actions>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
  },
  iconButton: {
    backgroundColor: '#b3bdbd',
  },
  card: {
    width: '49%',
    marginBottom: 10,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardAction: {
    padding: 0,
    justifyContent: 'center',
  },
  textTitle: {
    fontSize: 15,
  },
  jumlah: {
    backgroundColor: '#f2f5f5',
    width: '80%',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },

  addCard: {
    backgroundColor: 'orange',
    width: '80%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    padding: 5,
  },
  textAddCard: {
    color: 'white',
  },
  price: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});
