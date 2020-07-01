import { colors, dimensions, fonts, fontSizes } from '../../../styles/base';
import { ScaledSheet, scale } from 'react-native-size-matters';

export default ScaledSheet.create({
    container: {
        backgroundColor: '#FFFFFC'
    },
    topHeaderView: {
        width: '100%',
        height: '20@s'
    },
    topHeaderText: {

    },
    newMatchesView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    matchItem: {
        width: '50@s',
        height: '50@s',
        alignItems: 'center',
        justifyContent: 'center'
    }
});