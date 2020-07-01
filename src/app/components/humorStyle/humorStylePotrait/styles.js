import { colors, dimensions, fonts } from '../../../styles/base';
import { ScaledSheet, scale } from 'react-native-size-matters';

export default {
    light: ScaledSheet.create({
        container: {
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#FFC562',
            marginHorizontal: '10@s',
            width: dimensions.fullWidth * 0.9 / 2,
            marginHorizontal: (dimensions.fullWidth * 0.05) / 2,
            borderRadius: '10@msr',
            height: '90@s',
            paddingHorizontal: '3%'
        },
        percentage: {
            fontSize: '22@msr',
            color: 'white',
            fontFamily: 'Montserrat-Regular',
            fontWeight: '500'
        },
        title: {
            paddingVertical: '5@s',
            fontSize: '14@s',
            width: '100%',
            textAlign: 'center',
            color: 'white',
            fontFamily: 'Montserrat-SemiBold'
        },
        tinyCaption: {
            fontSize: '8@s',
            color: 'white',
            fontFamily: 'Montserrat-Regular',
            textTransform: 'uppercase'
        },
    }),
    potrait: ScaledSheet.create({
        image: {
            width: '75@s',
            height: '75@s',
            marginVertical: '5@s'
        },
        container: {
            borderWidth: 0,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#FFC562',
            marginHorizontal: '10@s',
            width: dimensions.fullWidth * 0.9 / 2,
            marginHorizontal: (dimensions.fullWidth * 0.05) / 2,
            borderRadius: '10@msr',
            minHeight: '200@s',
            paddingHorizontal: '3%',
            marginTop: '-15@s'
        },
        percentage: {
            paddingTop: '10@s',
            fontSize: '22@msr',
            color: 'white',
            fontFamily: 'Montserrat-Regular',
            fontWeight: '500'
        },
        title: {
            fontSize: '18@s',
            width: '100%',
            textAlign: 'center',
            color: 'white',
            fontFamily: 'Montserrat-SemiBold'
        },
        tinyCaption: {
            fontSize: '8@msr',
            color: 'white',
            fontFamily: 'Montserrat-Regular',
            textTransform: 'uppercase'
        },
        icon: {

        },
        hr: {
            width: '100%',
            alignSelf: 'center',
            // marginHorizontal: '1%',
            height: '2%',
            borderTopWidth: 1,
            borderTopColor: 'rgba(255,255,255,0.5)'
        },
        text: {
            fontSize: '8@s',
            color: 'white',
            // textAlign: 'center',
            fontFamily: 'Poppins-Bold',
            marginHorizontal: '2@msr',
            fontWeight: '600',
            width: '100%',
        }
    }),
    landscape: ScaledSheet.create({
        image: {
            width: '135@s',
            height: '135@s'
        },
        container: {
            marginTop: '10@s',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#FFC562',
            borderRadius: '10@msr',
            width: dimensions.fullWidth * 0.95,
            height: '180@s',
            marginHorizontal: dimensions.fullWidth * 0.025
        },
        content: {
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            width: dimensions.fullWidth / 2 - scale(10),
        },
        percentage: {
            paddingTop: '20@s',
            fontSize: '22@msr',
            color: colors.whitish,
            fontFamily: 'Montserrat-Regular'
        },
        title: {
            fontSize: '19@s',
            color: 'white',
            fontFamily: 'Montserrat-SemiBold'
        },
        tinyCaption: {
            fontSize: '8@msr',
            color: 'white',
            fontFamily: 'Montserrat-Regular',
            textTransform: 'uppercase'
        },
        icon: {
            alignSelf: 'center',
            width: dimensions.fullWidth / 2 - scale(20),
            justifyContent: 'center',
            alignItems: 'center'
        },
        hr: {

            width: '80%',
            alignSelf: 'center',
            marginVertical: '5%',
            height: '1%',
            borderTopWidth: 1,
            borderTopColor: 'rgba(255,255,255,0.5)'
        },
        text: {
            fontSize: '10@s',
            color: 'white',
            textAlign: 'center',
            fontFamily: 'Poppins-Bold',
            marginVertical: '2@vs',
            marginHorizontal: '2@msr',
            fontWeight: '600',
            paddingBottom: '20@s'
        }
    })

}