import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as questionsActions from '../../redux/actions/questionsActions';
export class Correct extends Component {
  control = () => {
    if (this.props.currentQuestion < 9) {
      this.props.navigation.navigate('Question');
      this.props.actions.changeQuestion(this.props.currentQuestion + 1);
    } else {
      this.props.navigation.navigate('Win');
    }
  };

  render() {
    return (
      <TouchableOpacity onPress={() => this.control()}>
        <Text> Correct </Text>
      </TouchableOpacity>
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
      changeQuestion: bindActionCreators(
        questionsActions.changeQuestion,
        dispatch,
      ),
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Correct);
