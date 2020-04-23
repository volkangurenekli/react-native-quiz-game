import React, {Component} from 'react';
import {Button, View, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as questionsActions from '../../redux/actions/questionsActions';
import WheelOfFortune from 'react-native-wheel-of-fortune';
import Slider from '@react-native-community/slider';
import Play from '../../components/svg/play';

const rewards = ['9', '15', '18', '19', '20', '23'];

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {value: 0};
  }
  componentDidMount() {
    console.log(this.props);
  }
  onChangeWheelOfFortune = (value, index) => {
    console.log('VOLKAN: Home -> onChangeWheelOfFortune -> index', index);
    console.log('VOLKAN: Home -> onChangeWheelOfFortune -> value', value);
  };

  onChangeSlider = value => {
    console.log('VOLKAN: Home -> onChangeSlider -> value', value);
  };

  onPressPlay = () => {
    console.log('VOLKAN: Home -> onPressButton -> onPressButton');
    this.props.actions.getQuestions('15', 'easy');
  };
  render() {
    console.log(this.state.value);
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
        <Text>{this.state.value}</Text>
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
