import { colors, dimensions, fonts, fontSizes } from '../../../../styles/base';
import { ScaledSheet, verticalScale, scale, moderateScale } from 'react-native-size-matters';

export default ScaledSheet.create({
    firstIcon: {
        // marginLeft: '25@msr',
        marginTop: '50@s',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    reorderView: {
        color: 'rgba(44,44,44,0.4)',
        fontFamily: fonts.poppinsRegular,
        fontSize: 14,
        alignSelf: 'flex-end',
        marginRight: '6.5%',
        marginTop: '4%'
    },
    grid: {
        marginTop: '10%'
    },

    container: {
        backgroundColor: colors.white,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        alignContent: 'center'
    },
    secondaryText: {
        fontFamily: fonts.montserratSemiBold,
        marginLeft: '10@s',
        // marginLeft: '10%',
        fontSize: '21@s',
        // marginTop: '8%',
        color: '#1C3F4E'
    },
    outerView: {
        // marginTop: '40%',
        height: '50%'
    },
});