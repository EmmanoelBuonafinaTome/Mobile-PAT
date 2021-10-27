import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../theme';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  imageHomePage: {
    height: '30%'
  },
  containerText: {
    width: 300,
  },
  titleText: {
    textAlign: 'center',
    fontSize: 18,
    fontFamily: FONTS.BOLD
  },
  secondaryText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '700',
    fontFamily: FONTS.REGULAR
  },
  contentText: {
    textAlign: 'center',
    fontSize: 14,
  }
})

export { styles };