import React, {useState, useReducer} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Laporan from '../component/makanan/laporan';
import Home from '../component/makanan/homeMakan';
import {reducer} from '../reducer/orderReducer';
import Add from '../component/makanan/addItem';
import Bottom from './bottomNav';
const Drawer = createDrawerNavigator();

// dummy data
const makan = [
  {
    name: 'Nasi Goreng',
    price: 10000,
    key: '1',
    quantity: 0,
    jenis: 'Makanan',
    orderColor: 'orange',
    orderText: 'Order',
    order: false,
  },
  {
    name: 'Mie Goreng',
    price: 5000,
    key: '2',
    quantity: 0,
    jenis: 'Makanan',
    orderColor: 'orange',
    orderText: 'Order',
    order: false,
  },
  {
    name: 'Geprek',
    price: 8000,
    key: '3',
    quantity: 0,
    jenis: 'Makanan',
    orderColor: 'orange',
    orderText: 'Order',
    order: false,
  },
  {
    name: 'Ayam Penyet',
    price: 12000,
    key: '4',
    quantity: 0,
    jenis: 'Makanan',
    orderColor: 'orange',
    orderText: 'Order',
    order: false,
  },
  {
    name: 'Kopi Panas',
    price: 4000,
    key: '5',
    quantity: 0,
    jenis: 'Minuman',
    orderColor: 'orange',
    orderText: 'Order',
    order: false,
  },
  {
    name: 'Teh Panas',
    price: 3000,
    key: '6',
    quantity: 0,
    jenis: 'Minuman',
    orderColor: 'orange',
    orderText: 'Order',
    order: false,
  },
  {
    name: 'Americano',
    price: 15000,
    key: '7',
    quantity: 0,
    jenis: 'Minuman',
    orderColor: 'orange',
    orderText: 'Order',
    order: false,
  },
  {
    name: 'Es Jeruk',
    price: 5000,
    key: '8',
    quantity: 0,
    jenis: 'Minuman',
    orderColor: 'orange',
    orderText: 'Order',
    order: false,
  },
];

export default function drawerNav() {
  // laporan
  const [laporan, setLaporan] = useState([]);

  // reducer
  const [item, setItem] = useState(makan);
  const items = {
    makan: item,
  };
  const [state, dispatch] = useReducer(reducer, items);

  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home">
        {(props) => (
          <Bottom
            {...props}
            name="Home"
            setLaporan={setLaporan}
            laporan={laporan}
            dispatch={dispatch}
            state={state}
          />
        )}
      </Drawer.Screen>
      {/* <Drawer.Screen name="Home">
        {(props) => (
          <Home
            {...props}
            setLaporan={setLaporan}
            laporan={laporan}
            dispatch={dispatch}
            state={state}
          />
        )}
      </Drawer.Screen> */}
      <Drawer.Screen name="Laporan">
        {(props) => <Laporan {...props} laporan={laporan} name="Laporan" />}
      </Drawer.Screen>
      <Drawer.Screen name="Tambah">
        {(props) => <Bottom {...props} name="Tambah" />}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
}
