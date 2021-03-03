import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IconButton, Colors, Searchbar, Badge} from 'react-native-paper';
import {useSelector, useDispatch} from 'react-redux';
import {filter} from '../reducer/actionRedux';
import Modal from '../shared/modal';
function header({navigation}) {
  const button = useSelector((state) => state.project.button);
  const laporans = useSelector((state) => state.projectTiga);

  const [searchQuery, setSearchQuery] = useState('');
  const [state, setstate] = useState([]);
  console.log(searchQuery);
  // dispatch untuk search
  const dispatch = useDispatch();
  const onChangeSearch = (query) => {
    dispatch(filter(query));
    setSearchQuery(query);
  };
  return (
    <View style={styles.wrap}>
      <View style={styles.headerSatu}>
        <IconButton
          disabled={button}
          icon="menu"
          color="white"
          size={25}
          onPress={() => navigation.openDrawer()}
        />
        <View style={styles.badge}>
          <IconButton
            disabled={button}
            icon="basket"
            color="white"
            size={25}
            onPress={() => navigation.navigate('Laporan')}
          />
          {/* <Text>2</Text> */}
          <Badge style={styles.badgeContent} size={10} icon="basket">
            {laporans.laporan.length > 100 ? '...' : laporans.laporan.length}
          </Badge>
        </View>
      </View>
      <View style={styles.searchWrap}>
        <Searchbar
          style={styles.search}
          placeholder="Cari..."
          value={searchQuery}
          onChangeText={onChangeSearch}
        />
      </View>
    </View>
  );
}

export default React.memo(header);
const styles = StyleSheet.create({
  badge: {
    width: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    alignContent: 'center',
  },
  badgeContent: {
    alignSelf: 'center',
    position: 'relative',
    right: 10,
    bottom: 10,
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
    height: 150,
  },
});
