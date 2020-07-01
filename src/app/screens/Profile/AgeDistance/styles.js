import { colors, dimensions, fonts } from '../../../styles/base';
import { ScaledSheet } from 'react-native-size-matters';
import { hexToRgba } from '../../../utils/colorUtils';

export default ScaledSheet.create({
    firstIcon: {
        marginLeft: '10@msr',
        // marginTop: '50@s'
    },
    outerView: {
        // backgroundColor:'black',
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    bday: {
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '5%',
        // width: Dimensions.get('screen').width,
    },
    rightText: {
        flexDirection: 'row',
        alignSelf: 'flex-end',
        alignContent: 'flex-end',
        marginRight: '47@s',
        marginTop: '10@vs'
    },
    container: {
        backgroundColor: 'white',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        alignContent: 'center'
    },
    textCenter: {
        flexDirection: 'row',
        marginBottom: '10@msr',
        alignSelf: 'center',
        // marginTop: '120@vs'
    },
    caption: {
        marginTop: '-10@vs',
        flexDirection: 'column',
        alignSelf: 'center',
        marginBottom: '10@vs'
    },
    captionText: {
        fontFamily: 'Poppins-Light',
        fontSize: '12@msr'
    },
    secondaryText: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: '23@s',
        color: hexToRgba('#2C2C2C', 0.8),
        marginBottom: '5@vs'
    }
});