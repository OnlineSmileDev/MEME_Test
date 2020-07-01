import { colors, dimensions, fonts } from '../../../../styles/base';
import { ScaledSheet } from 'react-native-size-matters';
import { hexToRgba } from '../../../../utils/colorUtils';

export default ScaledSheet.create({
    bottomButtonSize: {
        width: '100@s',
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
        alignContent: 'center',
        minHeight: '100%'
    },
    secondaryText: {
        fontFamily: 'Poppins-SemiBold',
        alignSelf: 'center',
        fontSize: '24@msr',
        marginBottom: '13@s',
        marginTop: '10@s',
        fontWeight: '500',
        color: '#1C3F4E',
        textAlign: 'center'
    },
    // sliderTextCenter: {
    //     flexDirection: 'row',
    //     // marginBottom: '10@msr',
    //     alignSelf: 'center',
    //     // marginTop: '120@vs'
    // },
    // sliderText: {
    //     fontFamily: 'Montserrat-SemiBold',
    //     fontSize: '18@s',
    //     color: hexToRgba('#2C2C2C', 0.8),
    //     marginBottom: '5@s'
    // },
    slider: {
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        // marginTop: '5%',
        // width: Dimensions.get('screen').width,
    },
    bottomTextView: {
        marginHorizontal: '20@s'
    },
    bottomText: {
        fontFamily: 'Poppins-SemiBold',
        alignSelf: 'center',
        fontSize: '20@msr',
        marginBottom: '13@s',
        marginTop: '10@s',
        fontWeight: '500',
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
        padding: '8@s',
        elevation: '4@s',
        borderRadius: '10@s'
    },
    mainImage: {
        alignSelf: 'center',
        flexDirection: 'column',
        alignContent: 'space-between',
        borderRadius: '15@s',
        marginHorizontal: '5@s'
    },
    firstIcon: {
        marginLeft: '10@s',
        marginTop: '10@s'
    }
});