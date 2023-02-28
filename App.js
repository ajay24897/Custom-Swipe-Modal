import React, {useState} from 'react';
import {StyleSheet, ImageBackground} from 'react-native';

import tableImage from './src/images/table.jpeg';
import {SwipeCapture} from './src/component/swipwCapture';
import CustomModalView from './src/component/customModalView';
import {MODAL_TYPE} from './src/component/constant';

const App = () => {
  const [modalState, setModalState] = useState({type: '', open: false});

  // Support closing on sliding in the direction of opening.

  const showLeftModal = () => {
    if (modalState.open && modalState.type === MODAL_TYPE.LEFT) {
      setModalState({type: '', open: false});
    } else if (modalState.type === '') {
      setModalState({type: MODAL_TYPE.LEFT, open: true});
    }
  };

  const showRightModal = () => {
    if (modalState.open && modalState.type === MODAL_TYPE.RIGHT) {
      setModalState({type: '', open: false});
    } else if (modalState.type === '') {
      setModalState({type: MODAL_TYPE.RIGHT, open: true});
    }
  };

  const showBottomModal = () => {
    if (modalState.open && modalState.type === MODAL_TYPE.BOTOOM) {
      setModalState({type: '', open: false});
    } else if (modalState.type === '') {
      setModalState({type: MODAL_TYPE.BOTOOM, open: true});
    }
  };

  const showTopModal = () => {
    if (modalState.open && modalState.type === MODAL_TYPE.TOP) {
      setModalState({type: '', open: false});
    } else if (modalState.type === '') {
      setModalState({type: MODAL_TYPE.TOP, open: true});
    }
  };

  return (
    <ImageBackground source={tableImage} style={style.backgroundImage}>
      <SwipeCapture
        onSwipeLeft={showLeftModal}
        onSwipeRight={showRightModal}
        onSwipeDown={showTopModal}
        onSwipeUp={showBottomModal}
        style={style.swipeContainer}>
        <CustomModalView
          modalState={modalState}
          setModalState={setModalState}
        />
      </SwipeCapture>
    </ImageBackground>
  );
};

export default App;

let style = StyleSheet.create({
  swipeContainer: {
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  backgroundImage: {
    flex: 1,
  },
});
