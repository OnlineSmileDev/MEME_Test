import { colors, dimensions, fonts } from '../../../styles/base';
import { ScaledSheet } from 'react-native-size-matters';
import { hexToRgba } from '../../../utils/colorUtils';

export default ScaledSheet.create({
    container_wide: {
        width: '90%',
        backgroundColor: 'transparent', //'#FFFFFC',
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'flex-start',
        justifyContent: 'space-between',
        marginTop: '10@s'
    },
    container_narrow: {
        width: '75%',
        backgroundColor: 'transparent', //'#FFFFFC',
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'flex-start',
        justifyContent: 'space-between',
        marginTop: '10@s'
    }
});