import { colors, dimensions, fonts } from '../../../styles/base';
import { ScaledSheet } from 'react-native-size-matters';

export default ScaledSheet.create({
    topTextView: {
        marginTop: '2%',
        // marginBottom:'10@s',
        height: '30@s'
    },
    imgStyle: {
        width: '200@s',
        height: '360@s'
    },
    firstIcon: {
        flexDirection: 'row',
        marginLeft: '25@msr',
        marginTop: '10@msr'
    },
    secondIcon: {
        marginLeft: '25@msr',
        marginTop: '20@s',
        marginBottom: '10@s',
        flexDirection: 'row'
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
        backgroundColor: colors.whitish,
        flex: 1,
        flexDirection: 'column',
        //alignItems: 'stretch',
        alignContent: 'center'
    },
    secondaryText: {
        fontFamily: fonts.montserratSemiBold,
        alignSelf: 'center',
        fontSize: '19@s',
        fontWeight: '600',
        marginLeft: '10@s'
        //marginBottom: '2@vs'
    },
    genderSelection: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    genderImage: {
        alignSelf: 'center',
        alignContent: 'center',
        flexDirection: 'column',
        alignContent: 'flex-start',
        padding: '8@msr',
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
