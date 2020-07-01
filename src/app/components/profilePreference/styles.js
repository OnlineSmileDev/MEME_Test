import { colors, dimensions, fonts, fontSizes } from '../../styles/base';
import { ScaledSheet } from 'react-native-size-matters';
import { hexToRgba } from '../../utils/colorUtils';

export default ScaledSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '30@s'
    },
    titleText: {
        fontFamily: 'Montserrat-Bold',
        fontSize: '23@s',
        color: hexToRgba('#426371', 1.0)
    },
    textCenter: {
        flexDirection: 'row',
        // marginBottom: '10@msr',
        alignSelf: 'center',
        marginBottom: '10@s'
        // marginTop: '120@vs'
    },
    bday: {
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        // marginTop: '5%',
        // width: Dimensions.get('screen').width,
    },
    secondaryText: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: '18@s',
        color: hexToRgba('#2C2C2C', 0.8),
        marginBottom: '5@s'
    }
});