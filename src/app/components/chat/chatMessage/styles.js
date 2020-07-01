import { colors, dimensions, fonts, fontSizes } from '../../../styles/base';
import { ScaledSheet } from 'react-native-size-matters';
import { hexToRgba } from '../../../utils/colorUtils';

export default ScaledSheet.create({
    container: {
        flexDirection: 'row',
        alignContent: 'center',
        width: '100%',
        marginVertical: '10@s'
    },
    subContainer: {
        width: '100%',
        flexDirection: 'row',
        alignContent: 'center',
        // justifyContent: 'center'
    },
    icon: {
        // flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-end',
        width: '60@s',
        height: '60@s',
        // backgroundColor: colors.blackish,
        marginHorizontal: '10@s'
    },
    senderMessageView: {
        backgroundColor: '#6180D3',
        borderRadius: '10@s',
        width: '50%',
        padding: '10@s',
        minHeight: '10@s'

    },
    triangleSenderView: {
        //To make Triangle Shape
        position: 'absolute',
        bottom: 0,
        right: '-10@s',
        width: 0,
        height: 0,
        borderLeftWidth: '10@s',
        borderRightWidth: '10@s',
        borderBottomWidth: '20@s',
        borderStyle: 'solid',
        backgroundColor: 'transparent',
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: '#6180D3',

    },
    triangleRecieverView: {
        //To make Triangle Shape
        position: 'absolute',
        bottom: 0,
        left: '-10@s',
        width: 0,
        height: 0,
        borderLeftWidth: '10@s',
        borderRightWidth: '10@s',
        borderBottomWidth: '20@s',
        borderStyle: 'solid',
        backgroundColor: 'transparent',
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: '#51D3A3'
    },
    matchMessageView: {
        backgroundColor: '#51D3A3',
        borderRadius: '10@s',
        width: '50%',
        padding: '5@s',
    },
    textStyle: {
        fontFamily: 'Poppins-Regular',
        fontSize: '12@s',
        color: colors.white,
    }
});