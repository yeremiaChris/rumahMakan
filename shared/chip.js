import React, {useState} from 'react';
import {Chip} from 'react-native-paper';
import {StyleSheet, View, FlatList, Text} from 'react-native';
import {useDispatch} from 'react-redux';
function chip() {
  // dispatch
  const dispatch = useDispatch();
  const data = [
    {
      chip: 'Makanan',
      id: '1',
      select: false,
    },
    {
      chip: 'Minuman',
      id: '2',
      select: false,
    },
    {
      chip: 'Cemilan',
      id: '3',
      select: false,
    },
    {
      chip: 'Buah',
      id: '4',
      select: false,
    },
    {
      chip: 'Kerupuk',
      id: '5',
      select: false,
    },
    {
      chip: 'Kopi',
      id: '6',
      select: false,
    },
  ];
  // untuk mengganti item
  const [chip, setChip] = useState(data);
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
            style={styles.chipChild}
            onPress={() => {
              dispatch({type: 'urutMakan', test: item.chip});
            }}>
            <Text style={styles.text}>{item.chip}</Text>
          </Chip>
        )}
      />
    </View>
  );
}
export default React.memo(chip);

const styles = StyleSheet.create({
  chipChild: {
    marginRight: 3,
    alignItems: 'center',
    borderRadius: 0,
  },
  containerChip: {
    marginTop: -20,
    paddingLeft: 10,
    paddingRight: 10,
  },
  text: {
    color: 'grey',
  },
});
