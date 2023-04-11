import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  FlatList,
} from 'react-native';

import Categories from '../config/Categories';
import Spacing from '../config/Spacing';

import { useFonts } from 'expo-font';

const { width } = Dimensions.get('window');
const previewCount = 3;
const itemWidth = width / (previewCount + 0.5);
const startScroll = (itemWidth * 3) / 4;

const Home = ({ navigation }) => {
  const cards = [
    { id: 1, image: require('../assets/categories/images/kuiskecepatan.png'), screen: 'QuizKecepatan' },
    { id: 2, image: require('../assets/categories/images/kuispercepatan.png'), screen: 'QuizPercepatan' },
    { id: 3, image: require('../assets/categories/images/kuiswaktu.png'), screen: 'QuizWaktu' },
  ];

  const flatlistRef = React.useRef();

  React.useEffect(() => {
    if (flatlistRef.current)
      flatlistRef.current.scrollToOffset({
        offset: startScroll,
        animated: false,
      });
  }, [flatlistRef]);

  const snapToOffsetsLikeGooglePlay = cards.map((x, i) => {
    return i * itemWidth + startScroll;
  });

  let [fontsLoaded] = useFonts({
    'Poppins-Regular': require('../assets/font/Poppins-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate(item.screen)}>
      <View style={styles.view}>
        <Image source={item.image} resizeMode="contain" style={styles.image} />
      </View>
    </TouchableOpacity>
  );

  return (
    <View
      style={{
        backgroundColor: '#FFF',
        flex: 1,
      }}>
      <View
        style={{
          marginVertical: 50,
          marginHorizontal: 20,
          backgroundColor: '#F2DFFB',
          height: '15%',
          borderRadius: 15,
        }}>
        <Text
          style={{
            fontFamily: 'Poppins-Regular',
            fontWeight: 'Bold',
            fontSize: 18,
            marginHorizontal: 20,
            marginTop: 20,
            textAlign: 'left',
          }}>
          Halo, Teman {'\n'}Ayo Belajar Percepatan!
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 20,
          width: '100%',
          alignItems: 'center',
        }}>
        <View style={{ width: '50%' }}>
          <Text
          style={{
              fontWeight: 'Medium',
              fontSize: 17,
              color: '#585a61',
            }}>
            Kategori
          </Text>
        </View>

        <View style={{ width: '50%', alignItems: 'flex-end' }}>
          <View
            style={{
              backgroundColor: '#D9D9D9',
              paddingHorizontal: 20,
              paddingVertical: 5,
              borderRadius: 15,
            }}>
            <Text
              style={{
                fontWeight: 'Medium',
                fontSize: 14,
                color: '#00000',
              }}>
              Jelajahi
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginVertical: Spacing * 2,
          flexDirection: 'row',
        }}
        showsHorizontalScrollIndicator={false}>
        {Categories.map((categories) => (
          <TouchableOpacity
            key={categories.id}
            style={{
              paddingTop: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View style={{ width: itemWidth, height: itemWidth - 25 }}>
              <Image
                source={categories.image}
                resizeMode="contain"
                style={{ width: '90%', height: '90%', marginLeft: '5%' }}
              />
            </View>
            <Text
              style={{
                textTransform: 'uppercase',
                fontSize: Spacing,
                marginTop: Spacing,
              }}>
              {categories.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 15,
          paddingBottom: 20,
          width: '100%',
          alignItems: 'center',
        }}>
        <View style={{ width: '50%' }}>
          <Text
            style={{
              fontWeight: 'Bold',
              fontSize: 18,
              color: '#585a61',
            }}>
            Top Kuiz
          </Text>
        </View>

        <View style={{ width: '50%', alignItems: 'flex-end' }}>
          <View
            style={{
              backgroundColor: '#D9D9D9',
              paddingHorizontal: 20,
              paddingVertical: 5,
              borderRadius: 15,
            }}>
            <Text
              style={{
                fontWeight: 'Medium',
                fontSize: 14,
                color: '#000000',
              }}>
              Jelajahi
            </Text>
          </View>
        </View>
      </View>

        <FlatList
        ref={flatlistRef}
        pagingEnabled={true}
        horizontal={true}
        decelerationRate={0}
        snapToOffsets={snapToOffsetsLikeGooglePlay}
        snapToAlignment={'center'}
        data={cards}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  view: {
    width: itemWidth + 20, //20 is margin left and right
    margin: 10,
    height: itemWidth + 60,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '75%',
    height: '75%',
    resizeMode: 'cover',
    borderRadius: 10,
  },
});
