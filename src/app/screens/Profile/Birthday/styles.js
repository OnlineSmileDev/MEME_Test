import { colors, dimensions, fonts } from '../../../styles/base';
import { ScaledSheet } from 'react-native-size-matters';

export default ScaledSheet.create({
    firstIcon: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        // marginLeft: '25@msr',
        marginTop: '50@s'
    },
    bday: {
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        // width: Dimensions.get('screen').width,
        marginTop: '10%',
    },
    container: {
        backgroundColor: '#FFFFFC',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        alignContent: 'center'
    },
    secondaryText: {
        fontFamily: 'Montserrat-SemiBold',
        // marginLeft: '10%',
        fontSize: '21@s',
        marginLeft: '10@s',
        // marginTop: '8%',
        color: '#1C3F4E'
    }
});