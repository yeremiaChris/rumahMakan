import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Header from '../../shared/header';
import ContentMakan from './contentMakan';
import BottomBar from '../../shared/bottomBar';
export default function homeMakan({navigation}) {
  return (
    <>
      <View style={styles.container}>
        <Header navigation={navigation} />
        <ContentMakan />
      </View>
      <BottomBar />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
