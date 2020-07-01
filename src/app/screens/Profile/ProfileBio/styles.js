import { colors, dimensions, fonts, fontSizes } from '../../../styles/base';
import { ScaledSheet } from 'react-native-size-matters';
import { hexToRgba } from '../../../utils/colorUtils';

export default ScaledSheet.create({
    btnStyle: {
        backgroundColor: colors.primary,
        width: '150@s',
        height: '47@s',
        borderRadius: '10@s'
    },
    btnTextStyle: {
        color: colors.white,
        fontFamily: fonts.poppinsSemiBold,
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
        alignSelf: 'flex-end',
        marginRight: '4%'
    },
    inputView: {
        marginVertical: '10@vs',
        marginHorizontal: '10@s',
    },
    input: {
        fontFamily: 'Poppins-Regular',
        fontSize: '15@s',
        height: '100@vs',
        padding: '3@msr',
        borderWidth: '1@msr',
        borderStyle: 'solid',
        borderColor: 'rgba(44,44,44,0.26)',
        borderRadius: '10@msr',
        padding: '14@msr'
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
        marginTop: '5@s',
        fontFamily: 'Poppins-Regular',
        fontSize: '14@s',
        color: 'rgba(44,44,44,0.8)'
    },
    profile: {
        flexDirection: 'row',
        marginTop: '15%'
    },
    descView: {
        width: '200@s',
        height: '80@s'
    }
});