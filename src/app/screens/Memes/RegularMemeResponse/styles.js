import { colors, dimensions, fonts } from '../../../styles/base';
import { ScaledSheet } from 'react-native-size-matters';
import { hexToRgba } from '../../../utils/colorUtils';

export default ScaledSheet.create({
    ratings: {
        marginTop: '30@vs',
        justifyContent: 'center',
        alignItems: 'center',
    },
    skip: {
        color: 'rgba(23,23,23,0.35)',
        marginTop: '19@vs',
        fontFamily: 'Poppins-Regular',
        fontSize: '16@msr'
    },
    surface: {
        padding: '8@msr',
        elevation: '4@msr',
        borderRadius: '20@vs',
        marginTop: '30@vs',
        marginHorizontal: '10@s',
        shadowRadius: '10@msr',
        shadowOffset: {
            width: '1@msr',
            height: '2@msr',
        },
        shadowColor: 'rgb(0,0,20)',
        shadowOpacity: 0.15
    },
    btn: {
        alignSelf: 'center',
    },
    image: {
        height: '300@vs',
        width: '300@vs',
        alignSelf: 'center'
    },
    container: {
        backgroundColor: '#FFFFFC',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        alignContent: 'center'
    },
    secondaryText: {
        fontFamily: 'Montserrat-Bold',
        alignSelf: 'center',
        fontSize: '18@msr',
        color: '#6180D3'
        //marginBottom: '2@vs'
    },
    captionText: {
        fontFamily: 'Poppins-Regular',
        fontSize: '12@msr',
        color: '#6180D3',
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