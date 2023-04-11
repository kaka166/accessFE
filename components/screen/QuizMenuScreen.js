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

import { useFonts } from 'expo-font';

const { width } = Dimensions.get('window');
const previewCount = 3;
const itemWidth = width / (previewCount + 0.5);

const QuizMenu = ({ navigation }) => {
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
          marginHorizontal: 50,
          backgroundColor: '#F2DFFB',
          height: '10%',
          borderRadius: 15,
        }}>
        <View
          style={{
            margin: '8%',
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
            Kuis Nama
          </Text>
        </View>
      </View>
      <View>
        <View
          style={{
            marginVertical: 0,
            marginHorizontal: 20,
            backgroundColor: '#CCE7A4',
            height: itemWidth + 350,
            borderRadius: 15,
          }}>
          <View
            style={{
              margin: '8%',
              marginBottom: 0,
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
              Kuis Percepatan Waktu
            </Text>
          </View>
          <View
            style={{
              margin: '8%',
              marginTop: 15,
              marginBottom: 0,
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
              Kuis Waktu
            </Text>
          </View>
          <View
            style={{
              margin: '8%',
              marginTop: 15,
              marginBottom: 0,
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
              Kuis Kecepatan
            </Text>
          </View>
          <View
            style={{
              margin: '8%',
              marginTop: 15,
              marginBottom: 0,
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
              Kuis Jarak
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          marginVertical: 60,

          marginLeft: '25%',
          backgroundColor: '#86CC86',
          height: '10%',
          borderRadius: 15,
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
        }}>
        <View
          style={{
            margin: '8%',
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
            Home
          </Text>
        </View>
      </View>
    </View>
  );
};

export default QuizMenu;
