import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Platform,
  Button,
  TextInput,
} from 'react-native';
import {
  Card,
  Title,
  IconButton,
  Paragraph,
  Avatar,
  Searchbar,
  Modal,
  Portal,
  Provider,
  DataTable,
} from 'react-native-paper';
import Header from '../../shared/header';
import ModalLaporan from '../../shared/modalLaporan';
import RNPickerSelect from 'react-native-picker-select';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Moment from 'moment';
import {convertToRupiah} from '../../shared/rupiah';
import ModalDetail from '../../shared/modalDetail';
import {useSelector, useDispatch} from 'react-redux';

import {fetchLaporan, laporanUrut} from '../../reducer/actionRedux';

export default function Laporan({visible, hideModal, showModal, navigation}) {
  // laporan dari redux
  const laporans = useSelector((state) => state.projectTiga);
  // fetch data dari firestore melalui redux

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchLaporan());
  }, []);

  // disable button sebelum fetch data
  const button = useSelector((state) => state.project.button);

  // pelanggan
  const data = [
    {
      data: 'Pelanggan',
      key: '1',
    },
  ];

  // search
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = (query) => setSearchQuery(query);

  // select
  const urut = new Date();
  const seminggu = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
  const sebulan = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
  const setahun = new Date(Date.now() - 365 * 24 * 60 * 60 * 1000);
  const select = [
    {label: 'Hari ini', value: urut.toDateString(), key: '1'},
    {label: '7 Minggu Terakhir', value: seminggu.toDateString(), key: '2'},
    {label: 'Sebulan Terakhir', value: sebulan.toDateString(), key: '3'},
    {label: 'Setahun ini', value: setahun.toDateString(), key: '4'},
  ];

  // onchange picker
  const changePicker = (kode) => {
    dispatch(laporanUrut(kode));
  };

  // date
  Moment.locale('id');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [date, setDate] = useState(Moment(new Date()));
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    const kode = date.toDateString();
    changePicker(kode);
    setDate(date);
    hideDatePicker();
  };

  // modal detail laporan
  const [visibleDua, setVisibleDua] = React.useState(false);

  // state detail
  const [detailItems, setDetailItems] = useState({});
  const showModalDua = (detailItem, pelanggan) => {
    console.log(detailItem);
    setVisibleDua(true);
    setDetailItems({detail: detailItem, pelanggan});
  };
  const hideModalDua = () => setVisibleDua(false);

  // renderitem
  const renderItem = ({item}) => {
    console.log(item);
    return (
      <>
        {laporans.laporan.length !== 0 ? (
          <TouchableOpacity
            disabled={button}
            activeOpacity={0.4}
            onPress={() => {
              showModalDua(item.item, item.nama);
            }}>
            <DataTable.Row>
              <DataTable.Cell>{item.nama}</DataTable.Cell>
              <DataTable.Cell numeric>{item.jumlahBeli}</DataTable.Cell>
              <DataTable.Cell numeric>
                {convertToRupiah(item.totalHarga)}
              </DataTable.Cell>
            </DataTable.Row>
          </TouchableOpacity>
        ) : (
          <Text>Laporan tidak ada</Text>
        )}
      </>
    );
  };

  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          justifyContent: 'space-between',
        }}>
        <View>
          <View style={styles.header}>
            <View style={styles.searchHead}>
              <IconButton
                disabled={button}
                icon="arrow-left"
                color="white"
                size={25}
                onPress={() => navigation.goBack()}
              />
            </View>
            <View>
              <Text style={styles.textDua}>Laporan Penjualan</Text>
            </View>
          </View>
          <View style={styles.date}>
            <RNPickerSelect
              placeholder={{
                label: 'Semua',
                value: 'semua',
              }}
              style={pickerSelectStyles}
              useNativeAndroidPickerStyle={true}
              fixAndroidTouchableBug
              onValueChange={(value) => {
                value == 'semua'
                  ? dispatch(fetchLaporan())
                  : changePicker(value);
              }}
              items={select}
            />
            <TouchableOpacity
              disabled={button}
              onPress={() => showDatePicker()}
              style={styles.dateCon}>
              <Text>{Moment(date).format('dddd, DD MMM Y')}</Text>
            </TouchableOpacity>
            <DateTimePickerModal
              disabled={button}
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
              value={date}
            />
          </View>
          <View style={styles.tanggal}>
            <Text>Selasa, 20 Des 2020</Text>
          </View>

          <View style={styles.content}>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title>
                  <Text style={styles.text}>Pelanggan</Text>
                </DataTable.Title>
                <DataTable.Title numeric>
                  <Text style={styles.text}>Jumlah Beli</Text>
                </DataTable.Title>
                <DataTable.Title numeric>
                  <Text style={styles.text}>Total Harga</Text>
                </DataTable.Title>
              </DataTable.Header>
              <View style={styles.scroll}>
                <FlatList
                  data={laporans.laporan}
                  keyExtractor={(item) => item.key}
                  renderItem={renderItem}
                />
              </View>
            </DataTable>
          </View>
        </View>
        <ModalDetail
          visible={visibleDua}
          hideModal={hideModalDua}
          detailItems={detailItems}
        />

        <DataTable style={styles.bayar}>
          <DataTable.Header>
            <DataTable.Title>
              <Text style={styles.text}>Jumlah Kuantitas Beli</Text>
            </DataTable.Title>
            <DataTable.Title numeric>
              <Text style={{fontWeight: 'bold', fontSize: 15}}>
                {laporans.laporan.length == 0 || laporans.laporan.length == 1
                  ? laporans.laporan.map((item) => {
                      return item.jumlahBeli;
                    })
                  : laporans.laporan.reduce(
                      (curr, prev) => curr + prev.jumlahBeli,
                      0,
                    )}
              </Text>
            </DataTable.Title>
          </DataTable.Header>
          <DataTable.Header>
            <DataTable.Title>
              <Text style={styles.text}>Pendapatan</Text>
            </DataTable.Title>
            <DataTable.Title numeric>
              <Text style={{fontWeight: 'bold', fontSize: 15}}>
                {laporans.laporan.length == 0 || laporans.laporan.length == 1
                  ? laporans.laporan.map((item) => {
                      return convertToRupiah(item.totalHarga);
                    })
                  : convertToRupiah(
                      laporans.laporan.reduce(
                        (curr, prev) => curr + prev.totalHarga,
                        0,
                      ),
                    )}
              </Text>
            </DataTable.Title>
          </DataTable.Header>
        </DataTable>

        <TouchableOpacity
          disabled={button}
          activeOpacity={0.7}
          style={styles.conPrint}>
          <Text style={styles.print}>CETAK</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  textDua: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  header: {
    backgroundColor: '#114444',
    flexDirection: 'row',
    alignItems: 'center',
  },
  tanggal: {
    paddingLeft: 15,
    paddingRight: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  content: {
    backgroundColor: 'white',
  },
  scroll: {
    marginTop: 20,
    height: 200,
  },
  conPrint: {
    justifyContent: 'flex-end',
    zIndex: -1,
    backgroundColor: '#114444',
    alignItems: 'center',
    height: 60,
  },
  bayar: {
    backgroundColor: 'white',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    position: 'relative',
    top: 25,
  },
  text: {
    fontWeight: 'bold',
  },
  print: {
    color: 'white',
    marginBottom: 7,
  },
  date: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  dateCon: {
    padding: 5,
    borderWidth: 0.4,
    borderColor: 'grey',
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputAndroid: {
    fontSize: 16,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
    width: 180,
  },
});
