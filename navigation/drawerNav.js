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
  // jumlah kuantitas beli laporan
  const [infoLaporan, setInfoLaporan] = useState({
    total: 0,
    pendapatan: 0,
  });

  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home">
        {(props) => (
          <Bottom
            {...props}
            name="Home"
            setLaporan={setLaporan}
            laporan={laporan}
            setInfoLaporan={setInfoLaporan}
            infoLaporan={infoLaporan}
          />
        )}
      </Drawer.Screen>
      <Drawer.Screen name="Laporan">
        {(props) => (
          <Bottom
            {...props}
            laporan={laporan}
            name="Laporan"
            infoLaporan={infoLaporan}
          />
        )}
      </Drawer.Screen>
      <Drawer.Screen name="Tambah">
        {(props) => <Bottom {...props} name="Tambah" />}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
}

export default drawerNav;
