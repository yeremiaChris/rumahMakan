import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Modal, Portal, Text, Button, Provider} from 'react-native-paper';
export default function modalDetail({visible, hideModal}) {
  const containerStyle = {
    backgroundColor: 'white',
    padding: 20,
  };

  return (
    <Provider>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}>
          <View style={styles.container}>
            <Text>Detail</Text>
          </View>
        </Modal>
      </Portal>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
});
