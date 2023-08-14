import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Home from './Home'
import Browser from './Browser'

const RootStack = createStackNavigator({
  Home: { screen: Home },
  Browser: { screen: Browser }
});

const App = createAppContainer(RootStack);

export default App;