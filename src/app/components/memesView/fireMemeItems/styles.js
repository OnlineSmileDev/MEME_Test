import { colors, dimensions, fonts, fontSizes } from '../../../styles/base';
import { ScaledSheet } from 'react-native-size-matters';

export default ScaledSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        marginHorizontal: '8@s'
    },
    row: {
        // alignSelf:'center',
        // marginHorizontal: '5@s',
        marginLeft: '6.5@s',
        marginTop: '3%',
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',

        maxWidth: dimensions.fullWidth
    },
    item: {
        height: '105@vs',
    }
});