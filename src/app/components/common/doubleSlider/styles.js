import { colors, dimensions, fonts } from '../../../styles/base';
import { ScaledSheet } from 'react-native-size-matters';

export default ScaledSheet.create({
    circle_button: {
        height: '36@s',
        width: '36@s',
        borderRadius: '18@s',
        backgroundColor: colors.primary,
    },
    circle_text: {
        fontSize: '18@s',
        fontFamily: 'Poppins-Medium',
        color: colors.white,
        top: '5@s',
        bottom: 0,
        left: '9@s',
        right: 0
    }
});