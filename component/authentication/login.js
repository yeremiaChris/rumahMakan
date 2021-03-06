import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {TextInput, Button, IconButton} from 'react-native-paper';
import {Formik} from 'formik';
import * as yup from 'yup';
import {submit, validationSchemas} from '../../shared/utils';

export default function login({navigation}) {
  // alert error
  const [error, setError] = React.useState('');
  const [text, setText] = React.useState('');
  return (
    <>
      <View style={styles.header}>
        <IconButton
          icon="menu"
          color="white"
          onPress={() => navigation.openDrawer()}
        />
      </View>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scroll}>
          <View style={styles.logo}>
            <Text style={styles.textLogin}>LOGIN</Text>
          </View>
          <Formik
            onSubmit={submit}
            initialValues={{email: '', password: ''}}
            validationSchema={validationSchemas}>
            {({
              values,
              handleChange,
              handleSubmit,
              handleBlur,
              errors,
              touched,
            }) => (
              <View style={styles.inputContainer}>
                <TextInput
                  label="Email"
                  style={styles.input}
                  defaultValue={values.email}
                  onBlur={handleBlur('email')}
                  onChangeText={handleChange('email')}
                />
                <Text style={styles.textError}>
                  {touched.email && errors.email}
                </Text>
                <TextInput
                  onBlur={handleBlur('password')}
                  secureTextEntry={true}
                  style={styles.input}
                  label="Password"
                  defaultValue={values.password}
                  onChangeText={handleChange('password')}
                />
                <Text style={styles.textError}>
                  {touched.password && errors.password}
                </Text>
                <View style={styles.lupa}>
                  <TouchableOpacity activeOpacity={0.5}>
                    <Text style={styles.lupaText}>Lupa Password ?</Text>
                  </TouchableOpacity>
                </View>
                <Button onPress={handleSubmit} mode="contained" color="orange">
                  Login
                </Button>
                <View style={styles.register}>
                  <Text style={styles.lupaText}>Tidak punya akun ? </Text>
                  <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.daftarText}>Daftar di sini</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </Formik>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  inputContainer: {
    padding: 20,
  },
  input: {
    backgroundColor: 'white',
    marginBottom: 10,
  },
  logo: {
    alignItems: 'center',
  },
  textLogin: {
    fontSize: 30,
  },
  header: {
    backgroundColor: '#114444',
  },
  lupa: {
    alignItems: 'flex-end',
    marginTop: 10,
  },
  lupaText: {
    color: 'gray',
    marginBottom: 10,
  },
  register: {
    marginTop: 10,
    flexDirection: 'row',
  },
  daftarText: {
    color: 'blue',
  },
  scroll: {
    marginTop: 50,
  },
  textError: {
    color: 'red',
  },
});
