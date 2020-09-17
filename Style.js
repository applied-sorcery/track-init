import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  button: {
    color: '#f2f2f2',
  },

  container: {
    backgroundColor: '#2f363c',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center',
  },
  defaultText: {
    textAlign: 'center',
    color: '#a5a0a0',
    fontSize: 25,

    margin: '20%',
    letterSpacing: 1.5,
    lineHeight: 40,
  },
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default Styles;
