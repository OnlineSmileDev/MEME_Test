import { colors, dimensions, fonts } from '../../../styles/base';
import { ScaledSheet } from 'react-native-size-matters';

export default ScaledSheet.create({
    container: {
        backgroundColor: '#FFFFFC',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        alignContent: 'center'

    },
    top: {
        backgroundColor: '#FFFFFC',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '2%',
        // minHeight: '30%',
        // maxHeight: '40%'
        maxHeight: '150@s'
    },
    pp: {
        backgroundColor: '#FFFFFC',
        alignItems: 'center',
        alignContent: 'center',
        width: '45%',
    },
    humorList: {
        width: '50%'
    }
});