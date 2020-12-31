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
// action function
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
  return {
    type: TAMBAH_ITEM,
    newItem,
  };
};

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
