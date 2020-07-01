import { colors, dimensions, fonts } from '../../../styles/base';
import { ScaledSheet } from 'react-native-size-matters';

export default ScaledSheet.create({
    yesBtn: {
        backgroundColor: colors.facebookBlue,
    },
    noBtn: {

    },
    yesText: {
        color: colors.white
    },
    noText: {

    },
    topDivider: {
        width: '100%',
        height: 7
    },
    bottomDivider: {
        width: '100%',
        height: 7
    },
    buttons: {
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    textView: {
        marginHorizontal: '35@s'
    },
    container: {
        backgroundColor: 'white',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        alignContent: 'center'
    },
    secondaryText: {
        fontFamily: 'Poppins-SemiBold',
        alignSelf: 'center',
        fontSize: '24@s',
        marginBottom: '13@msr',
        marginTop: '10@msr',
        fontWeight: '600',
        color: '#1C3F4E',
        textAlign: 'center'
    },
    mainCard: {
        marginTop: '30@s',
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: '5@s',
        padding: '8@msr',
        elevation: '4@msr',
        borderRadius: '10@vs'
    },
    mainImage: {
        alignSelf: 'center',
        flexDirection: 'column',
        alignContent: 'space-between',
        borderRadius: '15@msr',
        marginHorizontal: '5@s'
    }
});