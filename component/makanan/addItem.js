import React, {useState} from 'react';
import {StyleSheet, View, Text, TextInput, ScrollView} from 'react-native';
import {IconButton, Button, Avatar} from 'react-native-paper';
import RNPickerSelect from 'react-native-picker-select';
import {Formik} from 'formik';
import * as yup from 'yup';
import {update, tambahItem} from '../../reducer/actionRedux';
// dispatch
import {useDispatch} from 'react-redux';
export default function addItem({pindahPage, params, route, navigation}) {
  // dispatch
  const dispatch = useDispatch();

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
  const [focusDua, setFocusDua] = useState(false);

  // select
  const select = [
    {label: 'Makanan', value: 'Makanan', key: '1'},
    {label: 'Minuman', value: 'Minuman', key: '2'},
    {label: 'Cemilan', value: 'Cemilan', key: '3'},
    {label: 'Buah', value: 'Buah', key: '4'},
    {label: 'Kerupuk', value: 'Kerupuk', key: '4'},
    {label: 'Kopi', value: 'Kopi', key: '4'},
  ];

  // onsubmit
  const simpan = (data, {resetForm}) => {
    if (route.name == 'Tambah') {
      const newItem = {
        name: data.namaMenu,
        price: data.hargaMenu,
        jenis: data.jenisMenu,
      };
      dispatch(tambahItem(newItem));
      pindahPage.navigate('Home');
    } else {
      dispatch(
        update(route.params.key, data.namaMenu, data.hargaMenu, data.jenisMenu),
      );
      navigation.navigate('Home');
    }
    resetForm();
  };

  // schema
  const menuSchema = yup.object().shape({
    namaMenu: yup
      .string()
      .min(4, 'Terlalu Pendek !')
      .max(15, 'Terlalu Panjang !')
      .required('Required !'),
    jenisMenu: yup.string().required('Required !'),
    hargaMenu: yup
      .number()
      .integer('Invalid Decimal !')
      .required('Required !')
      .typeError('Harus Angka Decimal !'),
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <IconButton
          onPress={kembali}
          icon="arrow-left"
          color="white"
          size={20}
        />
        <Text style={styles.text}>
          {route.name === 'Update' ? 'UPDATE MENU' : 'TAMBAH MENU'}
        </Text>
      </View>
      <View style={styles.wrapcon}>
        <View style={styles.containerInput}>
          <View
            style={{
              flex: 1,
            }}>
            <ScrollView
              contentContainerStyle={{
                justifyContent: 'space-between',
                flexGrow: 1,
              }}>
              <Formik
                validationSchema={menuSchema}
                initialValues={
                  route.name === 'Update'
                    ? {
                        namaMenu: route.params.name,
                        jenisMenu: route.params.jenis,
                        hargaMenu: route.params.price.toString(),
                      }
                    : {
                        namaMenu: '',
                        jenisMenu: '',
                        hargaMenu: '',
                      }
                }
                onSubmit={simpan}>
                {({
                  values,
                  handleChange,
                  handleSubmit,
                  errors,
                  handleBlur,
                  touched,
                  resetForm,
                }) => (
                  <>
                    <View>
                      <View style={styles.logo}>
                        <Avatar.Text label="Y" />
                        <Text style={{textAlign: 'center'}}>Your Cafe</Text>
                      </View>
                      <Text style={styles.textLabel}>Nama Menu </Text>
                      <TextInput
                        placeholderTextColor="#cccfd1"
                        value={values.namaMenu}
                        style={
                          focusDua
                            ? [
                                styles.input,
                                {borderColor: 'black', elevation: 1},
                              ]
                            : styles.input
                        }
                        placeholder="Menu....."
                        onFocus={() => setFocusDua(true)}
                        onEndEditing={() => {
                          setFocusDua(false);
                        }}
                        onBlur={handleBlur('namaMenu')}
                        onChangeText={handleChange('namaMenu')}
                      />
                      {errors.namaMenu && touched.namaMenu && (
                        <Text style={styles.error}>{errors.namaMenu} </Text>
                      )}
                      <Text style={styles.textLabel}>Jenis Menu </Text>
                      <RNPickerSelect
                        value={values.jenisMenu.toString()}
                        onFocus={() => setFocus(true)}
                        onEndEditing={() => {
                          setFocus(false);
                        }}
                        onBlur={handleBlur('jenisMenu')}
                        placeholder={{
                          label: 'Jenis Menu...',
                          value: '',
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
                        onValueChange={handleChange('jenisMenu')}
                        items={select}
                      />
                      {errors.jenisMenu && touched.jenisMenu && (
                        <Text style={styles.error}>{errors.jenisMenu} </Text>
                      )}
                      <Text style={styles.textLabel}>Harga Menu</Text>

                      <TextInput
                        placeholderTextColor="#cccfd1"
                        keyboardType="numeric"
                        value={values.hargaMenu}
                        style={
                          focus
                            ? [
                                styles.input,
                                {borderColor: 'black', elevation: 1},
                              ]
                            : styles.input
                        }
                        placeholder="Harga Menu....."
                        onFocus={() => {
                          setFocus(true);
                        }}
                        onBlur={handleBlur('hargaMenu')}
                        onEndEditing={() => setFocus(false)}
                        onChangeText={handleChange('hargaMenu')}
                      />
                      {errors.hargaMenu && touched.hargaMenu && (
                        <Text style={styles.error}>{errors.hargaMenu} </Text>
                      )}
                    </View>
                    <View>
                      {route.name === 'Update' ? null : (
                        <Button
                          color="white"
                          onPress={resetForm}
                          style={[styles.button, {backgroundColor: 'red'}]}>
                          Reset
                        </Button>
                      )}

                      <Button
                        color="white"
                        onPress={handleSubmit}
                        style={styles.button}>
                        {route.name === 'Update' ? 'Update' : 'Simpan'}
                      </Button>
                    </View>
                  </>
                )}
              </Formik>
            </ScrollView>
          </View>
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
    fontWeight: 'bold',
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
  },
  error: {
    color: 'red',
    fontWeight: 'bold',
  },
  wrapcon: {
    flex: 1,
    padding: 10,
  },
  textLabel: {
    marginBottom: 10,
    marginTop: 10,
    color: 'black',
  },
  tambah: {
    position: 'relative',
    backgroundColor: 'red',
  },
  button: {
    backgroundColor: 'orange',
    marginTop: 5,
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
    color: 'black',
    fontSize: 17,
  },
  placeholder: {
    color: '#cccfd1',
  },
});
