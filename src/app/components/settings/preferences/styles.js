import { colors, dimensions, fonts, fontSizes } from '../../../styles/base';
import { ScaledSheet } from 'react-native-size-matters';
import { hexToRgba } from '../../../utils/colorUtils';

export default ScaledSheet.create({
    container: {
        marginTop: '30@s',
        backgroundColor: '#FFFFFC',
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%'
        // height: '100%'
    },
    topView: {
        borderBottomWidth: 0.5,
        flexDirection: 'row',
        alignSelf: 'flex-start',
        width: '100%',
        borderBottomColor: hexToRgba('#617FD2', 0.8)
    },
    topText: {
        color: hexToRgba('#1C3F4E', 0.75),
        fontFamily: fonts.montserratBold,
        fontSize: '18@s'
    },
    //
    itemView: {
        marginTop: '10@s',
        borderBottomWidth: 0.5,
        flexDirection: 'row',
        alignSelf: 'flex-start',
        borderBottomColor: hexToRgba('#617FD2', 0.8)
    },
    itemView1st: {
        width: '80%',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        padding: 0
    },
    itemMainText: {
        color: hexToRgba('#1C3F4E', 0.80),
        fontFamily: fonts.montserratSemiBold,
        fontSize: '14@s'
    },
    itemSubtext: {
        color: hexToRgba('#426371', 0.80),
        fontFamily: fonts.poppinsRegular,
        fontSize: '12@s'
    },
    preferenceIcon: {
        width: '20%',
        alignItems: 'center',
        justifyContent: 'flex-end'
    }
});