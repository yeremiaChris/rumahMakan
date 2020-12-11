import React, {useState} from 'react';
import {Chip} from 'react-native-paper';
import {StyleSheet, View, FlatList, Text} from 'react-native';
export default function chip({setItem, minum, makan}) {
  const data = [
    {
      chip: 'Makanan',
      id: '1',
      item: makan,
      select: false,
    },
    {
      chip: 'Minuman',
      id: '2',
      item: minum,
      select: false,
    },
  ];

  // untuk mengganti item
  const [chip, setChip] = useState(data);
  const chipPress = (items) => {
    setItem(items);
  };
  // selected chip
  const selectChip = () => {};

  return (
    <View style={styles.containerChip}>
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        style={styles.chip}
        horizontal
        data={chip}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <Chip
            selected={item.select}
            onPress={() => chipPress(item.item)}
            style={styles.chipChild}>
            <Text style={styles.text}>{item.chip}</Text>
          </Chip>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  chipChild: {
    marginRight: 20,
    alignItems: 'center',
  },
  containerChip: {
    padding: 10,
  },
  text: {
    color: 'grey',
  },
});
