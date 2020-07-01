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
        height: '45@s',
        width: '280@s',
        borderRadius: '29@msr',
        // marginVertical:'30@s'
    },
    ratings: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    skip: {
        color: 'gray'
    },
    surface: {
        padding: '8@msr',
        elevation: '4@s',
        borderRadius: '10@vs',
        marginTop: '50@vs',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    btn: {
        alignSelf: 'center',
    },
    image: {
        height: '218@vs',
        width: '95%',
        // backgroundColor:'black',
        // alignSelf: 'center'
    },
    container: {
        backgroundColor: colors.whitish,
        borderWidth: 0, //removeme
        // flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        alignContent: 'center'
    },
    secondaryText: {
        fontFamily: 'Poppins-Regular',
        alignSelf: 'center',
        fontSize: '14@msr',
        color: 'black',
        marginHorizontal: '30@s',
        textAlign: 'center'
    },
    captionText: {
        fontFamily: 'Poppins-Regular',
        fontSize: '16@msr',
        color: '#1C3F4E',
        marginHorizontal: '30@s',
        marginVertical: '10@s',
        textAlign: 'center'
    },
    top: {
        marginTop: '100@vs',
        justifyContent: 'center',
        alignItems: 'center'
    }
});