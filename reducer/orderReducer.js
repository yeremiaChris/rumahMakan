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
} from './actionType';

import RNFirebase from '@react-native-firebase/firestore';
import {firebase, firestore} from '@react-native-firebase/firestore';
// reducer
import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import thunk from 'redux-thunk';

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

// dummy data
const makan = [
  {
    name: 'Nasi Goreng',
    price: 10000,
    key: '1',
    quantity: 0,
    jenis: 'Makanan',
    orderColor: 'orange',
    orderText: 'Order',
    order: false,
    edit: false,
  },
  {
    name: 'Mie Goreng',
    price: 5000,
    key: '2',
    quantity: 0,
    jenis: 'Makanan',
    orderColor: 'orange',
    orderText: 'Order',
    order: false,
    edit: false,
  },
  {
    name: 'Geprek',
    price: 8000,
    key: '3',
    quantity: 0,
    jenis: 'Makanan',
    orderColor: 'orange',
    orderText: 'Order',
    order: false,
    edit: false,
  },
  {
    name: 'Ayam Penyet Bakar',
    price: 12000,
    key: '4',
    quantity: 0,
    jenis: 'Makanan',
    orderColor: 'orange',
    orderText: 'Order',
    order: false,
    edit: false,
  },
  {
    name: 'Kopi Panas',
    price: 4000,
    key: '5',
    quantity: 0,
    jenis: 'Minuman',
    orderColor: 'orange',
    orderText: 'Order',
    order: false,
    edit: false,
  },
  {
    name: 'Teh Panas',
    price: 3000,
    key: '6',
    quantity: 0,
    jenis: 'Minuman',
    orderColor: 'orange',
    orderText: 'Order',
    order: false,
    edit: false,
  },
  {
    name: 'Americano',
    price: 15000,
    key: '7',
    quantity: 0,
    jenis: 'Minuman',
    orderColor: 'orange',
    orderText: 'Order',
    order: false,
    edit: false,
  },
  {
    name: 'Es Jeruk',
    price: 5000,
    key: '8',
    quantity: 0,
    jenis: 'Minuman',
    orderColor: 'orange',
    orderText: 'Order',
    order: false,
    edit: false,
  },
];
const initialValue = {
  item: [],
  loading: true,
};

// nama dan action untuk update
// kalo nggak di buat ada error di async function
export const reducer = (state = initialValue, action) => {
  switch (action.type) {
    case FETCH_MENU:
      return {
        item: action.item,
        loading: action.loading,
      };
    case INCREMENT_ORDER:
      return {
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
        item: [...state.item.sort((data) => data.jenis !== action.test)],
      };
      break;
    case RESET:
      return {
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
      return state;
      // return {
      //   item: [action.newItem, ...state.item],
      // };
      break;
    case ERROR:
      console.log('error', action.err);
      return state;
    case HAPUS_ITEM:
      return {
        item: [...state.item.filter((item) => item.key != action.key)],
      };
      break;
    case HAPUS_SEMUA:
      return {
        item: [],
      };
      break;
    case UPDATE:
      return {
        item: [
          ...state.item.map((data) =>
            data.key === action.key
              ? {
                  ...data,
                  name: action.name,
                  price: action.price,
                  jenis: action.jenis,
                }
              : data,
          ),
        ],
      };

    default:
      return state;
      break;
  }
};

const reactNativeFirebaseConfig = {
  debug: true,
};

// apply middleware berguna untuk kita bisa berinteraksi dengan database atau asyn func di actionya kita return function yang biasanya adalah object
const rootReducer = combineReducers({
  project: reducer,
});

// export const store = createStore(
//   rootReducer,
//   compose(
//     applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
//     reduxFirestore(reactNativeFirebaseConfig),
//   ),
// );
export const store = createStore(
  rootReducer,
  applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
);
// export const rrfProps = {
//   firebase: RNFirebase,
//   dispatch: store.dispatch,
// };
