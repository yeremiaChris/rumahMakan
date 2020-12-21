import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeMakan from '../component/makanan/homeMakan';
import Laporan from '../component/makanan/laporan';
const Stack = createStackNavigator();

export default function StackNav() {
  // modalLaporan
  const [visibleTiga, setVisibleTiga] = React.useState(false);

  const showModalTiga = () => setVisibleTiga(true);
  const hideModalTiga = () => setVisibleTiga(false);
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home">
        {(props) => <HomeMakan {...props} />}
      </Stack.Screen>
      <Stack.Screen name="Laporan">
        {(props) => (
          <Laporan
            showModal={showModalTiga}
            visible={visibleTiga}
            hideModal={hideModalTiga}
            {...props}
          />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
