import { colors, dimensions, fonts } from '../../styles/base';
import { ScaledSheet } from 'react-native-size-matters';

export default ScaledSheet.create({
    // container: {
    //     backgroundColor: colors.whitish,
    //     borderWidth: 0, //removeme
    //     // flex: 1,
    //     flexDirection: 'column',
    //     alignItems: 'stretch',
    //     alignContent: 'center'
    // },
    bottomText: {
        fontFamily: 'Poppins-Medium',
        fontSize: '16@msr',
        color: 'white'
    },
    bottom: {
        width: '100%',
        height: '60@s',
        backgroundColor: '#6180D3',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    surface: {
        padding: '1%',
        elevation: '4@msr',
        marginTop: '2%',
        shadowRadius: '10@msr',
        shadowOffset: {
            width: '1@msr',
            height: '2@msr',
        },
        shadowColor: 'rgb(0,0,20)',
        shadowOpacity: 0.15
    },
    btn: {
        alignSelf: 'center',
    },
    image: {
        height: '300@vs',
        width: '300@vs',
        alignSelf: 'center'
    },
    container: {
        backgroundColor: '#FFFFFC',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        alignContent: 'center'
    },
    secondaryText: {
        fontFamily: 'Montserrat-Bold',
        alignSelf: 'center',
        fontSize: '18@msr',
        color: '#6180D3'
        //marginBottom: '2@vs'
    },
    captionText: {
        fontFamily: 'Poppins-Regular',
        fontSize: '12@msr',
        color: '#6180D3',
        marginHorizontal: '30@s',
        marginVertical: '10@s',
        textAlign: 'center'
    },
    top: {
        marginTop: '100@vs',
        justifyContent: 'center',
        alignItems: 'center'
    }
});