import { colors, dimensions, fonts } from '../../../styles/base';
import { ScaledSheet } from 'react-native-size-matters';

export default ScaledSheet.create({
    btnText: {
        fontSize: '20@msr',
        fontFamily: 'Poppins-Medium',
        color: colors.white
    },
    btnStyle: {
        backgroundColor: colors.facebookBlue,
        height: '49@s',
        width: '200@s',
        borderRadius: '29@msr',
    },
    surface: {
        alignSelf: 'center',
        alignContent: 'center',
        flexDirection: 'column',
        alignContent: 'flex-start',
        padding: '8@s',
        elevation: '4@s',
        borderRadius: '10@s'
        // alignSelf: 'center',
        // alignContent: 'center',
        // flexDirection: 'column',
        // alignContent: 'flex-start',
        // padding: '8@msr',
        // elevation: '4@msr',
        // borderRadius: '10@vs',
        // marginHorizontal: '10%',
        // paddingTop: '1@msr'
    },
    btn: {
        alignSelf: 'center',
        marginVertical: '10@vs'
    },
    image: {
        marginTop: '20@s',
        maxHeight: '300@s',
        // alignSelf: 'center'
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
        fontSize: '20@msr',
        color: '#6180D3'
        //marginBottom: '2@vs'
    },
    captionText: {
        fontFamily: 'Poppins-Regular',
        fontSize: '12@msr',
        color: '#6180D3',
        marginHorizontal: '30@s',
        marginTop: '10@s',
        textAlign: 'center'
    },
    top: {
        marginTop: '30@s',
        marginHorizontal: '5%',
        marginBottom: '10@vs',
        justifyContent: 'center',
        alignItems: 'center'
    },
    hrLine: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        // borderTopColor: '#6180D3',
        // borderTopWidth: 2,
        // width: '15%',
        // alignSelf: 'center',
        // marginTop: '2@vs'
    }
});