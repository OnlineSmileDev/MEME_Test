import { colors, dimensions, fonts } from '../../../styles/base';
import { ScaledSheet } from 'react-native-size-matters';

export default ScaledSheet.create({
    topTextView: {
        // marginTop: '2?%',
        height: '40@s',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    firstIcon: {
        marginLeft: '25@msr',
        marginTop: '20@s',
        flexDirection: 'row'
    },
    imgStyle: {
        width: '220@s',
        height: '455@s'
    },
    overlay2: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: 'green',
        opacity: 0.3
    },
    container: {
        backgroundColor: 'white',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        alignContent: 'center'
    },
    secondaryText: {
        fontFamily: 'Montserrat-SemiBold',
        alignSelf: 'center',
        fontWeight: '500',
        fontSize: '19@s',
        marginLeft: '10@s'
    },
    secondaryCaptionText: {
        color: 'rgba(44,44,44,0.9)',
        marginTop: '5@vs',
        fontFamily: 'Poppins-Regular',
        alignSelf: 'center',
        fontSize: '14@msr',
        marginBottom: '2%'
    },
    genderSelection: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    genderImage: {
        alignSelf: 'center',
        flexDirection: 'column',
        alignContent: 'space-between',
        // marginTop: '20@s',
        padding: '4@msr',
        elevation: '4@msr',
        borderRadius: '10@vs'
    },
    check: {
        position: 'absolute',
        top: '-10@s',
        right: 0,
        zIndex: 5
    }
});