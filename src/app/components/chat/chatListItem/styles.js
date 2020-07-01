import { colors, dimensions, fonts, fontSizes } from '../../../styles/base';
import { ScaledSheet, scale } from 'react-native-size-matters';
import { hexToRgba } from '../../../utils/colorUtils';

export default ScaledSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFC',
        alignItems: 'center',
        borderBottomColor: hexToRgba('#707070', 0.15),
        borderBottomWidth: 1,
        height: '80@s',
        zIndex: -100
    },
    avatar: {
        width: '80@s',
        height: '80@s',
        alignItems: 'center',
        justifyContent: 'center'
    },
    mainChatView: {
        flexDirection: 'column',
        marginLeft: '10@s',
        width: dimensions.fullWidth - scale(100)
    },
    nameText: {
        color: 'black',
        fontFamily: 'Montserrat-SemiBold',
        fontWeight: '500',
        fontSize: '16@s'
    },
    chatText: {
        color: hexToRgba('#2c2c2c', 0.7),
        fontFamily: 'Poppins-Regular',
        fontSize: '12@s',

    },
    new_badgeView: {
        backgroundColor: '#51D3A3'
    },
    new_badgeText: {
        fontFamily: 'Poppins-Regular',
        fontSize: '12@s',
        color: '#FCFCF9'
    },
    yourturn_badgeView: {
        backgroundColor: '#FFFFFC',

    },
    yourturn_badgeText: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: '12@s',
        color: '#FCFCF9'
    }
});