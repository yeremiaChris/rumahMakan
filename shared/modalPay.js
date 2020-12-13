import React from 'react';
import {TextInput, StyleSheet, View, Form} from 'react-native';
import {
  Button,
  Modal,
  Portal,
  Text,
  Provider,
  IconButton,
} from 'react-native-paper';
import {convertToRupiah} from './rupiah';
import {useForm, Controller} from 'react-hook-form';

export default function modalPay({
  visible,
  hideModal,
  showModalDua,
  totalHarga,
}) {
  const containerStyle = {backgroundColor: 'white', padding: 20};

  // pembayaran react-hook-form
  const methods = useForm();
  const {handleSubmit, control, reset} = methods;
  const onSubmit = (data) => console.log(data);
  return (
    <Provider>
      <Portal>
        <Modal visible={visible} contentContainerStyle={containerStyle}>
          <View>
            <Controller
              name="bayar"
              control={control}
              defaultValue={false}
              rules={{required: true}}
              render={({onChange, value}) => (
                <TextInput
                  keyboardType="numeric"
                  style={styles.input}
                  placeholder="Uang Bayar"
                />
              )}
            />
          </View>
          <View style={styles.buttonCon}>
            <View style={styles.kembalian}>
              <Text style={styles.text}>Kembalian</Text>
              <Text style={styles.text}>Rp. 0</Text>
            </View>
            <View style={styles.pay}>
              <View>
                <Text style={styles.text}>Total </Text>
                <Text style={styles.text}>{convertToRupiah(totalHarga)}</Text>
              </View>

              <Button
                style={styles.button}
                color="white"
                onPress={() => {
                  //   hideModal();
                  //   showModalDua();
                  onSubmit();
                }}>
                Pay
              </Button>
            </View>
          </View>
        </Modal>
      </Portal>
    </Provider>
  );
}

const styles = StyleSheet.create({
  buttonCon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    width: 80,
    marginLeft: 20,
    backgroundColor: '#ff9300',
  },
  text: {
    fontWeight: 'bold',
  },
  input: {
    padding: 10,
    borderColor: 'gray',
    borderWidth: 0.3,
    fontSize: 18,
  },
  pay: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  close: {
    marginTop: -50,
    marginLeft: -20,
    padding: 0,
  },
});
