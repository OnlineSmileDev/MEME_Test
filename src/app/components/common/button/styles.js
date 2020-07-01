import { colors, dimensions, fonts, fontSizes } from '../../../styles/base';
import { ScaledSheet, verticalScale, scale, moderateScale } from 'react-native-size-matters';

export default ScaledSheet.create({
    none_text: {

    },
    none_button: {

    },
    generic_button: {
        backgroundColor: colors.white,
        borderColor: '#707070',
        borderWidth: 0.3,
        height: '40@s',
        width: '225@s',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '25@msr',
        marginTop: '5@vs',
        marginBottom: '5@vs'
    },
    generic_text: {
        color: '#1A1717',
        fontSize: fontSizes._16,
        fontFamily: fonts.poppinsRegular
    },
    facebook_text: {
        color: colors.white,
        fontSize: fontSizes._18,
        fontFamily: fonts.poppinsRegular
    },
    facebook_button: {
        backgroundColor: colors.facebookBlue,
        height: '45@s',
        width: '300@s',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '19@s',
        marginTop: '3@s',
        marginHorizontal: '3@s'
    },
    waitlistpasscode_button: {
        backgroundColor: colors.facebookBlue,
        height: '45@vs',
        width: '190@s',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '35@msr',
        marginTop: '15@vs',
        marginHorizontal: '3@s',
        marginTop: '7@vs'
    },
    waitlistpasscode_text: {
        color: colors.white,
        fontSize: fontSizes._18,
        fontFamily: fonts.poppinsRegular
    },
    waitlistsubmit_button: {
        backgroundColor: colors.white,
        height: 38,
        width: 115,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 19,
        marginTop: 5,
        borderColor: colors.primary,
        borderWidth: 2,
        marginHorizontal: 3
    },
    waitlistsubmit_text: {
        fontSize: 14,
        fontFamily: 'Poppins-SemiBold',
        color: colors.primary
    }
});