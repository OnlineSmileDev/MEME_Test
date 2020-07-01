import { colors, dimensions, fonts } from '../../../styles/base';
import { ScaledSheet } from 'react-native-size-matters';

export default ScaledSheet.create({
    left: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFC',
        marginTop: '7@vs',
        alignSelf: 'flex-end'
    },
    container: {
        flexDirection: 'row',
        width: '80%',
        backgroundColor: '#FFFFFC',
        borderBottomColor: 'rgba(112,112,112,0.20)',
        borderBottomWidth: 1

    },
    icon: {
        backgroundColor: 'red',
        marginTop: '2@vs',
        borderColor: '#FFFFFF',
        borderWidth: '2@vs',
        shadowColor: '#000000',
        shadowOffset: {
            height: '1@vs',
            width: 0
        },
        shadowOpacity: 0.16,
        shadowRadius: '2@vs'
    },
    text: {
        fontFamily: 'Poppins-Medium',
        fontSize: '10@vs',
        color: '#2C2C2C',
        opacity: 0.5,
    },
    percentage: {
        fontFamily: 'Poppins-Medium',
        fontSize: '12@vs',
        fontWeight:'500',
        color: '#2C2C2C',
        position: 'absolute',
        right: '8@vs',
        top: '-0.7@vs'
    }
});