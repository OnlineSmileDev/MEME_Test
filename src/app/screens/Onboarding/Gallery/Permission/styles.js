import { colors, dimensions, fonts, fontSizes } from '../../../../styles/base';
import { ScaledSheet, verticalScale, scale, moderateScale } from 'react-native-size-matters';

export default ScaledSheet.create({
    firstIcon: {
        // marginLeft: '25@msr',
        marginTop: '50@s',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    camera_upload_button: {
        backgroundColor: 'white',
        height: '70@s',
        width: '280@s',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '40@s',
        borderWidth: '1@s',
        borderStyle: 'dashed',
        marginTop: '15@vs',
    },
    camera_upload_text: {
        fontFamily: 'Montserrat-SemiBold',
        color: '#374F59',
        fontSize: '20@s'
    },
    outerView: {
        // marginTop: '40%',
        height: '50%'
    },
    btnCenter: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: '24%',
    },
    container: {
        backgroundColor: colors.white,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        alignContent: 'center',
    },
    secondaryText: {
        fontFamily: fonts.montserratSemiBold,
        // marginLeft: '10%',
        fontSize: '21@s',
        marginLeft: '10@s',
        // marginTop: '8%',
        color: '#1C3F4E'
    },
    dottedButtonIcon: {
        position: 'absolute',
        top: '-7@s',
        right: '-16@s',
        zIndex: 10,
        backgroundColor: colors.primary
    }
});