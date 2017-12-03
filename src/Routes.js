import { StackNavigator } from 'react-navigation';

import Splash from './components/Splash';
import Login from './components/Login';

const Routes = StackNavigator({
    Splash: {
        screen: Splash,
        navigationOptions: {
            header: false
        }
    },
    Login: {
        screen: Login,
        navigationOptions: {
            header: false
        }
    }
});


export default Routes;