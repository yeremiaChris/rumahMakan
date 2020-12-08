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

const App: () => React$Node = () => {
  return (
    <>
      <PaperProvider>
        <NavigationContainer>
          <DrawerNav />
        </NavigationContainer>
      </PaperProvider>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
