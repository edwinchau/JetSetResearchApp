import {
    createStackNavigator,
    createSwitchNavigator,
    createAppContainer
} from 'react-navigation';

import SurveyCompletedScreenExample from './app/screens/SurveyCompletedScreenExample/SurveyCompletedScreenExample';
import SurveyScreenExample from './app/screens/SurveyScreenExample/SurveyScreenExample';
import HomeScreenExample from "./app/screens/HomeScreenExample/HomeScreenExample";
import NewUser from "./app/screens/NewUser/NewUser";

const appStack = createStackNavigator(
    {
      Home: HomeScreenExample,
      Survey: SurveyScreenExample,
      SurveyCompleted: SurveyCompletedScreenExample,
    },
    {
      initialRouteName: 'Home',
    }
);

const newUserStack = createStackNavigator(
    {
        NewUser: NewUser,
        Survey: SurveyScreenExample,
        SurveyCompleted: SurveyCompletedScreenExample,
    },
    {
        initialRouteName: 'NewUser',
    }
);

const sections = createSwitchNavigator(
    {
        NewUserStack: newUserStack,
        AppStack: appStack,
    },
    {
        initialRouteName: 'NewUserStack',
    }

);

const AppContainer = createAppContainer(sections);

export default AppContainer;
