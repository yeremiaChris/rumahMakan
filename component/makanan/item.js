import React, {useState, useEffect} from 'react';
import {
  Card,
  Title,
  Paragraph,
  IconButton,
  Button,
  Dialog,
  Portal,
} from 'react-native-paper';
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {convertToRupiah} from '../../shared/rupiah';

// accesing global state redux
import {useSelector, useDispatch} from 'react-redux';

function item({
  pilihPage,
  increment,
  decrement,
  orderColor,
  cancelOrder,
  params,
  nav,
}) {
  // dispatch hapus item
  const dispatch = useDispatch();
  // useEffect(() => {
  //   const data = firestore().collection('menu');
  // }, []);
  // accessing global state from redux
  const data = useSelector((state) => state);
  // delete button to display
  const [hapus, setHapus] = useState(false);

  // disable
  const [disable, setDisable] = useState(false);

  // modal dialog untuk delete
  const [visible, setVisible] = useState(false);

  const showDialog = () => {
    setVisible(true);
  };
  const hideDialog = () => setVisible(false);
  // modal dialog untuk update
  const [visibleDua, setVisibleDua] = useState(false);

  const showDialogDua = () => {
    setVisibleDua(true);
  };
  // hide for udpate
  const hideDialogDua = () => setVisibleDua(false);

  const hapusItem = (key) => {
    dispatch({type: 'hapusItem', key});
    hideDialog();
  };

  // dispatch hapus semua
  const hapusSemua = () => {
    dispatch({type: 'hapusSemua'});
    hideDialog();
  };
  // state untuk delete
  const [itemHapus, setItemHapus] = useState({});

  // state pengkondisian hapus semua dan item
  const [semua, setSemua] = useState(false);

  // key extractor
  const keyExtractor = (item) => item.key;

  // button di modal
  const ya = () => {
    semua ? hapusSemua() : hapusItem(itemHapus.key);
    setSemua(false);
  };
  const tidak = () => {
    hideDialog();
    setSemua(false);
  };

  // func delete semua
  const deleteSemua = () => {
    setSemua(true);
    showDialog();
  };

  // edit
  const [editMode, setEditMode] = useState(false);
  const edit = (key, name, jenis, price) => {
    dispatch({
      type: 'edit',
      key: item.key,
    });
    pilihPage.navigate('Update', {key, name, jenis, price});
  };

  // close dispaly button hapus dan edit
  const close = () => {
    setHapus(false);
    setDisable(false);
  };

  // render the item
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        disabled={disable}
        onLongPress={() => {
          setHapus(true);
          setDisable(true);
        }}>
        <Card style={styles.card}>
          {hapus ? (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <IconButton
                icon="delete"
                size={20}
                color="grey"
                onPress={() => {
                  setItemHapus({
                    item: item.name,
                    key: item.key,
                  });
                  showDialog();
                }}
              />
              <IconButton
                icon="pencil"
                size={20}
                color="grey"
                onPress={() => {
                  edit(item.key, item.name, item.jenis, item.price);
                }}
              />
            </View>
          ) : (
            <Text></Text>
          )}
          <Card.Content style={styles.contentCard}>
            <View>
              <View>
                <Title style={{fontSize: 18}}>{item.name}</Title>
                <Paragraph>{convertToRupiah(item.price)} </Paragraph>
              </View>
            </View>
            <View>
              <View style={styles.jumlah}>
                <IconButton
                  disabled={disable}
                  style={styles.iconButton}
                  icon="plus"
                  color="white"
                  size={15}
                  onPress={() => {
                    item.order === false ? increment(item.key) : null;
                  }}
                />
                <Text>{item.quantity}</Text>
                <IconButton
                  disabled={disable}
                  style={styles.iconButton}
                  icon="minus"
                  color="white"
                  size={15}
                  onPress={() => {
                    item.order === false ? decrement(item.key) : null;
                  }}
                />
              </View>
              <TouchableOpacity
                disabled={disable}
                activeOpacity={0.9}
                onPress={() => {
                  item.order === false
                    ? orderColor(
                        item.key,
                        item.quantity,
                        item.price,
                        item.quantity * item.price,
                        item.name,
                      )
                    : cancelOrder(item.key, item.quantity * item.price);
                }}>
                <View
                  style={[styles.addCard, {backgroundColor: item.orderColor}]}>
                  <Text style={styles.textAddCard}>{item.orderText}</Text>
                </View>
              </TouchableOpacity>
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      {hapus ? (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 10,
            paddingBottom: 0,
          }}>
          <TouchableOpacity activeOpacity={0.5} onPress={close}>
            <Text style={{color: 'orange', fontWeight: 'bold'}}>CLOSE</Text>
          </TouchableOpacity>
          <Button
            icon="delete"
            mode="contained"
            color="red"
            onPress={deleteSemua}>
            Delete All
          </Button>
        </View>
      ) : null}
      {data.item.length == 0 ? (
        <View style={{paddingLeft: 10, marginTop: 10}}>
          <Text style={{color: 'red'}}>
            Menu kosong. Silahkan tambahkan menu.
          </Text>
        </View>
      ) : (
        <FlatList
          removeClippedSubviews={true}
          contentContainerStyle={styles.cardWrap}
          data={data.item}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          maxToRenderPerBatch={3}
          windowSize={2}
        />
      )}

      <View>
        <Portal>
          <Dialog visible={visible} style={{backgroundColor: '#114444'}}>
            {semua ? (
              <Dialog.Title style={{color: 'white'}}>
                Hapus semuanya ?
              </Dialog.Title>
            ) : (
              <Dialog.Title style={{color: 'white'}}>
                Hapus menu {itemHapus.item} ?
              </Dialog.Title>
            )}
            <Dialog.Actions>
              <Button color="white" onPress={ya}>
                Ya
              </Button>
              <Button color="white" onPress={tidak}>
                Tidak
              </Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
      <View>
        <Portal>
          <Dialog visible={visibleDua} onDismiss={hideDialogDua}>
            <Dialog.Title>Update</Dialog.Title>
            <Dialog.Actions>
              <Button>Update</Button>
              <Button>Batal</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
    </View>
  );
}

export default React.memo(item);
const styles = StyleSheet.create({
  cardWrap: {
    padding: 10,
  },
  iconButton: {
    backgroundColor: '#b3bdbd',
  },
  textAddCard: {
    color: 'white',
  },
  card: {
    borderRadius: 0,
    elevation: 0,
    flexDirection: 'row',
    marginBottom: 10,
    borderColor: '#e5e8e9',
    borderWidth: 1,
  },
  contentCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  addCard: {
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
  },
  jumlah: {
    backgroundColor: '#f2f5f5',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 3,
    width: 150,
  },
  container: {
    height: 340,
  },
});
