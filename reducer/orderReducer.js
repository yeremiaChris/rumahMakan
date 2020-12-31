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
} from './actionType';
// reducer
import {createStore} from 'redux';
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
  item: makan,
};

// nama dan action untuk update
// kalo nggak di buat ada error di async function
export const reducer = (state = initialValue, action) => {
  switch (action.type) {
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
      return {
        item: [action.newItem, ...state.item],
      };
      break;
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

export const store = createStore(reducer);
