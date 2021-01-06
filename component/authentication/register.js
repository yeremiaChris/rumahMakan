import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {TextInput, Button, IconButton} from 'react-native-paper';
export default function register({navigation}) {
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
            <Text style={styles.textLogin}>REGISTER</Text>
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
            <TextInput
              style={styles.input}
              label="Re Password"
              value={text}
              onChangeText={(text) => setText(text)}
            />
            <Button
              mode="contained"
              color="orange"
              onPress={() => console.log('Pressed')}>
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
});
