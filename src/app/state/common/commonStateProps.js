
export default function commonStateProps(state, routeName) {
    const { screen, user, timers } = state;
    return {
        thisScreen: screen[routeName] ?? {},
        user: user,
        timers: timers
    }
}