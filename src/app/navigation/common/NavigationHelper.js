// import { StackActions, NavigationActions } from "@react-navigation/stack";

import { CommonActions } from "@react-navigation/native";

export function navigateOutWithReset(navigation, screen, params = {}) {
    // const resetAction = StackActions.reset({
    //     index: 0,
    //     actions: [NavigationActions.navigate({ name: screen, params: params })],
    // });
    // navigation.dispatch(resetAction);
    navigation.navigate({ name: screen, params: params });
}
export function navigateOutWithResetV5(navigation, screen, params = {}) {
    navigation.dispatch(
        CommonActions.reset({
            index: 0,
            routes: [
                {
                    name: screen,
                    params: params,
                },
            ],
        })
    );
}

export function navigateOut(navigation, screen) {
    // const navigateAction = NavigationActions.navigate({
    //     name: screen,
    //     params: {},
    //     action: NavigationActions.navigate({ routeName: screen }),
    // });
    navigation.navigate({ name: screen, params: {} });
}