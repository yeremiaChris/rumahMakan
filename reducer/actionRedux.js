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
  DISMISS,
  SUCCESS,
  FETCH_LAPORAN,
  TAMBAH_LAPORAN,
  FILTER,
} from './actionType';
import firestore from '@react-native-firebase/firestore';
import {useSelector} from 'react-redux';
import {useState} from 'react';
// action function fetch data
const db = firestore().collection('menu');
export const fetchMenu = () => {
  return (dispatch, getState) => {
    try {
      db.onSnapshot((doc) => {
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
        dispatch({
          type: FETCH_MENU,
          item: data,
          loading: false,
          button: false,
        });
      });
    } catch (error) {
      dispatch({type: ERROR, err: error});
    }
  };
};

// update data
export const update = (key, name, price, jenis, update) => {
  return (dispatch) => {
    db.doc(key)
      .update({
        name,
        price,
        jenis,
      })
      .then(() => {
        dispatch({type: UPDATE});
        dispatch({type: SUCCESS, kalimat: 'Update'});
      })
      .catch(() => {
        dispatch({type: ERROR});
      });
  };
};

// tambah jumlah atau quantity orderan
export const incrementOrder = (id) => {
  return {
    type: INCREMENT_ORDER,
    id,
  };
};

// mengurangi jumlah atau quantity orderan
export const decrementOrder = (id) => {
  return {
    type: DECREMENT_ORDER,
    id,
  };
};

// order menu
export const orderItem = (id) => {
  return {
    type: ORDER_ITEM,
    id,
  };
};

// cancel orderan menu
export const cancelOrderItem = (id) => {
  return {
    type: CANCEL_ORDER_ITEM,
    id,
  };
};

// mengurutkan berdasarkan jenis
export const urutMakan = (test) => {
  return {
    type: URUT_MAKAN,
    test,
  };
};

// mereset orderan
export const resetAction = () => {
  return {
    type: RESET,
  };
};

// tambah menu
export const tambahItem = (newItem, tambah) => {
  return (dispatch, getState) => {
    db.add({
      name: newItem.name,
      jenis: newItem.jenis,
      price: newItem.price,
    })
      .then(() => {
        dispatch({type: TAMBAH_ITEM});
        dispatch({type: SUCCESS, kalimat: 'Tambah'});
      })
      .catch((err) => {
        dispatch({type: ERROR});
      });
  };
};

// hapus item firestore
export const hapusItem = (key) => {
  return (dispatch) => {
    db.doc(key)
      .delete()
      .then(() => dispatch({type: HAPUS_ITEM, key: key}))
      .catch((err) => dispatch({type: ERROR, err: err}));
  };
};

// mengapus seluruh item
export const hapusSemua = () => {
  return (dispatch) => {
    db.get()
      .then((res) => {
        res._docs.forEach((element) => {
          element.ref.delete();
          dispatch({type: HAPUS_SEMUA});
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

// dismiss snackbar
export const dismiss = () => {
  return (dispatch) => {
    dispatch({type: DISMISS});
  };
};

// fetch data untuk di tampilkan di laporan component
const dbLaporan = firestore().collection('laporan');

export const fetchLaporan = () => {
  return (dispatch) => {
    dbLaporan.onSnapshot((doc) => {
      let list = [];
      doc._docs.forEach((element) => {
        if (element._exists) {
          const data = {
            nama: element.data().nama,
            jumlahBeli: element.data().jumlahBeli,
            totalHarga: element.data().totalHarga,
            item: element.data().item,
            key: element.id,
          };
          list.push(data);
        } else {
          null;
        }
      });
      dispatch({type: FETCH_LAPORAN, laporan: list});
    });
  };
};

// membuat laporan
export const addLaporan = (
  nama,
  jumlahBeli,
  totalHarga,
  item,
  uangBayar,
  kembalian,
) => {
  return (dispatch, getState) => {
    const date = new Date();
    try {
      dbLaporan
        .add({
          nama,
          jumlahBeli,
          totalHarga,
          item,
          uangBayar,
          kembalian,
          createAt: date,
          tanggal: date.toDateString(),
        })
        .then(() => {
          dispatch({type: TAMBAH_LAPORAN});
        })
        .catch(() => {
          dispatch({type: ERROR});
        });
    } catch (error) {
      dispatch({type: ERROR});
    }
  };
};

// urutkan hari ini

export const laporanUrut = (start) => {
  const end = new Date();
  const seminggu = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
  const sebulan = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
  const setahun = new Date(Date.now() - 365 * 24 * 60 * 60 * 1000);
  return (dispatch) => {
    dbLaporan
      .where('createAt', '>=', start)
      .where('createAt', '<=', end)
      .onSnapshot((doc) => {
        let list = [];
        doc._docs.forEach((element) => {
          if (element._exists) {
            const data = {
              nama: element.data().nama,
              jumlahBeli: element.data().jumlahBeli,
              totalHarga: element.data().totalHarga,
              item: element.data().item,
              key: element.id,
            };
            list.push(data);
          } else {
            null;
          }
        });
        dispatch({type: FETCH_LAPORAN, laporan: list});
      });
  };
};

export const tanggal = (start) => {
  return (dispatch) => {
    dbLaporan.where('tanggal', '==', start).onSnapshot((doc) => {
      let list = [];
      doc._docs.forEach((element) => {
        if (element._exists) {
          const data = {
            nama: element.data().nama,
            jumlahBeli: element.data().jumlahBeli,
            totalHarga: element.data().totalHarga,
            item: element.data().item,
            key: element.id,
          };
          list.push(data);
        } else {
          null;
        }
      });
      dispatch({type: FETCH_LAPORAN, laporan: list});
    });
  };
};

// filter
export const filter = (text) => {
  return (dispatch) => {
    dbLaporan.onSnapshot((doc) => {
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
      dispatch({
        type: FILTER,
        item: data,
        text: text,
      });
    });
  };
};
