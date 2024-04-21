import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import tw from 'twrnc';
import Colors from '../constants/Colors';

const ToggleButton = ({
	_isActive,
	_setIsActive,
}) => {
  const [isActive, setIsActive] = useState(_isActive);
  const translateX = useState(new Animated.Value(0))[0];

  const toggleButton = () => {
    Animated.timing(translateX, {
      toValue: isActive ? 0 : 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
	// delay the state change until the animation is complete
	setTimeout(() => {
	  setIsActive(!isActive);
	  _setIsActive(!isActive);
	}, 100);
  };

  const circleStyle = {
    transform: [
      {
        translateX: translateX.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 24],
        }),
      },
    ],
  };

  // update the circle position when the _isActive prop changes
  useEffect(() => {
    Animated.timing(translateX, {
      toValue: _isActive ? 1 : 0,
      duration: 100,
      useNativeDriver: true,
    }).start();
  }, [_isActive]);

  return (
    <TouchableOpacity onPress={toggleButton} activeOpacity={0.8}>
      <View style={[tw`w-15 h-9 px-1 bg-[${Colors.Alto}] rounded-full`, styles.container]}>
        <Animated.View style={[tw`w-7 h-7 bg-[${Colors.AlizarinCrimson}] rounded-full`, circleStyle]} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
});

export default ToggleButton;
