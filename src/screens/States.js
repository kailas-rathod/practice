import {Text, View} from 'react-native';
import React, {Component} from 'react';

export class States extends Component {
  state = {
    myState: 'kailas rathod',
    yes: 'yes please',
    no: 'no please',
  };
  upadateState = () => this.setState({myState: 'this state is updated'});
  noplease = () => this.setState({no: "can't update"});
  yesplease = () => this.setState({yes: 'can update'});
  render() {
    return (
      <View style={{marginTop: '10%'}}>
        <Text style={{marginTop: '10%'}} onPress={this.upadateState}>
          {this.state.myState}
        </Text>
        <Text style={{marginTop: '10%'}} onPress={this.noplease}>
          {this.state.no}
        </Text>
        <Text style={{marginTop: '10%'}} onPress={this.yesplease}>
          {this.state.yes}
        </Text>
      </View>
    );
  }
}

export default States;
