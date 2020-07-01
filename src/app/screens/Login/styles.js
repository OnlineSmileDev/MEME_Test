import { colors, dimensions, fonts, fontWeights, fontSizes } from '../../styles/base';
import { ScaledSheet, verticalScale, scale, moderateScale } from 'react-native-size-matters';

export default styles = ScaledSheet.create({
    topAppName: {
        marginTop: '4.5%',
        marginBottom: -1,
        fontSize: fontSizes._34,
        fontWeight: fontWeights.boldest,
        color: colors.white,
        alignSelf: 'center',
        fontFamily: fonts.montserratBold
    },
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        alignContent: 'center'
    },
    text: {
        fontSize: fontSizes._21,
        color: colors.white,
        alignSelf: 'center',
        fontFamily: fonts.quicksandRegular
    },
    safe: {
        alignSelf: 'center'
    },
    overlay2: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        // backgroundColor: colors.white,
        // opacity: 0.3
    },
    bottomView: {
        alignSelf: 'center',
        marginTop: '430@vs',
        marginHorizontal: '10%'
    },
    disclaimerText: {
        fontSize: fontSizes._8,
        marginBottom: '-4%',
        paddingHorizontal: '10%',
        color: colors.white,
        fontFamily: fonts.poppinsRegular,
        textAlign: 'center'
    }
})