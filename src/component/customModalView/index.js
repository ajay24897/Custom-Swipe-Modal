import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Animated, {
  SlideInDown,
  SlideInLeft,
  SlideInRight,
  SlideInUp,
} from 'react-native-reanimated';
import cat from '../../images/empty-screen-image.png';
import Cards from '../../images/cards.png';
import {style} from './styles';
import {MODAL_TYPE} from '../constant';

function CustomModalView({modalState, setModalState}) {
  return (
    modalState.open && (
      <View style={style.swipeContainer}>
        {modalState.type === MODAL_TYPE.LEFT && (
          <Animated.View entering={SlideInRight} exiting={SlideInLeft}>
            <View style={style.rightModal}>
              <Image source={cat} style={style.image} />
              <Text style={style.text}>It's too quite here today</Text>
            </View>
          </Animated.View>
        )}
        {modalState.type === MODAL_TYPE.RIGHT && (
          <Animated.View entering={SlideInLeft}>
            <View style={style.leftModal}>
              <Image source={Cards} style={style.image} />
              <Text style={style.text}>No hand history available</Text>
            </View>
          </Animated.View>
        )}
        {modalState.type === MODAL_TYPE.TOP && (
          <Animated.View entering={SlideInUp} exiting={SlideInUp}>
            <View
              style={[
                style.topModal,
                style.roundedBottomRadius,
                style.flexCenter,
              ]}>
              <Text style={style.text}>Play, Win and Enjoy</Text>
            </View>
          </Animated.View>
        )}
        {modalState.type === MODAL_TYPE.BOTOOM && (
          <Animated.View entering={SlideInDown} exiting={SlideInDown}>
            <View
              style={[
                style.downModal,
                style.flexCenter,
                style.roundedTopRadius,
              ]}>
              <View>
                <Text style={[style.text]}>500/1000 (HOLD'EM)</Text>
                <Text style={[style.text]}>Balance: 4.63K</Text>
                <Text style={[style.text]}>Insufficient balance vailable</Text>
              </View>
              <TouchableOpacity style={style.addCashButton}>
                <Text style={[style.text, style.addCashText]}>Add Cash</Text>
              </TouchableOpacity>
            </View>
          </Animated.View>
        )}
      </View>
    )
  );
}

export default CustomModalView;
