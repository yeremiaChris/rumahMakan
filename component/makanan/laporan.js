import React, {useState} from 'react';
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
export default function Laporan({visible, hideModal, showModal, navigation}) {
  const data = [
    {
      data: 'Pelanggan',
      key: '1',
    },
    {
      data: 'Pelanggan',
      key: '2',
    },
    {
      data: 'Pelanggan',
      key: '3',
    },
    {
      data: 'Pelanggan',
      key: '4',
    },
    {
      data: 'Pelanggan',
      key: '5',
    },
    {
      data: 'Pelanggan',
      key: '6',
    },
    {
      data: 'Pelanggan',
      key: '7',
    },
    {
      data: 'Pelanggan',
      key: '8',
    },
    {
      data: 'Pelanggan',
      key: '9',
    },
    {
      data: 'Pelanggan',
      key: '10',
    },
    {
      data: 'Pelanggan',
      key: '11',
    },
    {
      data: 'Pelanggan',
      key: '12',
    },
  ];

  // search
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = (query) => setSearchQuery(query);

  // select
  const select = [
    {label: 'Hari ini', value: 'hariIni', key: '1'},
    {label: '7 Minggu Terakhir', value: '7Minggu', key: '2'},
    {label: 'Sebulan Terakhir', value: 'sebulan', key: '3'},
    {label: 'Setahun ini', value: 'setahun', key: '4'},
  ];

  // date
  Moment.locale('en');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [date, setDate] = useState(new Date());
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setDate(date);
    hideDatePicker();
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
                label: 'Pilih Laporan...',
                value: null,
              }}
              style={pickerSelectStyles}
              useNativeAndroidPickerStyle={true}
              fixAndroidTouchableBug
              onValueChange={(value) => console.log(value)}
              items={select}
            />
            <TouchableOpacity
              onPress={() => showDatePicker()}
              style={styles.dateCon}>
              <Text>{Moment(date).format('dddd, DD MMM Y')}</Text>
            </TouchableOpacity>
            <DateTimePickerModal
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
                  <Text style={styles.text}>Nama Item</Text>
                </DataTable.Title>
                <DataTable.Title numeric>
                  <Text style={styles.text}>Jumlah Beli</Text>
                </DataTable.Title>
                <DataTable.Title numeric>
                  <Text style={styles.text}>Harga</Text>
                </DataTable.Title>
                <DataTable.Title numeric>
                  <Text style={styles.text}>Total Harga</Text>
                </DataTable.Title>
              </DataTable.Header>
              <View style={styles.scroll}>
                <FlatList
                  data={data}
                  keyExtractor={(item) => item.key}
                  renderItem={({item}) => (
                    <DataTable.Row>
                      <DataTable.Cell>{item.data}</DataTable.Cell>
                      <DataTable.Cell numeric>
                        {item.totalQuantity}
                      </DataTable.Cell>
                      <DataTable.Cell numeric>
                        {/* {convertToRupiah(item.price)} */}
                      </DataTable.Cell>
                      <DataTable.Cell numeric>
                        {/* {convertToRupiah(item.totalPrice)} */}
                      </DataTable.Cell>
                    </DataTable.Row>
                  )}
                />
              </View>
            </DataTable>
          </View>
        </View>
        <View>
          <DataTable style={styles.bayar}>
            <DataTable.Header>
              <DataTable.Title>
                <Text style={styles.text}>Jumlah Kuantitas</Text>
              </DataTable.Title>
              <DataTable.Title numeric>
                <Text style={{fontWeight: 'bold', fontSize: 15}}>
                  {/* {convertToRupiah(totalHarga)} */}
                </Text>
              </DataTable.Title>
            </DataTable.Header>
            <DataTable.Header>
              <DataTable.Title>
                <Text style={styles.text}>Pendapatan</Text>
              </DataTable.Title>
              <DataTable.Title numeric>
                <Text style={{fontWeight: 'bold', fontSize: 15}}>
                  {/* {convertToRupiah(uangBayar)} */}
                </Text>
              </DataTable.Title>
            </DataTable.Header>
          </DataTable>
          <TouchableOpacity activeOpacity={0.7} style={styles.conPrint}>
            <Text style={styles.print}>CETAK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  textDua: {
    color: 'white',
    fontSize: 20,
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

// import React, {useState} from 'react';
// import {
//   StyleSheet,
//   View,
//   Text,
//   Modal,
//   ScrollView,
//   TouchableOpacity,
//   FlatList,
// } from 'react-native';
// import RNPickerSelect from 'react-native-picker-select';
// import {DataTable, IconButton} from 'react-native-paper';
// // import Picker from '@react-native-picker/picker';
// // import {convertToRupiah} from './rupiah';

// //import DatePicker from the package we installed
// import DatePicker from 'react-native-datepicker';
// export default function modal({
//   visibleDua,
//   hideModalDua,
//   orderan,
//   kembalian,
//   totalHarga,
//   uangBayar,
//   reset,
//   navigation,
// }) {
//   // select
//   const [selectedValue, setSelectedValue] = useState('java');
//   const select = [
//     {label: 'Hari ini', value: 'hariIni', key: '1'},
//     {label: '7 Minggu Terakhir', value: '7Minggu', key: '2'},
//     {label: 'Sebulan Terakhir', value: 'sebulan', key: '3'},
//     {label: 'Setahun ini', value: 'setahun', key: '4'},
//   ];

//   // date
//   const [date, setDate] = useState('09-10-2020');
//   return (
//     <View>
//       <Modal animationType="slide">
//         <View style={styles.container}>
//           <View style={styles.header}>
//             <View style={styles.searchHead}>
//               <IconButton
//                 icon="arrow-left"
//                 color="white"
//                 size={25}
//                 onPress={() => navigation.goBack()}
//               />
//             </View>
//             <View>
//               <Text style={styles.textDua}>Laporan Penjualan</Text>
//             </View>
//           </View>
//           <View style={styles.select}>
//             <RNPickerSelect
//               placeholder={{
//                 label: 'Pilih Laporan...',
//                 value: null,
//               }}
//               style={pickerSelectStyles}
//               useNativeAndroidPickerStyle={true}
//               fixAndroidTouchableBug
//               onValueChange={(value) => console.log(value)}
//               items={select}
//             />
//             <DatePicker
//               style={styles.datePickerStyle}
//               date={date} // Initial date from state
//               mode="date" // The enum of date, datetime and time
//               placeholder="select date"
//               format="DD-MM-YYYY"
//               minDate="01-01-2016"
//               maxDate="01-01-2019"
//               confirmBtnText="Confirm"
//               cancelBtnText="Cancel"
//               customStyles={{
//                 dateIcon: {
//                   //display: 'none',
//                   position: 'absolute',
//                   left: 0,
//                   top: 4,
//                   marginLeft: 0,
//                 },
//                 dateInput: {
//                   marginLeft: 36,
//                 },
//               }}
//               onDateChange={(date) => {
//                 setDate(date);
//               }}
//             />
//           </View>
//           <View style={styles.tanggal}>
//             <Text>Selasa, 20 Des 2020</Text>
//             <Text>Pukul: 08:20</Text>
//           </View>
//           <View style={styles.content}>
//             <DataTable>
//               <DataTable.Header>
//                 <DataTable.Title>
//                   <Text style={styles.text}>Nama Item</Text>
//                 </DataTable.Title>
//                 <DataTable.Title numeric>
//                   <Text style={styles.text}>Jumlah Beli</Text>
//                 </DataTable.Title>
//                 <DataTable.Title numeric>
//                   <Text style={styles.text}>Harga</Text>
//                 </DataTable.Title>
//                 <DataTable.Title numeric>
//                   <Text style={styles.text}>Total Harga</Text>
//                 </DataTable.Title>
//               </DataTable.Header>
//               <FlatList
//                 contentContainerStyle={styles.scroll}
//                 data={orderan}
//                 keyExtractor={(item) => item.key}
//                 renderItem={({item}) => (
//                   <DataTable.Row>
//                     {/* <DataTable.Cell>{item.name}</DataTable.Cell> */}
//                     <DataTable.Cell numeric>
//                       {item.totalQuantity}
//                     </DataTable.Cell>
//                     <DataTable.Cell numeric>
//                       {/* {convertToRupiah(item.price)} */}
//                     </DataTable.Cell>
//                     <DataTable.Cell numeric>
//                       {/* {convertToRupiah(item.totalPrice)} */}
//                     </DataTable.Cell>
//                   </DataTable.Row>
//                 )}
//               />
//             </DataTable>
//             <DataTable style={styles.bayar}>
//               <DataTable.Header>
//                 <DataTable.Title>
//                   <Text style={styles.text}>Jumlah Kuantitas</Text>
//                 </DataTable.Title>
//                 <DataTable.Title numeric>
//                   <Text style={{fontWeight: 'bold', fontSize: 15}}>
//                     {/* {convertToRupiah(totalHarga)} */}
//                   </Text>
//                 </DataTable.Title>
//               </DataTable.Header>
//               <DataTable.Header>
//                 <DataTable.Title>
//                   <Text style={styles.text}>Pendapatan</Text>
//                 </DataTable.Title>
//                 <DataTable.Title numeric>
//                   <Text style={{fontWeight: 'bold', fontSize: 15}}>
//                     {/* {convertToRupiah(uangBayar)} */}
//                   </Text>
//                 </DataTable.Title>
//               </DataTable.Header>
//             </DataTable>
//           </View>

//           <TouchableOpacity activeOpacity={0.7} style={styles.conPrint}>
//             <Text style={styles.print}>PRINT</Text>
//           </TouchableOpacity>
//         </View>
//       </Modal>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   text: {
//     fontWeight: 'bold',
//   },
//   textDua: {
//     color: 'white',
//     fontSize: 20,
//   },
//   print: {
//     color: 'white',
//     marginBottom: 10,
//   },
//   bayar: {
//     flex: 1,
//     borderBottomLeftRadius: 20,
//     borderBottomRightRadius: 20,
//     position: 'relative',
//     bottom: -20,
//     backgroundColor: 'white',
//   },
//   header: {
//     backgroundColor: '#114444',
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   container: {
//     flex: 1,
//     justifyContent: 'space-between',
//   },
//   button: {
//     backgroundColor: '#114444',
//     borderRadius: 0,
//     paddingTop: 25,
//   },
//   conPrint: {
//     justifyContent: 'flex-end',
//     zIndex: -1,
//     backgroundColor: '#114444',
//     alignItems: 'center',
//     height: 60,
//   },
//   content: {
//     flex: 1,
//     backgroundColor: 'white',
//   },
//   tanggal: {
//     paddingLeft: 15,
//     paddingTop: 10,
//     paddingRight: 15,
//     paddingBottom: 15,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   scroll: {
//     height: 200,
//     marginTop: 20,
//   },
// });

// const pickerSelectStyles = StyleSheet.create({
//   inputAndroid: {
//     fontSize: 16,
//     color: 'black',
//     paddingRight: 30, // to ensure the text is never behind the icon
//   },
// });
