import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  FlatList,
} from 'react-native';

import axios from 'axios';
import { Button, Icon } from '@rneui/themed';
import { useFonts } from 'expo-font';

const { width } = Dimensions.get('window');
const previewCount = 3;
const itemWidth = width / (previewCount + 0.5);

const Score = ({ route, navigation }) => {
    const { score } = route.params;

  let [fontsLoaded] = useFonts({
    'Poppins-Regular': require('../assets/font/Poppins-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  const handleRestartQuiz = () => {
    navigation.navigate('X');
  };

  return (
    <View
      style={{
        backgroundColor: '#FFF',
        flex: 1,
      }}>
      <View
        style={{
          alignSelf: 'center',
          marginVertical: 30,
          backgroundColor: '#DFEBFB',
          height: '75%',
          width: '85%',
          borderRadius: 15,
        }}>
        <View
        style={{
          margin: '8%',
          marginTop: 60,
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
            }}>
            Hasil Skor
          </Text>
        </View>

        <View
        style={{
          marginHorizontal: 30,
          height: 300,
          backgroundColor: '#FFFFFF',
          borderRadius: 15,
        }}>
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              fontWeight: 'Bold',
              fontSize: 16,
              margin: 5,
              marginVertical: '20%',
              textAlign: 'center',
            }}>
            Your score is: {score}
          </Text>
        </View>
        <Button
              title="Try Again"
              onPress={handleRestartQuiz}
              buttonStyle={{
                backgroundColor: 'rgba(244, 244, 244, 1)',
                borderRadius: 3,
              }}
              containerStyle={{
                height: 40,
                width: 125,
                marginLeft: '40%',
                marginVertical: 15,
                borderRadius: 15
              }}
              titleStyle={{ fontFamily: 'Poppins-Regular', fontWeight: 'Bold', fontSize: 16, marginHorizontal: 20, color: '#000000' }}
            />
      </View>
      
      <View
        style={{
            marginVertical: 30,
            marginRight: '25%',
            backgroundColor: '#86CC86',
            height: '10%',
            borderRadius: 15,
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
        }}>
        <Button
            title="Home"
            buttonStyle={{
            backgroundColor: 'rgba(244, 244, 244, 1)',
            borderRadius: 3,
            }}
            containerStyle={{
            height: 40,
            width: 125,
            marginLeft: '40%',
            marginVertical: 15,
            borderRadius: 15
            }}
            titleStyle={{ fontFamily: 'Poppins-Regular', fontWeight: 'Bold', fontSize: 16, marginHorizontal: 20, color: '#000000' }}
            onPress={() => navigation.navigate('Home')}
        />
        </View>
    </View>
  );
};

export default Score;