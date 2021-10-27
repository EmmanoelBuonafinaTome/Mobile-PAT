import { StyleSheet } from 'react-native';

import { FONTS } from '../../theme'

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'red',
    width: '100%',
    marginTop: 30,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15
  },
  title: {
    fontSize: 20,
    fontFamily: FONTS.BOLD,
    color: 'white'
  }
})

export { styles }