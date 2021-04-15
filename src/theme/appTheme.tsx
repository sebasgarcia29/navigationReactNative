import { StyleSheet } from 'react-native';

export const colors = {
  primary: '#460436',
  facebook: '#4A69A8',
  twitter: '#5AAEEC',
  instagram: '#C63486',
  facebookMessenger: '#5967FB',
  googlePlus: '#D1443D',
  airbnb: '#FD5C63',
};

export const styles = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 30,
    marginBottom: 10,
  },
  buttonTouch: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  textButtonTouch: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  avatarContainer: {
    // backgroundColor: '#C4D3D5',
    alignItems: 'center',
    marginTop: 10,
  },
  avatar: {
    width: 200,
    height: 200,
  },
  menuContainer: {
    marginVertical: 20,
    marginHorizontal: 30,
  },
  textMenu: {
    fontSize: 20,
  },
  menuButton: {
    marginVertical: 20,
  },
});
