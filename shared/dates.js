// import React, {useState} from 'react';
// import {Platform} from 'react-native';
// import DateTimePicker from '@react-native-community/datetimepicker';
// export default function dates() {
//   // date
//   const [date, setDate] = useState(new Date(1598051730000));
//   const [mode, setMode] = useState('date');
//   const [show, setShow] = useState(false);

//   const onChange = (event, selectedDate) => {
//     const currentDate = selectedDate || date;
//     setDate(currentDate);
//   };

//   const showMode = (currentMode) => {
//     setShow(true);
//     setShow(Platform.OS === 'android');
//     setMode(currentMode);
//   };

//   const showDatepicker = () => {
//     showMode('date');
//   };

//   const showTimepicker = () => {
//     showMode('time');
//   };

//   return (
//     <DateTimePicker
//       testID="dateTimePicker"
//       value={date}
//       mode="date"
//       is24Hour={true}
//       display="default"
//       onChange={onChange}
//     />
//   );
// }
