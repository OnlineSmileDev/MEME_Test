import { colors, dimensions, fonts, fontSizes, fontWeights } from '../../../styles/base';
import { ScaledSheet, verticalScale, scale, moderateScale } from 'react-native-size-matters';
import { hexToRgba } from '../../../utils/colorUtils';

export default ScaledSheet.create({
    bottomShadow: {
        borderBottomWidth: 0.5,//'2@s',
        borderBottomColor: hexToRgba('#000000', 0.5)
    },
    container: {
        backgroundColor: colors.whitish,
        width: '100%'
    },
    centertextonly_text: {
        color: colors.primary,
        fontFamily: fonts.montserratBold,
        fontWeight: fontWeights.bold,
        fontSize: fontSizes._29
    },
    centertextonly_view: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
    },
    textwithrighticon_text: {
        color: colors.primary,
        fontFamily: fonts.montserratBold,
        fontWeight: fontWeights.bold,
        fontSize: fontSizes._29
    },
    textwithrighticon_view: {
        flexDirection: 'row',
        backgroundColor: colors.whitish,

        justifyContent: 'center',
        width: '100%',
    },
    textwithrighticon_icon: {
        position: 'absolute',
        top: '5@s',
        right: '25@s'
    },
    //
    textwithlefticon_text: {
        color: colors.primary,
        fontFamily: fonts.montserratBold,
        fontWeight: fontWeights.bold,
        fontSize: fontSizes._29
    },
    textwithlefticon_view: {
        flexDirection: 'row',
        backgroundColor: colors.whitish,

        justifyContent: 'center',
        width: '100%',
    },
    textwithlefticon_icon: {
        position: 'absolute',
        top: scale(4), //was 0
        left: '15@s'
    }
});