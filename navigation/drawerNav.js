import React, {useState, useEffect} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Laporan from '../component/makanan/laporan';
import Home from '../component/makanan/homeMakan';
import Add from '../component/makanan/addItem';
import Bottom from './bottomNav';
import auth from '@react-native-firebase/auth';
import {View, Text} from 'react-native';

import Login from '../component/authentication/login';
import Register from '../component/authentication/register';

const Drawer = createDrawerNavigator();

function drawerNav(props) {
  // laporan
  const [laporan, setLaporan] = useState([]);
  // jumlah kuantitas beli laporan
  const [infoLaporan, setInfoLaporan] = useState({
    total: 0,
    pendapatan: 0,
  });

  // authentication
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  return (
    <>
      {user ? (
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
      ) : (
        <Drawer.Navigator>
          <Drawer.Screen name="Login">
            {(props) => <Login {...props} name="Login" />}
          </Drawer.Screen>
          <Drawer.Screen name="Register">
            {(props) => <Register {...props} name="Register" />}
          </Drawer.Screen>
        </Drawer.Navigator>
      )}
    </>
  );
}

export default drawerNav;
