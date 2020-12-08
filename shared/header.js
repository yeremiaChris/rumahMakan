import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {IconButton, Colors, Searchbar} from 'react-native-paper';
export default function homeMakan({navigation}) {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <View style={styles.wrap}>
      <View style={styles.headerSatu}>
        <IconButton
          icon="menu"
          color="black"
          size={25}
          onPress={() => navigation.openDrawer()}
        />
      </View>
      <View style={styles.searchWrap}>
        <Searchbar
          style={styles.search}
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerSatu: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textHeader: {
    color: 'black',
    width: '50%',
    textAlign: 'center',
    fontSize: 23,
  },
  search: {
    width: 300,
    borderRadius: 10,
    elevation: 0.8,
  },
  searchWrap: {
    alignItems: 'center',
    marginTop: 20,
  },
});
