import { colors, dimensions, fonts, fontSizes } from '../../../styles/base';
import { ScaledSheet } from 'react-native-size-matters';
import { hexToRgba } from '../../../utils/colorUtils';

export default ScaledSheet.create({
    container: {
        width: '60@s',
        height: '20@s',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '10@s',
        backgroundColor: hexToRgba(colors.primary, 0.33)
    },
    text: {
        fontFamily: 'Poppins-Medium',
        fontWeight: '500',
        fontSize: '12@s',
        color: colors.primary
    }
});