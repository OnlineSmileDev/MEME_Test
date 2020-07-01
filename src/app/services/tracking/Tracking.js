import Mixpanel from 'react-native-mixpanel';

const token = '';

export default {
    Init: async () => {
        // Mixpanel.sharedInstanceWithToken(token);
        // await Mixpanel.sharedInstanceWithToken(token, false, true);
    },
    Identify: (user) => {
        // Mixpanel.identify(user.id);
        // Mixpanel.set({ "First Name": user.firstName });
        // Mixpanel.set({ "Last Name": user.lastName });
        // Mixpanel.set({ "Birthday": user.birthday });
        // Mixpanel.set({ "$email": user.email });
        // Mixpanel.set({ "$name": user.firstName + ' ' + user.lastName })
    },
    Track: (evt) => {
        // Mixpanel.track(evt);
    },
    Increment: (evt, count) => {
        // Mixpanel.increment(evt, count);
    }
}