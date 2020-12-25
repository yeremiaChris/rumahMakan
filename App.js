/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

// react paper
import {Provider as PaperProvider} from 'react-native-paper';

// react navigation
import {NavigationContainer} from '@react-navigation/native';
import DrawerNav from './navigation/drawerNav';
import BottomNav from './navigation/bottomNav';
import {Provider as StoreProvider} from 'react-redux';
import {store} from './reducer/orderReducer';
const App: () => React$Node = () => {
  return (
    <>
      <StoreProvider store={store}>
        <PaperProvider>
          <NavigationContainer>
            <StatusBar backgroundColor="#114444" />
            <DrawerNav />
          </NavigationContainer>
        </PaperProvider>
      </StoreProvider>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
