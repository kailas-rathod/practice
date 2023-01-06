import {View, Text} from 'react-native';
import React from 'react';
import Home from './src/screens/home';
let x = '100';
let y = 100;

const App = () => {
  const newss = () => {
    console.log('newff', newss);
  };
  const newssq = () => {
    console.log('newff', newssq);
  };
  return (
    <View
      style={{
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
      }}>
      <Home />
      {/* <Text>{x === y ? 'yes' : 'no'}</Text> */}
    </View>
  );
};

export default App;
