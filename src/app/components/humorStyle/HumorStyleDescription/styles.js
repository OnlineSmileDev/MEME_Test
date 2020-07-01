import { colors, dimensions, fonts } from '../../../styles/base';
import { ScaledSheet } from 'react-native-size-matters';
import { hexToRgba } from '../../../utils/colorUtils';

export default ScaledSheet.create({
    bottomView: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    moreLessText: {
        fontFamily: 'Poppins-Medium',
        fontSize: '14@msr',
        color: '#2C2C2C'
    },
    moreLess: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: '5@s'
    },
    matchTextBold: {
        fontFamily: 'Montserrat-Bold',
        fontSize: '14@msr'
    },
    matchText: {
        fontFamily: 'Montserrat-Regular',
        fontSize: '14@msr',
    },
    firstRow: {
        flexDirection: 'row',
        paddingTop:'10@s',
        minHeight: '100@vs'
    },
    others: {
        flexDirection: 'column',
    },
    container: {
        flexDirection: 'column',
        marginTop: '20@msr',
        // borderTopWidth: 3,
        borderTopColor: hexToRgba('#707070', 0.21)
    },
    top: {
        justifyContent: 'center',
        alignContent: 'center',

    },
    title: {
        textAlign: 'center',
        fontSize: '20@msr',
        fontWeight: '600',
        color: '#2C2C2C',
        marginVertical: '10@s'
    }
});