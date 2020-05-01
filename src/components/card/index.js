import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {shuffledAnswers: []};
  }
  componentDidMount() {
    console.log('componentDidMount');
    this.setupAnswers();
  }

  componentDidUpdate(prevProps) {
    if (this.props.currentQuestion !== prevProps.currentQuestion) {
      this.setupAnswers();
    }
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');

    this.setState({
      shuffledAnswers: [],
    });
  }

  setupAnswers = () => {
    let answers = this.props.questions[this.props.currentQuestion]
      .incorrect_answers;
    answers.push(
      this.props.questions[this.props.currentQuestion].correct_answer,
    );
    answers.sort(() => Math.random() - 0.5);
    this.setState({
      shuffledAnswers: answers,
    });
    answers = [];
    console.log('answers', answers);
  };

  control(answer) {
    if (
      answer === this.props.questions[this.props.currentQuestion].correct_answer
    ) {
      this.props.navigation.navigate('Correct');
    } else {
      this.props.navigation.navigate('Wrong');
    }
  }

  render() {
    console.log(this.props);
    console.log(this.state);

    return (
      <View>
        <Text>{this.props.currentQuestion}</Text>
        <Text>{this.props.questions[this.props.currentQuestion].question}</Text>
        <Text>
          {this.props.questions[this.props.currentQuestion].correct_answer}
        </Text>
        <Text>---------------</Text>
        <TouchableOpacity
          onPress={() => this.control(this.state.shuffledAnswers[0])}>
          <Text>{this.state.shuffledAnswers[0]}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.control(this.state.shuffledAnswers[1])}>
          <Text>{this.state.shuffledAnswers[1]}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.control(this.state.shuffledAnswers[2])}>
          <Text>{this.state.shuffledAnswers[2]}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.control(this.state.shuffledAnswers[3])}>
          <Text>{this.state.shuffledAnswers[3]}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Card;
