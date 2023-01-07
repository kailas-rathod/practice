import {View, Text, TextInput} from 'react-native';
import React, {useEffect, useState} from 'react';
// const person = {
//   fistName: 'kailas',
//   lastname: 'rathod',
//   id: 9898,
//   fullName: function () {
//     return this.fistName;
//   },
// };
// let x = person.fullName();
// console.log(x);
const data = {
  fistName: 'kailas',
  lastname: 26,
};
const home = () => {
  const [text, setText] = useState('');
  // useEffect(() => {
  //   Callprintdata();
  // }, []);
  // const printdata = (fistName, lastname) => {
  //   console.log(data.fistName + '  ' + data.lastname);
  // };
  // const Callprintdata = () => {
  //   printdata(data);
  // };

  return (
    <View>
      <TextInput
        style={{padding: 5, borderWidth: 1, width: '100%'}}
        placeholder="type of name"
        onChangeText={text => setText(text)}
        defaultValue={text}
      />

      {/* <Text style={{padding: 10, fontSize: 42}}>
        {text
          .split(' ')
          .map(word => word && '🍕')
          .join(' ')}
      </Text> */}
      <Text style={{padding: 10, fontSize: 42}}>
        {text
          .split(' ')
          .map(word => word && 'kailas')
          .join(' ')}
      </Text>
    </View>
  );
};

export default home;
