import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import { COLORS, FONTS } from '../../theme/';

export const styles = StyleSheet.create({
  container: {
    paddingTop: getStatusBarHeight(),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.GRAY,
    width: '100%',
    borderBottomWidth: 3,
    borderBottomColor: COLORS.ORANGE
  },
  imgContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  fistImage: {
    height: 75,
  },
  secondaryImage: {
    height: 50,
    width: '50%'
  },
  containerText: {
    width: "100%"
  },
  textHeader: {
    fontSize: 16,
    fontFamily: FONTS.BOLD
  }
})