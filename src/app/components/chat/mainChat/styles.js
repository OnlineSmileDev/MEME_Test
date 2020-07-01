import { colors, dimensions, fonts, fontSizes } from '../../../styles/base';
import { ScaledSheet } from 'react-native-size-matters';
import { hexToRgba } from '../../../utils/colorUtils';

export default ScaledSheet.create({
    container: {
        backgroundColor: '#FFFFFC',
        // backgroundColor: 'red',
        // minHeight:'100%'
        // flex: 1,
        // height: dimensions.fullHeight - 100
    },
    DateView: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginVertical: '10@s'
    }
});