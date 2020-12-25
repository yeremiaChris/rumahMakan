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
  },
];
const initialValue = {
  item: makan,
};
export const reducer = (state = initialValue, action) => {
  switch (action.type) {
    case 'incrementOrder':
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
    case 'decrementOrder':
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
    case 'orderItem':
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
    case 'cancelOrderItem':
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
    case 'urutMakan':
      return [...state.item.sort((data) => data.jenis !== action.test)];
    case 'reset':
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
    case 'tambahItem':
      return {
        item: [action.newItem, ...state.item],
      };
    default:
      return state;
      break;
  }
};

export const store = createStore(reducer);
