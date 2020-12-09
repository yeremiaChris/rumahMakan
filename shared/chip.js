import React from 'react';
import {Chip} from 'react-native-paper';
import {StyleSheet, View, FlatList, Text} from 'react-native';
export default function chip({setData, dataDua}) {
  const data = [
    {
      chip: 'Makanan',
      id: '1',
      item: dataDua,
    },
    // {
    //   chip: 'Minuman',
    //   id: '2',
    // },
    // {
    //   chip: 'Penutup',
    //   id: '3',
    // },
    // {
    //   chip: 'Cemilan',
    //   id: '4',
    // },
    // {
    //   chip: 'Ice Cream',
    //   id: '5',
    // },
  ];

  const chipPress = (items) => {
    setData(items);
  };

  return (
    <View style={styles.containerChip}>
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        style={styles.chip}
        horizontal
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <Chip onPress={() => chipPress(item.item)} style={styles.chipChild}>
            {item.chip}
          </Chip>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  chip: {
    marginBottom: 10,
  },
  chipChild: {
    marginRight: 20,
    alignItems: 'center',
  },
  containerChip: {
    padding: 10,
  },
});
