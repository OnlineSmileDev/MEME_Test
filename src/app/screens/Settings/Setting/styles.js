import { colors, dimensions, fonts, fontSizes } from '../../../styles/base';
import { ScaledSheet } from 'react-native-size-matters';
import { hexToRgba } from '../../../utils/colorUtils';

export default ScaledSheet.create({
    container: {
        backgroundColor: '#FFFFFC',
        alignItems: 'center',
        justifyContent: 'center',
        width: dimensions.fullWidth
        // height: '100%'
    },
    avatarView: {
        width: '200@s',
        height: '200@s',
        backgroundColor: 'transparent',
        marginTop: '30@s'
    },
    nameView: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    nameText: {
        fontFamily: 'Poppins-Bold',
        fontSize: '19@s',
        fontWeight: '500',
        color: '#1C3F4E'
    },
    editProfileView: {
        minWidth: '70@s',
        flexDirection: 'row'
    },
    editProfileText: {
        fontFamily: 'Poppins-Bold',
        marginRight: '10@s',
        fontSize: '19@s',
        fontWeight: '500',
        color: '#919191'
    },
    share: {
        width: '80%',
        flexDirection: 'row',
        marginTop: '20@s',
        borderBottomWidth: 0.5,
        paddingBottom: '10@s',
        borderBottomColor: '#617FD2'
    },
    shareText: {
        fontFamily: 'Poppins-Regular',
        fontSize: '17@s',
        fontWeight: '400',
        color: hexToRgba('#1C3F4E', 0.9)
    }
});