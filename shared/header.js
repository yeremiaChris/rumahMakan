import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IconButton, Colors, Searchbar, Badge} from 'react-native-paper';
export default function homeMakan({navigation}) {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <View style={styles.wrap}>
      <View style={styles.headerSatu}>
        <IconButton
          icon="menu"
          color="white"
          size={25}
          onPress={() => navigation.openDrawer()}
        />
        <View style={styles.badge}>
          <IconButton
            style={styles.icon}
            icon="basket"
            color="white"
            size={25}
            onPress={() => navigation.openDrawer()}
          />
          {/* <Text>2</Text> */}
          <Badge style={styles.badgeContent} size={10} icon="basket">
            2
          </Badge>
        </View>
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
  badgeContent: {
    alignSelf: 'center',
    position: 'relative',
    right: 10,
    bottom: 10,
  },
  badge: {
    width: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    alignContent: 'center',
  },
  headerSatu: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
  },
  wrap: {
    backgroundColor: '#114444',
    height: 130,
  },
});
