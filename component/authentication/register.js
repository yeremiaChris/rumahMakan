import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import {TextInput, Button, IconButton} from 'react-native-paper';

import {Formik} from 'formik';
import * as yup from 'yup';
import auth from '@react-native-firebase/auth';
const validationSchemas = yup.object().shape({
  email: yup.string().email('Invalid Email').required('Required'),
  password: yup
    .string()
    .required('Required.')
    .min(8, 'Password minimal terdiri dari 8 karakter')
    .matches(/[a-zA-Z]/, 'Harus ada tulisan latin'),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
});
export default function register({navigation}) {
  // alert error
  const createTwoButtonAlert = () =>
    Alert.alert(
      '',
      'EMAIL SUDAH TERDAFTAR, GUNAKAN AKUN LAIN',
      [{text: 'OK', onPress: () => console.log('OK Pressed')}],
      {cancelable: false},
    );

  // submit
  const submit = (value) => {
    auth()
      .createUserWithEmailAndPassword(value.email, value.password)
      .then(() => {
        console.log('success');
      })
      .catch((error) => {
        switch (error.code) {
          case 'auth/email-already-in-use':
            createTwoButtonAlert();
            break;
        }
      });
  };
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
            <Text style={styles.textLogin}>REGISTER</Text>
          </View>
          <Formik
            onSubmit={submit}
            validationSchema={validationSchemas}
            initialValues={{email: '', password: '', passwordConfirmation: ''}}>
            {({
              values,
              handleSubmit,
              handleChange,
              handleBlur,
              errors,
              touched,
            }) => {
              return (
                <View style={styles.inputContainer}>
                  <TextInput
                    label="Email"
                    style={styles.input}
                    value={values.email}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                  />
                  <Text style={styles.textError}>
                    {touched.email && errors.email}
                  </Text>
                  <TextInput
                    style={styles.input}
                    label="Password"
                    value={values.password}
                    secureTextEntry={true}
                    onBlur={handleBlur('password')}
                    onChangeText={handleChange('password')}
                  />
                  <Text style={styles.textError}>
                    {touched.password && errors.password}
                  </Text>
                  <TextInput
                    style={styles.input}
                    secureTextEntry={true}
                    label="Re Password"
                    value={values.passwordConfirmation}
                    onBlur={handleBlur('passwordConfirmation')}
                    onChangeText={handleChange('passwordConfirmation')}
                  />
                  <Text style={styles.textError}>
                    {touched.passwordConfirmation &&
                      errors.passwordConfirmation}
                  </Text>
                  <Button
                    mode="contained"
                    color="orange"
                    onPress={handleSubmit}>
                    Register
                  </Button>
                  <View style={styles.register}>
                    <Text style={styles.lupaText}>Sudah punya akun ? </Text>
                    <TouchableOpacity
                      activeOpacity={0.5}
                      onPress={() => navigation.navigate('Login')}>
                      <Text style={styles.daftarText}>Login di sini</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              );
            }}
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
    padding: 10,
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
  register: {
    marginTop: 10,
    flexDirection: 'row',
  },
  daftarText: {
    color: 'blue',
  },
  lupaText: {
    color: 'gray',
    marginBottom: 10,
  },
  scroll: {
    marginTop: 50,
  },
  textError: {
    color: 'red',
  },
});
