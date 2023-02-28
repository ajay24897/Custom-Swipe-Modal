import {StyleSheet} from 'react-native';
export const style = StyleSheet.create({
  swipeContainer: {
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  image: {width: 200, height: 200},
  rightModal: {
    alignSelf: 'flex-end',
    width: '80%',
    height: '100%',
    backgroundColor: '#004953',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftModal: {
    alignSelf: 'flex-start',
    width: '80%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: '#004953',
  },
  topModal: {
    width: '100%',
    height: '60%',
    backgroundColor: '#004953',
  },
  downModal: {
    marginTop: '108%',
    width: '100%',
    height: '50%',
    backgroundColor: '#004953',
  },
  text: {
    color: '#fff',
    marginVertical: 20,
  },

  roundedTopRadius: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  roundedBottomRadius: {
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  flexCenter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addCashButton: {
    backgroundColor: '#228B22',
    paddingHorizontal: 40,
    borderRadius: 20,
  },
  addCashText: {fontSize: 16, fontWeight: 600},
});
