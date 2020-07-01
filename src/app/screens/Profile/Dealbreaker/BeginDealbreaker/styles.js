import { colors, dimensions, fonts } from '../../../../styles/base';
import { ScaledSheet, scale } from 'react-native-size-matters';

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
        fontSize: '18@s',
        marginBottom: '13@s',
        // marginTop: '10@s',
        fontWeight: '600',
        color: '#1C3F4E',
        textAlign: 'center'
    },
    mainCard: {
        marginTop: '20@s',
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: '5@s',
        paddingTop: '8@s',
        elevation: '4@s',
        borderRadius: '10@s'
    },
    mainImage: {
        alignSelf: 'center',
        flexDirection: 'column',
        alignContent: 'space-between',
        borderRadius: '15@s',
        marginHorizontal: '5@s',
        width:'300@s'
        // width:'80%'
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