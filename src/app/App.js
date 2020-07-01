import 'react-native-gesture-handler';

import React, { Component } from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
// import RootStack from './navigation/routes';
import RootStack from './navigation/routes';
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './state/reducer/rootReducer';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import PushNotificationManager from './services/notifications/PushNotificationManager';


export default class App extends Component {
    render() {
        return (
            <StoreProvider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <PaperProvider settings={{
                        icon: props => <AwesomeIcon {...props} />,
                    }}>
                        <PushNotificationManager>
                            <RootStack />
                        </PushNotificationManager>
                    </PaperProvider>
                </PersistGate>
            </StoreProvider>
        );
    }
}

