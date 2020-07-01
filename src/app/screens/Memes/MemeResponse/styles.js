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
        backgroundColor:'#FFFFFF',
        padding: '8@s',
        elevation: '4@s',
        borderRadius: '20@s',
        marginTop: '30@s',
        marginHorizontal: '10@s',
        shadowRadius: '10@s',
        shadowOffset: {
            width: '1@s',
            height: '2@s',
        },
        shadowColor: 'rgb(0,0,20)',
        shadowOpacity: 0.15
    },
    btn: {
        alignSelf: 'center',
    },
    image: {
        height: '320@s',
        width: '310@s',
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
        marginTop: '100@s',
        justifyContent: 'center',
        alignItems: 'center'
    }
});