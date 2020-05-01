import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as questionsActions from '../../redux/actions/questionsActions';
export class Wrong extends Component {
  control = () => {
    this.props.navigation.navigate('Home');
    this.props.actions.changeQuestion(0);
  };

  render() {
    return (
      <TouchableOpacity onPress={() => this.control()}>
        <Text> Wrong </Text>
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
)(Wrong);
