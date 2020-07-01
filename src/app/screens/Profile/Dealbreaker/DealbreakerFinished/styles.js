import { colors, dimensions, fonts } from '../../../../styles/base';
import { ScaledSheet } from 'react-native-size-matters';

export default ScaledSheet.create({
    bottomButtonSize: {
        width: 100,
    },
    bottomButtons: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    buttons: {
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    textView: {
        marginHorizontal: '10@s'
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
        fontSize: '24@msr',
        marginBottom: '13@msr',
        marginTop: '10@msr',
        fontWeight: '500',
        color: '#1C3F4E',
        textAlign: 'center'
    },
    bottomTextView: {
        marginHorizontal: '10@s'
    },
    bottomText: {
        fontFamily: 'Poppins-SemiBold',
        alignSelf: 'center',
        fontSize: '20@msr',
        marginBottom: '13@msr',
        marginTop: '10@msr',
        fontWeight: '500',
        color: '#1C3F4E',
        textAlign: 'center'
    },
    mainCard: {
        marginTop: '20@vs',
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
    },
    firstIcon: {
        marginLeft: '10@s',
        marginTop: '50@s'
    }
});