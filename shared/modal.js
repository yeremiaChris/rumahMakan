import React from 'react';
import {
  Modal,
  Portal,
  Text,
  Button,
  Provider,
  IconButton,
  Badge,
} from 'react-native-paper';
import {StyleSheet, View} from 'react-native';
function modal() {
  return (
    <Provider>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}>
          <Text>Example Modal. Click outside this area to dismiss.</Text>
        </Modal>
      </Portal>
    </Provider>
  );
}

export default React.memo(modal);
