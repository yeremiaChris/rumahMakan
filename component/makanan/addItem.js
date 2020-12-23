import React, {useState} from 'react';
import {StyleSheet, View, Text, TextInput, ScrollView} from 'react-native';
import {IconButton, Button, Avatar} from 'react-native-paper';
import RNPickerSelect from 'react-native-picker-select';
import CurrencyInput from 'react-native-currency-input';
export default function addItem({navigation}) {
  const [value, setValue] = useState(null); // can also be null
  // back
  const kembali = () => {
    navigation.goBack();
  };
  const [underline, setUnderline] = useState('transparent');

  // tambah
  const [text, setText] = React.useState('');

  // focus input
  const [focus, setFocus] = useState(false);

  // select
  const select = [
    {label: 'Makanan', value: 'hariIni', key: '1'},
    {label: 'Minuman', value: '7Minggu', key: '2'},
    {label: 'Cemilan', value: 'sebulan', key: '3'},
    {label: 'Buah', value: 'setahun', key: '4'},
    {label: 'Kerupuk', value: 'setahun', key: '4'},
    {label: 'Kopi', value: 'setahun', key: '4'},
  ];
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <IconButton
          onPress={() => kembali()}
          icon="arrow-left"
          color="white"
          size={20}
        />
        <Text style={styles.text}>Tambah Menu </Text>
      </View>
      <View style={styles.wrapcon}>
        <View style={styles.containerInput}>
          <ScrollView
            contentContainerStyle={{
              flex: 1,
              justifyContent: 'space-between',
            }}>
            <View>
              <View style={styles.logo}>
                <Avatar.Text label="Y" />
                <Text style={{textAlign: 'center'}}>Your Cafe</Text>
              </View>
              <Text style={styles.textLabel}>Nama Menu </Text>
              <TextInput
                placeholderTextColor="#cccfd1"
                style={
                  focus
                    ? [styles.input, {borderColor: 'gray', elevation: 1}]
                    : styles.input
                }
                placeholder="Menu....."
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
              />
              <Text style={styles.textLabel}>Jenis Menu </Text>

              <RNPickerSelect
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
                placeholder={{
                  label: 'Jenis Menu...',
                  value: null,
                }}
                style={{
                  ...pickerSelectStyles,
                  iconContainer: {
                    alignItems: 'center',
                    borderRadius: 20,
                    position: 'absolute',
                    top: 10,
                  },
                }}
                useNativeAndroidPickerStyle={false}
                fixAndroidTouchableBug
                onValueChange={(value) => console.log(value)}
                items={select}
              />
              <Text style={styles.textLabel}>Harga Menu</Text>

              <CurrencyInput
                placeholderTextColor="#cccfd1"
                style={styles.input}
                placeholder="Harga Jual..."
                value={value}
                onChangeValue={setValue}
                unit="Rp. "
                delimiter=","
                separator="."
                precision={3}
                onChangeText={(formattedValue) => {
                  console.log(formattedValue); // $2,310.46
                }}
              />
            </View>
            <View>
              <Button
                color="white"
                onPress={() => console.log('Pressed')}
                style={styles.button}>
                Simpan
              </Button>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#114444',
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 18,
  },
  containerInput: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    elevation: 2,
  },
  input: {
    overflow: 'hidden',
    backgroundColor: '#fff',
    fontSize: 17,
    borderWidth: 0.5,
    borderColor: '#c1c1c1',
    paddingLeft: 15,
    padding: 10,
    marginBottom: 10,
  },
  wrapcon: {
    flex: 1,
    padding: 10,
  },
  textLabel: {
    marginBottom: 10,
    fontWeight: 'bold',
  },
  tambah: {
    position: 'relative',
    backgroundColor: 'red',
  },
  button: {
    backgroundColor: 'orange',
  },
  logo: {
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
const pickerSelectStyles = StyleSheet.create({
  inputAndroid: {
    overflow: 'hidden',
    backgroundColor: '#fff',
    fontSize: 17,
    borderWidth: 0.5,
    borderColor: '#c1c1c1',
    paddingLeft: 15,
    padding: 10,
    marginBottom: 10,
    color: 'black',
    fontSize: 17,
  },
  placeholder: {
    color: '#cccfd1',
  },
});
