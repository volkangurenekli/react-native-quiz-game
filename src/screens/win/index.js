import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

class Win extends Component {
  control = () => {
    this.props.navigation.navigate('Home');
  };

  render() {
    return (
      <TouchableOpacity onPress={() => this.control()}>
        <Text> Win </Text>
      </TouchableOpacity>
    );
  }
}

export default Win;
