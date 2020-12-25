import React, {useState} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Laporan from '../component/makanan/laporan';
import Home from '../component/makanan/homeMakan';
import Add from '../component/makanan/addItem';
import Bottom from './bottomNav';
const Drawer = createDrawerNavigator();

function drawerNav(props) {
  // laporan
  const [laporan, setLaporan] = useState([]);

  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home">
        {(props) => (
          <Bottom
            {...props}
            name="Home"
            setLaporan={setLaporan}
            laporan={laporan}
          />
        )}
      </Drawer.Screen>
      <Drawer.Screen name="Laporan">
        {(props) => <Laporan {...props} laporan={laporan} name="Laporan" />}
      </Drawer.Screen>
      <Drawer.Screen name="Tambah">
        {(props) => (
          <Bottom
            {...props}
            name="Tambah"
            setLaporan={setLaporan}
            laporan={laporan}
          />
        )}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
}

export default drawerNav;
