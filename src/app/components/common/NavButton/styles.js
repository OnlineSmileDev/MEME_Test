import { colors, dimensions, fonts, fontSizes } from '../../../styles/base';
import { ScaledSheet, verticalScale, scale, moderateScale } from 'react-native-size-matters';

export default ScaledSheet.create({
    nav_right: {
        position: 'absolute',
        width: '70@s',
        height: '70@s',
        bottom: '30@s',
        right: '15@s',
        borderRadius: '30@s'
    },
    nav_left: {
        position: 'absolute',
        width: '70@s',
        height: '70@s',
        bottom: '30@s',
        left: '15@s',
        borderRadius: '30@s'
    }
});