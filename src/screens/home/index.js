import React, {Component} from 'react';
import {Button, View, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as questionsActions from '../../redux/actions/questionsActions';
import WheelOfFortune from 'react-native-wheel-of-fortune';
import Slider from '@react-native-community/slider';
import Play from '../../components/svg/play';

const rewards = ['9', '15', '18', '19', '20', '23'];

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      category: '9',
      difficulty: 'easy',
    };
  }

  onChangeWheelOfFortune = (value, index) => {
    this.setState({category: value});
  };

  onChangeSlider = value => {
    switch (true) {
      case value >= 0 && value <= 33:
        this.setState({difficulty: 'easy'});
        break;
      case value > 33 && value <= 66:
        this.setState({difficulty: 'medium'});
        break;
      case value > 66 && value <= 100:
        this.setState({difficulty: 'hard'});
        break;
    }
  };

  onPressPlay = () => {
    this.props.actions.getQuestions(this.state.category, this.state.difficulty);
    this.props.navigation.navigate('Question');
  };
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <WheelOfFortune
          onRef={ref => (this.child = ref)}
          rewards={rewards}
          knobSize={20}
          borderWidth={3}
          borderColor={'#FFF'}
          winner={Math.floor(Math.random() * 6)}
          innerRadius={50}
          backgroundColor={'#c0392b'}
          getWinner={(value, index) =>
            this.onChangeWheelOfFortune(value, index)
          }
        />
        <Text>{this.state.difficulty}</Text>
        <Slider
          style={{width: 200, height: 40}}
          minimumValue={0}
          maximumValue={100}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
          onValueChange={value => this.onChangeSlider(value)}
        />
        <TouchableOpacity style={{flex: 1}} onPress={() => this.onPressPlay()}>
          <Play />
        </TouchableOpacity>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    questions: state.getQuestionsReducer,
    currentQuestion: state.changeQuestionReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getQuestions: bindActionCreators(questionsActions.getQuestions, dispatch),
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
