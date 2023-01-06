import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
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
  useEffect(() => {
    Callprintdata();
  }, []);
  const printdata = (fistName, lastname) => {
    console.log(data.fistName + '  ' + data.lastname);
  };
  const Callprintdata = () => {
    printdata(data);
  };

  return (
    <View>
      <Text>home</Text>
    </View>
  );
};

export default home;
