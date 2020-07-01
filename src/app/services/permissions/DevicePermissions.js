import { check, request, PERMISSIONS, RESULTS, checkNotifications, requestNotifications } from 'react-native-permissions';

function checkPermission(_perm) {
    check(_perm)
        .then(result => {
            switch (result) {
                case RESULTS.UNAVAILABLE:
                    console.log(
                        'This feature is not available (on this device / in this context)',
                    );
                    break;
                case RESULTS.DENIED:
                    console.log(
                        'The permission has not been requested / is denied but requestable',
                    );
                    break;
                case RESULTS.GRANTED:
                    console.log('The permission is granted');
                    break;
                case RESULTS.BLOCKED:
                    console.log('The permission is denied and not requestable anymore');
                    break;
            }
        }).catch(error => {
        });
}

function requestPermission(_perm) {
    request(_perm).then(result => {
        // …
    });
}

function requestNotif(_notifArray) {
    requestNotifications(_notifArray).then(({ status, settings }) => {
        // …
    });
}

export default MemePermissions = {
    request: {
        locationAlways: () => {
            requestPermission(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
        },
        alertNotifications: () => {
            requestNotif(['alert', 'badge', 'notificationCenter']);
        },
        contactPermission: () => {
            requestPermission(PERMISSIONS.IOS.CONTACTS);
        }
    }
}