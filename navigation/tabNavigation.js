import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import ItemMakan from '../component/makanan/makan';
import ItemMinum from '../component/makanan/minum';
import {StyleSheet} from 'react-native';

import Makanan from '../component/makanan/makanan';
const Tab = createMaterialTopTabNavigator({
  makan: {
    screen: () => null
  },
  minum: {
    screen: () => null
  },
}, {
  tabBarComponent:
});

// export default function MyTabs({data}) {
//   return (
//     // <Tab.Navigator>
//     //   <Tab.Screen name="Makan" lazy={true}>
//     //     {(props) => <Makanan {...props} />}
//     //   </Tab.Screen>
//     //   <Tab.Screen name="Minum" lazy={true}>
//     //     {(props) => <Makanan {...props} />}
//     //   </Tab.Screen>
//     //   {/* <Tab.Screen name="Minum" lazy={true}>
//     //     {(props) => <ItemMinum {...props} data={data} />}
//     //   </Tab.Screen> */}
//     // </Tab.Navigator>
//   );
// }

// const styles = StyleSheet.create({
//   test: {
//     backgroundColor: 'red',
//   },
// });
