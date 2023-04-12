import { useState, useEffect } from "react";
import {
  Text,
  View,
  Dimensions,
} from 'react-native';

import axios from "axios";
import useAxios from "axios-hooks"
import ScoreScreen from './ScoreScreen';
import { Button, Icon } from '@rneui/themed';
import { useFonts } from 'expo-font';

const { width } = Dimensions.get('window');
const previewCount = 3;
const itemWidth = width / (previewCount + 0.5);

const categoryId = 2;

const QuizPercepatan = ({ navigation }) => {
  const [quiz, setQuiz] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const url = `https://454b-140-213-166-183.ngrok-free.app/api/quiz/category/${categoryId}`;

  useEffect(() => {
    getAllQuiz();
  }, []);

  useEffect(() => {
    setScore(0);
  }, []);

  const getAllQuiz = () => {
    axios.get(url)
      .then((response) => {
        const allQuiz = response.data.data.slice(0, 5); // limit to 5 questions
  
        // add data to state
        setQuiz(allQuiz);
        setCurrentQuestion(0);
        console.log(response.data);
      })
      .catch(error => console.error(error));
  }

  const handleQuizComplete = () => {
    // Navigate to the score screen and pass the score as a parameter
    navigation.navigate('ScoreScreen', { score });
  }

  const nextQuestion = () => {
    const selectedAnswer = quiz[currentQuestion]?.selectedAnswer;
    const correctAnswer = quiz[currentQuestion]?.answer;
  
    // Check if the selected answer is correct or not
    if (selectedAnswer === correctAnswer) {
      setScore(score + 20);
    }
  
    // Update quiz state with the selected answer
    const updatedQuiz = [...quiz];
    updatedQuiz[currentQuestion] = {
      ...updatedQuiz[currentQuestion],
      selectedAnswer,
    };
    setQuiz(updatedQuiz);
  
    // Go to the next question
    if (currentQuestion < 4) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Handle quiz complete
      handleQuizComplete();
    }
  };
  
  const prevQuestion = () => {
    // Get the user's selected answer for the current question
    const selectedAnswer = quiz[currentQuestion]?.selectedAnswer;
    // Get the correct answer for the current question
    const correctAnswer = quiz[currentQuestion]?.answer;
  
    // Check if the user's selected answer was correct before going back
    if (selectedAnswer === correctAnswer) {
      // If the answer was correct, deduct 20 points from the score
      setScore(score - 20);
    }
  
    // Go to the previous question
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };
  

  let [fontsLoaded] = useFonts({
    'Poppins-Regular': require('../assets/font/Poppins-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View
      style={{
        backgroundColor: '#FFF',
        flex: 1,
      }}>
      <View
        style={{
          marginVertical: 20,
          marginHorizontal: 20,
          backgroundColor: '#F2DFFB',
          height: '30%',
          borderRadius: 15,
        }}>
        <View
          style={{
            margin: 15,
            marginTop: 30,
            height: 150,
            backgroundColor: '#FFFFFF',
            borderRadius: 15,
          }}>
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              fontWeight: 'Bold',
              fontSize: 16,
              margin: 5,
              textAlign: 'center',
            }}>{quiz[currentQuestion]?.question}
          </Text>
        </View>
      </View>
      <View>
        <View
          style={{
            marginVertical: 0,
            marginHorizontal: 20,
            backgroundColor: '#FFE6AD',
            height: itemWidth + 230,
            borderRadius: 15,
            alignItems: 'center'
          }}>
          <View style={{paddingTop: 20, paddingBottom: 20}}>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                fontWeight: 'Bold',
                fontSize: 20,
                marginTop: 10,
                textAlign: 'center',
                color: '#252525'
              }}>
              Kuis {currentQuestion + 1}/{5}
            </Text>
          </View>

          <Button
            title={quiz[currentQuestion]?.a}
            onPress={() => {
              // Set the selected answer for the current question
              setQuiz(prevQuiz => {
                const updatedQuiz = [...prevQuiz];
                updatedQuiz[currentQuestion].selectedAnswer = 'a';
                return updatedQuiz;
              });

              // Check if the selected answer is correct or not
              const selectedAnswer = 'a';
              const correctAnswer = quiz[currentQuestion]?.answer;
              if (selectedAnswer === correctAnswer) {
                setScore(score + 20);
              }
            }}
            buttonStyle={{
              backgroundColor: quiz[currentQuestion]?.selectedAnswer === 'a'
                ? quiz[currentQuestion]?.answer === 'a' ? 'green' : 'red'
                : 'rgba(198, 212, 230, 1)',
              borderRadius: 3,
            }}
            containerStyle={{
              height: 40,
              width: 250,
              marginHorizontal: 10,
              marginVertical: 10,
              borderRadius: 15,
            }}
            titleStyle={{ fontFamily: 'Poppins-Regular', fontWeight: 'Bold' }}
          />
          <Button
          title={quiz[currentQuestion]?.b}
          onPress={() => {
            // Set the selected answer for the current question
            setQuiz(prevQuiz => {
              const updatedQuiz = [...prevQuiz];
              updatedQuiz[currentQuestion].selectedAnswer = 'b';
              return updatedQuiz;
            });

            // Check if the selected answer is correct or not
            const selectedAnswer = 'b';
            const correctAnswer = quiz[currentQuestion]?.answer;
            if (selectedAnswer === correctAnswer) {
              setScore(score + 20);
            }
          }}
          buttonStyle={{
            backgroundColor: quiz[currentQuestion]?.selectedAnswer === 'b'
              ? quiz[currentQuestion]?.answer === 'b' ? 'green' : 'red'
              : 'rgba(198, 212, 230, 1)',
            borderRadius: 3,
          }}
          containerStyle={{
            height: 40,
            width: 250,
            marginHorizontal: 10,
            marginVertical: 10,
            borderRadius: 15,
          }}
          titleStyle={{ fontFamily: 'Poppins-Regular', fontWeight: 'Bold' }}
        />
          <Button
            title={quiz[currentQuestion]?.c}
            onPress={() => {
              // Set the selected answer for the current question
              setQuiz(prevQuiz => {
                const updatedQuiz = [...prevQuiz];
                updatedQuiz[currentQuestion].selectedAnswer = 'c';
                return updatedQuiz;
              });

              // Check if the selected answer is correct or not
              const selectedAnswer = 'c';
              const correctAnswer = quiz[currentQuestion]?.answer;
              if (selectedAnswer === correctAnswer) {
                setScore(score + 20);
              }
            }}
            buttonStyle={{
              backgroundColor: quiz[currentQuestion]?.selectedAnswer === 'c'
                ? quiz[currentQuestion]?.answer === 'c' ? 'green' : 'red'
                : 'rgba(198, 212, 230, 1)',
              borderRadius: 3,
            }}
            containerStyle={{
              height: 40,
              width: 250,
              marginHorizontal: 10,
              marginVertical: 10,
              borderRadius: 15,
            }}
            titleStyle={{ fontFamily: 'Poppins-Regular', fontWeight: 'Bold' }}
          />

          <Button type="solid"
          buttonStyle={{
                backgroundColor: '#FAB37E',
                borderRadius: 3,
              }}
          containerStyle={{
                height: 40,
                width: 200,
                marginHorizontal: 10,
                marginVertical: 10,
                borderRadius: 15
              }}>
            Lihat Penjelasan
            <Icon name="visibility" color="white" style={{marginLeft: 10}} />
          </Button>
        </View>
      </View>

      <View
        style={{
          marginVertical: 30,
          backgroundColor: '#86CC86',
          height: '10%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderRadius: 15,
        }}>
        
        <Button
              title="Kembali"
              onPress={prevQuestion}
              disabled={currentQuestion === 0}
              buttonStyle={{
                backgroundColor: 'rgba(244, 244, 244, 1)',
                borderRadius: 3,
              }}
              containerStyle={{
                height: 40,
                width: 125,
                marginHorizontal: 20,
                marginVertical: 15,
                borderRadius: 15
              }}
              titleStyle={{ fontFamily: 'Poppins-Regular', fontWeight: 'Bold', fontSize: 16, marginHorizontal: 20, color: '#000000' }}
            />

        <Button
              title={currentQuestion === 4 ? 'Finish' : 'Next'}
              onPress={() => {
                if (currentQuestion === 4) {
                  navigation.navigate('Score', { score: score })
                } else {
                nextQuestion();
                }
              }}
              buttonStyle={{
                backgroundColor: 'rgba(244, 244, 244, 1)',
                borderRadius: 3,
              }}
              containerStyle={{
                height: 40,
                width: 125,
                marginHorizontal: 20,
                marginVertical: 15,
                borderRadius: 15
              }}
              titleStyle={{ fontFamily: 'Poppins-Regular', fontWeight: 'Bold', fontSize: 16, marginHorizontal: 20, color: '#000000' }}
            />

      </View>

    </View>
  );
};

export default QuizPercepatan;