import React, { useRef, useEffect } from 'react';
import {
  ImageBackground,
  Animated,

} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Logo from '../assets/Logo.png';
import Backg from '../assets/back.png';

const Splash = ({ navigation }) => {
  setTimeout(() => {
    navigation.replace('Home');
  }, 3000);
  return (
    <Animated.View style={{ flex: 1 }}>
      <ImageBackground
        source={Backg}
        resizeMode="cover"
        style={{
          flex: 1,
          justifyContent: 'center',
        }}>
        <Animated.View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Animated.Image
            source={Logo}
            style={{
              flex: 1,
              width: '70%',
              resizeMode: 'contain',
              transform: [{ translateX: 0 }, { translateY: 0 }],
            }}></Animated.Image>
        </Animated.View>
      </ImageBackground>
    </Animated.View>
  );
};

export default Splash;
