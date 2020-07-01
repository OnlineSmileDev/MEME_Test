import { colors, dimensions, fonts, fontSizes } from '../../../styles/base';
import { ScaledSheet } from 'react-native-size-matters';
import { hexToRgba } from '../../../utils/colorUtils';

export default ScaledSheet.create({
    btnStyle: {
        backgroundColor: colors.primary,
        width: '95%',
        height: '47@s',
        borderRadius: '30@s'
    },
    btnTextStyle: {
        color: colors.white,
        fontFamily: 'Poppins-Medium',
        fontSize: fontSizes._21
    },
    topBar: {
        color: hexToRgba(colors.blackish, 0.8),
        fontFamily: fonts.montserratSemiBold,
        fontSize: 21
    },
    counterIcon: {
        position: 'absolute',
        top: '80@vs',
        left: '312@s',
        zIndex: 3,
        color: 'gray'
    },
    buttonView: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputView: {
        marginVertical: '10@vs',
        marginHorizontal: '10@s',
    },
    input: {
        fontFamily: 'Poppins-Regular',
        fontSize: '14@s',
        height: '100@vs',
        padding: '3@s',
        borderWidth: '1@s',
        borderStyle: 'solid',
        borderColor: hexToRgba('#717070', 0.75),
        borderRadius: '10@s',
        padding: '14@s'
    },
    container: {
        backgroundColor: 'white',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        alignContent: 'center'
    },
    avatar: {
        marginHorizontal: '15@s'
    },
    surname: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: '24@msr',
        color: '#2C2C2C'
    },
    desc: {
        marginTop: '5@vs',
        fontFamily: 'Poppins-Regular',
        fontSize: '15@msr',
        color: 'rgba(44,44,44,0.8)'
    },
    profile: {
        flexDirection: 'row',
        marginTop: '35%'
    },
    descView: {
        width: '235@s',
        height: '80@vs'
    }
});