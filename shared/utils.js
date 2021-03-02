import * as yup from 'yup';
import Alert from 'react-native';
import auth from '@react-native-firebase/auth';

// select
export const select = [
  {label: 'Makanan', value: 'Makanan', key: '1'},
  {label: 'Minuman', value: 'Minuman', key: '2'},
  {label: 'Cemilan', value: 'Cemilan', key: '3'},
  {label: 'Buah', value: 'Buah', key: '4'},
  {label: 'Kerupuk', value: 'Kerupuk', key: '4'},
  {label: 'Kopi', value: 'Kopi', key: '4'},
];

// schema
export const menuSchema = yup.object().shape({
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

// simpan pada add item
export const simpan = (
  data,
  resetForm,
  setKalimat,
  dispatch,
  pindahPage,
  update,
  navigation,
) => {
  if (route.name == 'Tambah') {
    const newItem = {
      name: data.namaMenu,
      price: data.hargaMenu,
      jenis: data.jenisMenu,
    };
    setKalimat('Tambah');
    dispatch(tambahItem(newItem));
    pindahPage.navigate('Home');
  } else {
    dispatch(
      update(route.params.key, data.namaMenu, data.hargaMenu, data.jenisMenu),
    );
    setKalimat('Update');
    navigation.navigate('Home');
  }
  resetForm();
};

// button di modal hapus di item pada saat tekan tahan lama
export const ya = (
  semua,
  dispatch,
  hapusSemua,
  hideDialog,
  close,
  hapusItem,
  setSemua,
) => {
  if (semua) {
    dispatch(hapusSemua());
    hideDialog();
    close(false);
  } else {
    dispatch(hapusItem(itemHapus.key));
    hideDialog();
    close(false);
  }
  setSemua(false);
};
export const tidak = (hideDialog, setSemua) => {
  hideDialog();
  setSemua(false);
};

// select di laporan
export const selectLaporan = [
  {label: 'Satu Hari Ini', value: 'hariIni', key: '1'},
  {label: '7 Minggu Terakhir', value: 'seminggu', key: '2'},
  {label: 'Sebulan Terakhir', value: 'sebualn', key: '3'},
  {label: 'Setahun ini', value: 'setahun', key: '4'},
];

// managing sort berdasarkan waktu
const sekarang = new Date(Date.now() - 1 * 24 * 60 * 60 * 1000);
const seminggu = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
const sebulan = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
const setahun = new Date(Date.now() - 365 * 24 * 60 * 60 * 1000);

export const changePicker = (kode, value, dispatch, laporanUrut) => {
  if (kode == 'hariIni') {
    dispatch(laporanUrut(sekarang));
  } else if (kode == 'seminggu') {
    dispatch(laporanUrut(seminggu));
  } else if (kode == 'sebulan') {
    dispatch(laporanUrut(sebulan));
  } else if (kode == 'setahun') {
    dispatch(laporanUrut(setahun));
  }
};

// alert 2 button untuk login
const createTwoButtonAlert = (code) => {
  Alert.alert(
    '',
    code == 'auth/wrong-password' ? 'Password Salah' : 'Akun tidak terdaftar',
    [{text: 'OK', onPress: () => console.log('OK Pressed')}],
    {cancelable: false},
  );
};
const manyRequest = (code) => {
  Alert.alert(
    '',
    'Silahkan coba lagi nanti. ',
    [{text: 'OK', onPress: () => console.log('OK Pressed')}],
    {cancelable: false},
  );
};

// submit button login func
// submit
export const submit = (value) => {
  auth()
    .signInWithEmailAndPassword(value.email, value.password)
    .then(() => {
      console.log('User account created & signed in!');
    })
    .catch((error) => {
      switch (error.code) {
        case 'auth/wrong-password':
          createTwoButtonAlert(error.code);
          break;
        case 'auth/user-not-found':
          createTwoButtonAlert(error.code);
          break;
        case 'auth/too-many-requests':
      }
      console.log(error);
    });
};

//  // validation schema login
export const validationSchemas = yup.object().shape({
  email: yup.string().email('Invalid Email').required('Required'),
  password: yup
    .string()
    .required('Required.')
    .min(8, 'Password minimal terdiri dari 8 karakter')
    .matches(/[a-zA-Z]/, 'Harus ada tulisan latin'),
});

export const validationSchemasRegis = yup.object().shape({
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

// alert di registration kalo emailnya sudah terdaftar
// alert error
const alertEmailSudahAda = () =>
  Alert.alert(
    '',
    'EMAIL SUDAH TERDAFTAR, GUNAKAN AKUN LAIN',
    [{text: 'OK', onPress: () => console.log('OK Pressed')}],
    {cancelable: false},
  );
//   submit di registration
export const submitRegis = (value) => {
  auth()
    .createUserWithEmailAndPassword(value.email, value.password)
    .then(() => {
      console.log('success');
    })
    .catch((error) => {
      switch (error.code) {
        case 'auth/email-already-in-use':
          alertEmailSudahAda();
          break;
      }
    });
};
