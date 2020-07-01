import { colors, dimensions, fonts } from '../../../styles/base';
import { ScaledSheet } from 'react-native-size-matters';

export default ScaledSheet.create({
    bottomView: {
        backgroundColor: colors.transparent,
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'flex-start',
        justifyContent: 'space-between',
        marginHorizontal: '15@s',
    },
    btnStyle: {
        // width: 200,
        //backgroundColor: 'green'
    }
});