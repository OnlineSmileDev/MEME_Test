import { colors, dimensions, fonts, fontSizes } from '../../../styles/base';
import { ScaledSheet } from 'react-native-size-matters';
import { hexToRgba } from '../../../utils/colorUtils';

export default ScaledSheet.create({
    readonly: {
        textAlign: 'center',
        marginHorizontal: '30@s',
        marginTop: '20@vs',
        fontFamily: 'Montserrat-Light',
        color: 'rgba(35,35,35,0.75)',
        fontSize: '15@s'
    },
    inputView: {
        marginVertical: '10@vs',
        marginHorizontal: '10@s',
    },
    input: {
        fontFamily: 'Poppins-Regular',
        fontSize: '14@s',
        height: '100@vs',
        width: '100%',
        padding: '3@s',
        borderTopWidth: 0,
        borderStyle: 'solid',
        borderColor: hexToRgba('#717070', 0.25),
        borderRadius: '10@s',
        padding: '14@s',
        paddingTop:'19@s'
    }
});