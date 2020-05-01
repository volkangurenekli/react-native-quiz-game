/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as questionsActions from '../../redux/actions/questionsActions';
// import Header from '../../components/header';
// import XCard from '../../components/card';
import {Image} from 'react-native';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Left,
  Body,
  Right,
} from 'native-base';
import CountDown from 'react-native-countdown-component';

export class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {shuffledAnswers: []};
  }

  // componentDidMount() {
  //   console.log('componentDidMount');
  //   this.setupAnswers();
  // }

  componentDidUpdate(prevProps) {
    if (this.props.currentQuestion !== prevProps.currentQuestion) {
      this.setupAnswers();
    }
    if (this.props.questions[0] !== prevProps.questions[0]) {
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
    return this.props.questions && this.props.questions.length === 10
      ? this.renderQuestions()
      : this.renderEmpty();
  }

  renderEmpty() {
    return <View />;
  }

  renderQuestions() {
    console.log(this.props);
    const url = `https://img.icons8.com/plasticine/50/000000/${this.props
      .currentQuestion + 1}.png`;

    return (
      // <Card style={{flex: 1}}>
      <Card>
        <CardItem>
          <Left>
            <Image
              style={{
                width: 77,
                height: 77,
              }}
              source={{
                uri: url,
              }}
            />
          </Left>
          <Body>
            <Text>500</Text>
            <Text>points</Text>
          </Body>
          <Right>
            <CountDown
              until={59}
              size={50}
              onFinish={() => alert('Finished')}
              digitStyle={{backgroundColor: '#FFF'}}
              digitTxtStyle={{color: '#1CC625'}}
              timeToShow={['S']}
              timeLabels={{s: ''}}
            />
            <Body />
          </Right>
        </CardItem>
        <CardItem>
          <Body>
            <View>
              <Text>
                {this.props.questions[this.props.currentQuestion].question}
              </Text>

              <Button
                iconLeft
                bordered
                style={{
                  marginBottom: 20,
                  marginLeft: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onPress={() => this.control(this.state.shuffledAnswers[0])}>
                <Text>{this.state.shuffledAnswers[0]}</Text>
              </Button>
              <Button
                iconLeft
                bordered
                style={{
                  marginBottom: 20,
                  marginLeft: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onPress={() => this.control(this.state.shuffledAnswers[1])}>
                <Text>{this.state.shuffledAnswers[1]}</Text>
              </Button>
              <Button
                iconLeft
                bordered
                style={{
                  marginBottom: 20,
                  marginLeft: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onPress={() => this.control(this.state.shuffledAnswers[2])}>
                <Text>{this.state.shuffledAnswers[2]}</Text>
              </Button>
              <Button
                iconLeft
                bordered
                style={{
                  marginBottom: 20,
                  marginLeft: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onPress={() => this.control(this.state.shuffledAnswers[3])}>
                <Text>{this.state.shuffledAnswers[3]}</Text>
              </Button>
            </View>
          </Body>
        </CardItem>
        <CardItem>
          <Left>
            <Button transparent textStyle={{color: '#87838B'}}>
              <Text>
                {
                  this.props.questions[this.props.currentQuestion]
                    .correct_answer
                }
              </Text>
            </Button>
          </Left>
        </CardItem>
      </Card>
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
)(Question);
