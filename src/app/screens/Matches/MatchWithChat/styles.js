import { colors, dimensions, fonts, fontSizes } from '../../../styles/base';
import { ScaledSheet } from 'react-native-size-matters';
import { hexToRgba } from '../../../utils/colorUtils';

export default ScaledSheet.create({
    container: {
        backgroundColor: '#FFFFFC',
        // flex: 1
    },
    scene: {
        flex: 1
    },
    tabStyle: {
        backgroundColor: '#FFFFFC',

    },
    activeTabText: {
        fontFamily: 'Montserrat-Bold',
        fontSize: '16@s',
        color: '#51D3A3',
        fontWeight: '500'
    },
    inactiveTabText: {
        fontFamily: 'Montserrat-Bold',
        fontSize: '16@s',
        color: '#98A8AF',
        fontWeight: '500'
    }
});