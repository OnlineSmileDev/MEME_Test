import { colors, dimensions, fonts } from '../../../../styles/base';
import { ScaledSheet } from 'react-native-size-matters';
import { hexToRgba } from '../../../../utils/colorUtils';

export default ScaledSheet.create({
    buttonRow: {
        marginBottom: '40@s',
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap'
    },
    buttons: {
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    textView: {
        marginHorizontal: '10@s',
        marginTop: '20@s'
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
        fontSize: '22@s',
        marginBottom: '20@s',
        // marginTop: '10@s',
        fontWeight: '600',
        color: hexToRgba('#1C3F4E', 0.9),
        // textAlign: 'center'
    },
    mainCard: {
        marginTop: '55@s',
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        // marginHorizontal: '5@s',
        // padding: '8@msr',
        // elevation: '4@msr',
        // borderRadius: '10@vs'
    },
    firstIcon: {
        marginLeft: '10@s',
        marginTop: '50@s'
    },
    mainImage: {
        alignSelf: 'center',
        flexDirection: 'column',
        alignContent: 'space-between',
        borderRadius: '15@msr',
        marginHorizontal: '5@s'
    }
});