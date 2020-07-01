import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { ScaledSheet, scale } from 'react-native-size-matters';
import ImageIcon from '../components/common/ImageIcon/ImageIcon';
import RouteNames from './common/RouteNames';
import ImageIconTypes from '../components/common/ImageIcon/ImageIconTypes';
import { colors } from '../styles/base';
import { hexToRgba } from '../utils/colorUtils';

const styles = ScaledSheet.create({
    container: {
        // borderWidth: '15@s',
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',//hexToRgba('#393939', 0.1),
        opacity: 3,
        height: '50@s',
        alignItems: 'center',
        justifyContent: 'flex-start',
        // borderColor: hexToRgba(colors.blackish, 0.01),
        // shadowColor: colors.blackish,
        // shadowOffset: {
        //     width: 0,
        //     height: 5,
        // },
        // shadowOpacity: 0.36,
        // shadowRadius: 6.68,

        // elevation: 11,
    },
    button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // width: '50@s',
        // height: '50@s',
        borderRadius: '25@s',
        marginTop: '3@s'
    },
    selectedView: {
        flex: 1,
        // backgroundColor: hexToRgba('#393939', 0.1),
        // borderColor: hexToRgba('#707070', 0.2),
        flexDirection: 'column',
        alignItems: 'center',
        // justifyContent: 'center',

        // justifyContent: 'flex-start',
        // borderBottomRightRadius: '50@s',
        // paddingBottom: '5@s',
        // borderBottomLeftRadius: '50@s',
        // borderWidth: 4,
        // height: '100%',
        // width: '65@s',
        // marginTop: '-9%'
    },
    unselectedView: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        // justifyContent: 'center',
    }
});

const FOCUSSED_ICONSIZE = scale(35);
const ICONSIZE = scale(35);
export default function BottomTabBar({ state, descriptors, navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };
                let iconName;
                let iconSizeActive = FOCUSSED_ICONSIZE, iconSizeInactive = ICONSIZE;
                switch (route.name) {
                    case RouteNames.MatchesTab:
                        iconName = isFocused ? ImageIconTypes.navMatchActive.name : ImageIconTypes.navMatchInactive.name;
                        break;
                    case RouteNames.Profile:
                        iconName = isFocused ? ImageIconTypes.navProfileActive.name : ImageIconTypes.navProfileInactive.name;
                        break;
                    case RouteNames.MemeTab:
                        iconName = isFocused ? ImageIconTypes.navMemeActive.name : ImageIconTypes.navMemeInactive.name;
                        break;
                    case RouteNames.ChatTab:
                        iconName = isFocused ? ImageIconTypes.navEmailActive.name : ImageIconTypes.navEmailInactive.name;
                        break;
                }

                return (
                    <View style={styles.button}>
                        {isFocused && <View style={styles.selectedView}>
                            <ImageIcon type={iconName} onPress={onPress} size={iconSizeActive} />
                        </View>}
                        {!isFocused && <View style={styles.unselectedView}>
                            <ImageIcon type={iconName} onPress={onPress} size={iconSizeInactive} />
                        </View>}
                    </View>);

                // return (
                //     <TouchableOpacity
                //         accessibilityRole="button"
                //         accessibilityStates={isFocused ? ['selected'] : []}
                //         accessibilityLabel={options.tabBarAccessibilityLabel}
                //         testID={options.tabBarTestID}
                //         onPress={onPress}
                //         onLongPress={onLongPress}
                //         style={{ flex: 1 }}
                //     >
                //         <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
                //             {/* {'Nelson:' + label} */}
                //         </Text>
                //     </TouchableOpacity>
                // );
            })}
        </SafeAreaView>
    );
}