import { colors, dimensions, fonts, fontSizes } from '../../../styles/base';
import { ScaledSheet } from 'react-native-size-matters';
import { hexToRgba } from '../../../utils/colorUtils';

export default ScaledSheet.create({
    btnText: {
        fontSize: '23@s',
        fontFamily: 'Poppins-Medium',
        color: '#FCFCF9'
    },
    btnStyle: {
        backgroundColor: colors.facebookBlue,
        height: '49@s',
        width: '290@s',
        borderRadius: '29@msr',
    },
    buttons: {
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    textView: {
        marginHorizontal: '10@s',
        marginBottom: '9@s'
    },
    container: {
        backgroundColor: 'white',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        alignContent: 'center'
    },
    secondaryText: {
        fontFamily: 'Montserrat-Bold',
        alignSelf: 'center',
        fontSize: '22@s',
        // marginBottom: '13@msr',
        marginTop: '10@msr',
        fontWeight: '600',
        color: hexToRgba('#2C2C2C', 0.8),
        textAlign: 'center'
    },
    captionText: {
        fontFamily: 'Poppins-Medium',
        alignSelf: 'center',
        fontSize: '18@s',
        marginBottom: '10@s',
        marginTop: '30@msr',
        // fontWeight: '600',
        color: hexToRgba('#2C2C2C', 0.8),
        textAlign: 'center'
    },
    mainCard: {
        marginTop: '60@s',
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: '10@s',
        padding: '8@s',
        elevation: '4@s',
        borderRadius: '10@s'
    },
    mainImage: {
        alignSelf: 'center',
        flexDirection: 'column',
        alignContent: 'space-between',
        borderRadius: '15@s',
        marginHorizontal: '15@s',
        width: "100%"
    }
});