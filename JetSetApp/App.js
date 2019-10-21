import {
    createStackNavigator,
    createSwitchNavigator,
    createAppContainer
} from 'react-navigation';

import SurveyCompletedScreen from './app/screens/SurveyCompletedScreen'
import SurveyScreen from './app/screens/SurveyScreen';
import HomeScreen from "./app/screens/HomeScreen";
import NewUser from "./app/screens/NewUser";
import Authentication from "./app/screens/Authentication";
import ResearcherPage from "./app/screens/ResearcherScreen"

const appStack = createStackNavigator(
    {
      Home: HomeScreen,
      Survey: SurveyScreen,
      SurveyCompleted: SurveyCompletedScreen,
      ResearcherPage: ResearcherPage
    },
    {
      initialRouteName: 'Home',
    }
);

const newUserStack = createStackNavigator(
    {
        NewUser: NewUser,
        Survey: SurveyScreen,
        SurveyCompleted: SurveyCompletedScreen,
    },
    {
        initialRouteName: 'NewUser',
    }
);

const sections = createSwitchNavigator(
    {
        NewUserStack: newUserStack,
        AppStack: appStack,
        Authentication: Authentication,
    },
    {
        initialRouteName: 'Authentication',
    }

);

const AppContainer = createAppContainer(sections);

export default AppContainer;
