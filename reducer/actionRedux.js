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
  FETCH_MENU,
  ERROR,
} from './actionType';
import firestore from '@react-native-firebase/firestore';
// action function
export const fetchMenu = () => {
  return (dispatch, getState) => {
    try {
      firestore()
        .collection('menu')
        .onSnapshot((doc) => {
          let data = [];
          doc._docs.forEach((items) => {
            const item = {
              key: items.id,
              name: items.data().name,
              price: items.data().price,
              quantity: 0,
              jenis: items.data().jenis,
              orderColor: 'orange',
              orderText: 'order',
              order: false,
            };
            data.push(item);
          });
          dispatch({type: FETCH_MENU, item: data, loading: false});
        });
    } catch (error) {
      dispatch({type: ERROR, err: error});
    }
  };
};

export const update = (key, name, price, jenis) => {
  return {
    type: UPDATE,
    key,
    name,
    price,
    jenis,
  };
};

export const incrementOrder = (id) => {
  return {
    type: INCREMENT_ORDER,
    id,
  };
};

export const decrementOrder = (id) => {
  return {
    type: DECREMENT_ORDER,
    id,
  };
};

export const orderItem = (id) => {
  return {
    type: ORDER_ITEM,
    id,
  };
};

export const cancelOrderItem = (id) => {
  return {
    type: CANCEL_ORDER_ITEM,
    id,
  };
};

export const urutMakan = (test) => {
  return {
    type: URUT_MAKAN,
    test,
  };
};

export const resetAction = () => {
  return {
    type: RESET,
  };
};

export const tambahItem = (newItem) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    firestore()
      .collection('menu')
      .add({
        name: newItem.name,
        jenis: newItem.jenis,
        price: newItem.price,
      })
      .then(() => {
        dispatch({type: TAMBAH_ITEM});
      })
      .catch((err) => {
        dispatch({type: ERROR});
      });
    // asyn call to database
    // firestore
    //   .collection('menu')
    //   .add({
    //     ...newItem,
    //     test: 'test',
    //   })
    //   .then(() => {
    //     dispatch({type: TAMBAH_ITEM, newItem});
    //   })
    //   .catch((err) => {
    //     dispatch({type: ERROR, err});
    //   });
  };
};
// export const tambahItem = (newItem) => {
//   return {
//     type: TAMBAH_ITEM,
//     newItem,
//   };
// };

export const hapusItem = (key) => {
  return {
    type: HAPUS_ITEM,
    key,
  };
};

export const hapusSemua = () => {
  return {
    type: HAPUS_SEMUA,
  };
};
