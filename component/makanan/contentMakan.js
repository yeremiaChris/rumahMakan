import React from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import {
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  IconButton,
  Colors,
} from 'react-native-paper';

import ItemMakan from '../../shared/itemMakan';

export default function contentMakan() {
  // dummy data
  const data = [
    {
      name: 'Americano',
      price: 10,
      id: 1,
    },
    {
      name: 'Americano',
      price: 10,
      id: 2,
    },
  ];
  let numColumns = 0;

  return <ItemMakan />;
}

const styles = StyleSheet.create({
  wrapContent: {
    padding: 10,
  },
  wrapContent: {
    padding: 10,
    justifyContent: 'space-between',
  },
});
