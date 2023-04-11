import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './components/screen/SplashScreen';
import HomeScreen from './components/screen/HomeScreen';
import QuizMenuScreen from './components/screen/QuizMenuScreen';
import QuizPercepatanScreen from './components/screen/QuizPercepatanScreen';
import QuizKecepatanScreen from './components/screen/QuizKecepatanScreen';
import QuizWaktuScreen from './components/screen/QuizWaktuScreen';
import AnswerScreen from './components/screen/AnswerScreen';
import ScoreScreen from './components/screen/ScoreScreen';

const Stack = createNativeStackNavigator();
const App = ()=>{
  return (
          <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}} >
              <Stack.Screen name="Splash" component={SplashScreen} />
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="QuizMenu" component={QuizMenuScreen} />
              <Stack.Screen name="Answer" component={AnswerScreen} />
              <Stack.Screen name="QuizPercepatan" component={QuizPercepatanScreen} />
              <Stack.Screen name="QuizKecepatan" component={QuizKecepatanScreen} />
              <Stack.Screen name="QuizWaktu" component={QuizWaktuScreen} />
              <Stack.Screen name="Score" component={ScoreScreen} />
            </Stack.Navigator>
          </NavigationContainer>
  );
}

export default App
