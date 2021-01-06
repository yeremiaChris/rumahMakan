import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {TextInput, Button, IconButton} from 'react-native-paper';
export default function login({navigation}) {
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
          <View style={styles.inputContainer}>
            <TextInput
              label="Email"
              style={styles.input}
              value={text}
              onChangeText={(text) => setText(text)}
            />
            <TextInput
              style={styles.input}
              label="Password"
              value={text}
              onChangeText={(text) => setText(text)}
            />
            <View style={styles.lupa}>
              <TouchableOpacity activeOpacity={0.5}>
                <Text style={styles.lupaText}>Lupa Password ?</Text>
              </TouchableOpacity>
            </View>
            <Button
              mode="contained"
              color="orange"
              onPress={() => console.log('Pressed')}>
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
});
