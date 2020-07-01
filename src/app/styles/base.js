import { Dimensions } from 'react-native'
import { verticalScale, scale, moderateScale } from 'react-native-size-matters';

export const dimensions = {
  fullHeight: Dimensions.get('window').height,
  fullWidth: Dimensions.get('window').width
}

export const colors = {
  primary: '#51D3A3',
  white: '#FFFFFF',
  whitish: '#FFFFFC',
  light: '#AFAFAF',
  black: '#000000',
  facebookBlue: '#617FD2',
  green: 'green',
  gray: '#EFEEEE',
  transparent: 'transparent',
  black: '#101211',
  blackish: '#2C2C2C'
}

export const fontSizes = {
  _8: 8,
  _18: 18,
  _16: 16,
  _21: 21,
  _34: 34,
  _29: 29
}
export const fonts = {
  /** Poppins */
  poppinsRegular: 'Poppins-Regular',
  poppinsSemiBold: 'Poppins-SemiBold',
  /** Quicksand */
  quicksandRegular: 'Quicksand-Regular',
  montserratBold: 'Montserrat-Bold',
  montserratSemiBold: 'Montserrat-SemiBold'
}

export const fontWeights = {
  boldest: '800',
  bold: '500'
}