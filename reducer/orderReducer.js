import {
  UPDATE,
  INCREMENT_ORDER,
  DECREMENT_ORDER,
  ORDER_ITEM,
  CANCEL_ORDER_ITEM,
  URUT_MAKAN,
  RESET,
  TAMBAH_ITEM,
  HAPUS_ITEM,
  HAPUS_SEMUA,
  ERROR,
  FETCH_MENU,
  DISMISS,
  SUCCESS,
  FETCH_LAPORAN,
  TAMBAH_LAPORAN,
  LAPORAN_URUT,
  FILTER,
} from './actionType';

import RNFirebase from '@react-native-firebase/firestore';
import {firebase, firestore} from '@react-native-firebase/firestore';
// reducer

import {combineReducers} from 'redux';

import {
  firestoreReducer,
  createFirestoreInstance,
  getFirestore,
  reduxFirestore,
} from 'redux-firestore';
import {
  reactReduxFirebase,
  getFirebase,
  firebaseReducer,
} from 'react-redux-firebase';
import {State} from 'react-native-gesture-handler';

const initialValue = {
  item: [],
  loading: true,
  button: true,
};
// kalo nggak di buat ada error di async function
const reducer = (state = initialValue, action) => {
  switch (action.type) {
    case FILTER:
      if (action.text) {
        return {
          ...state,
          item: [
            ...state.item.filter((item) => {
              const itemData = item.name
                ? item.name.toUpperCase()
                : ''.toUpperCase();
              const textData = action.text.toUpperCase();
              return itemData.indexOf(textData) > -1;
            }),
          ],
        };
      } else {
        return {
          ...state,
          item: action.item,
        };
      }
    case FETCH_MENU:
      return {
        ...state,
        item: action.item,
        loading: action.loading,
        button: action.button,
      };
    case INCREMENT_ORDER:
      return {
        ...state,
        item: [
          ...state.item.map((data) =>
            data.key === action.id && data.quantity >= 0
              ? {...data, quantity: data.quantity + 1}
              : data,
          ),
        ],
      };
      break;
    case DECREMENT_ORDER:
      return {
        ...state,
        item: [
          ...state.item.map((data) =>
            data.key === action.id && data.quantity > 0
              ? {...data, quantity: data.quantity - 1}
              : data,
          ),
        ],
      };
      break;
    case ORDER_ITEM:
      return {
        ...state,
        item: [
          ...state.item.map((data) =>
            data.key === action.id && data.quantity > 0
              ? {
                  ...data,
                  orderColor: '#114444',
                  orderText: 'Ordered',
                  order: true,
                }
              : data,
          ),
        ],
      };
      break;
    case CANCEL_ORDER_ITEM:
      return {
        ...state,
        item: [
          ...state.item.map((data) =>
            data.key === action.id && data.quantity > 0
              ? {
                  ...data,
                  orderColor: 'orange',
                  orderText: 'Order',
                  order: false,
                }
              : data,
          ),
        ],
      };
      break;
    case URUT_MAKAN:
      return {
        ...state,
        item: [...state.item.sort((data) => data.jenis !== action.test)],
      };
      break;
    case RESET:
      return {
        ...state,
        item: [
          ...state.item.map((data) => {
            return {
              ...data,
              orderColor: 'orange',
              orderText: 'Order',
              order: false,
              quantity: 0,
            };
          }),
        ],
      };
      break;
    case TAMBAH_ITEM:
      console.log('tambah', action.tambah);
      return state;
      break;
    case ERROR:
      console.log('error', action.err);
      return state;
    case HAPUS_ITEM:
      console.log('hapus', action.key);
      return state;
      break;
    case HAPUS_SEMUA:
      console.log('hapus semua');
      return state;
      break;
    case UPDATE:
      console.log('update');
      return state;
    default:
      return state;
      break;
  }
};

const initialValueDua = {
  success: false,
  kalimat: '',
};

const reducerDua = (state = initialValueDua, action) => {
  switch (action.type) {
    case SUCCESS:
      console.log('succcess');
      return {
        success: !state.success,
        kalimat: action.kalimat,
      };
    case DISMISS:
      console.log('dismis');
      return {
        ...state,
        success: false,
      };
    default:
      return state;
  }
};

// initial value untuk lapraon
const initialValueTiga = {
  laporan: [],
};

const reducerTiga = (state = initialValueTiga, action) => {
  switch (action.type) {
    case FETCH_LAPORAN:
      return {
        laporan: action.laporan,
      };
      break;
    case TAMBAH_LAPORAN:
      console.log('tambahLaporan');
      return state;
    case LAPORAN_URUT:
      return state;
    default:
      return state;
      break;
  }
};

export const rootReducer = combineReducers({
  project: reducer,
  projectDua: reducerDua,
  projectTiga: reducerTiga,
});
