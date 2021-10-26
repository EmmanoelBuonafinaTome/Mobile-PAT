import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import { COLORS } from '../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    paddingTop: getStatusBarHeight(),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.DARK_BLUE,
    width: '100%',
    borderBottomWidth: 3,
    borderBottomColor: COLORS.ORANGE
  },
  teste: {
    height: 75,
  },
  aaa: {
    height: 50,
    width: '35%'
  },
  ccc: {
    textAlign: 'center'
  }
})