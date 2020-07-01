import { colors, dimensions, fonts } from '../../styles/base';
import { ScaledSheet } from 'react-native-size-matters';

export default ScaledSheet.create({
    buttons: {
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    textView: {
        marginHorizontal: '20@s'
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
        fontSize: '18@msr',
        marginBottom: '13@msr',
        marginTop: '10@msr',
        fontWeight: '600',
        color: '#1C3F4E',
        textAlign: 'center'
    },
    mainCard: {
        marginTop: '60@vs',
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
    answerBtnText: {
    },
    answerBtn: {
        width: '270@s',
        height: '45@s',
        fontSize: 22,
        fontWeight: '500'
    },
    nahBtnText: {
        textDecorationLine: 'underline'
    },
    nahBtn: {
        width: '270@s',
        height: '45@s'
    }
});