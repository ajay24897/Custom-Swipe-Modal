import React from 'react';
import {View, PanResponder} from 'react-native';
import style from './styles';

const THRESHOLD = 100;

export const SwipeCapture = ({
  children,
  onSwipeLeft,
  onSwipeRight,
  onSwipeDown,
  onSwipeUp,
}) => {
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: (e, _gestureState) => true,
    onPanResponderRelease: (e, gestureState) => {
      const {dx, dy} = gestureState;
      // dx is for handling horizontal swipe
      if (dx >= THRESHOLD) {
        onSwipeRight();
      }
      if (dx < -THRESHOLD) {
        onSwipeLeft();
      }

      // dy is for handling verticle swipe
      if (dy >= THRESHOLD) {
        onSwipeDown();
      }
      if (dy < -THRESHOLD) {
        onSwipeUp();
      }
    },
  });

  return (
    <View {...panResponder.panHandlers} style={style.wrapper}>
      {children}
    </View>
  );
};
