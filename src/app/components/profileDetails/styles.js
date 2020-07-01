import { colors, dimensions, fonts, fontSizes } from '../../styles/base';
import { ScaledSheet } from 'react-native-size-matters';

export default ScaledSheet.create({
    editModeStyle: {
        position: 'absolute',
        right: 30,
        bottom: -5
    },
    profilePreference: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    preferenceTopText: {
        fontFamily: '',
        fontSize: 24,
        color: 'black'
    },

    profileInfoItemShortView: {
        flexDirection: 'row',
        marginTop: '2.5%',
        height: '50@s',
        // flexWrap: 'wrap',
    },

    profileInfo: {
        // borderTopWidth: 1,
        // borderBottomWidth: 1,
        // borderColor: '#rgba(112,112,112,0.21)',
        paddingTop: '4@s',
        paddingRight: '5%',
        // paddingBottom: '3@s',//'5%',
        minHeight: '50@s'
    },
    humorStyleTitle: {
        marginTop: '10@vs',
        marginHorizontal: '30@s',
        fontFamily: 'Montserrat-Regular',
        color: 'rgba(35,35,35,0.35)',
        fontSize: '14@s'
    },
    humorStyleView: {
        borderWidth: 0,
        // borderBottomWidth: 0,
        // borderColor: '#rgba(112,112,112,0.21)',
        width: dimensions.fullWidth,
        // paddingVertical: '10@s',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: '2%'
    },
    surface: {
        zIndex: -10,
        borderRadius: '15@msr',
        // paddingVertical: '8@msr',
        elevation: '6@msr',
        marginTop: '30@s',
        shadowRadius: '10@msr',
        shadowOffset: {
            width: '1@msr',
            height: '2@msr',
        },
        shadowColor: 'rgb(0,0,20)',
        shadowOpacity: 0.15,
        // flex: 1,
        backgroundColor: '#FFFFFC',
        marginBottom:'40@s'
    },
    bio: {
        textAlign: 'center',
        marginHorizontal: '30@s',
        marginTop: '20@vs',
        fontFamily: 'Montserrat-Light',
        color: 'rgba(35,35,35,0.75)',
        fontSize: '14@msr'
    },
    container: {
        backgroundColor: '#FFFFFC',
        flexDirection: 'column',
        alignItems: 'stretch',
        // alignContent: ''
    }
});