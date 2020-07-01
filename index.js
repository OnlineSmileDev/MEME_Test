/**
 * @format
 */
if (__DEV__) {
    import('./src/app/middleware/reactron/ReactotronConfig').then(() => console.log('Reactotron Is Configured'))
}
else {
    console.log(' Reactotron not in dev mode');
}
import { AppRegistry } from 'react-native';
import App from './src/app/App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
