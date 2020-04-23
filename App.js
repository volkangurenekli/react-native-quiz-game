import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import Correct from './src/screens/correct';
import Home from './src/screens/home';
import Question from './src/screens/question';
import Timeisup from './src/screens/timeisup';
import Win from './src/screens/win';
import Wrong from './src/screens/wrong';
import configureStore from './src/redux/reducers/configureStore';
const store = configureStore();
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Correct" component={Correct} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Question" component={Question} />
          <Stack.Screen name="Timeisup" component={Timeisup} />
          <Stack.Screen name="Win" component={Win} />
          <Stack.Screen name="Wrong" component={Wrong} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}

export default App;
