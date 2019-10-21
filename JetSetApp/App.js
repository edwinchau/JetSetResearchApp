import {
    createStackNavigator,
    createSwitchNavigator,
    createAppContainer
} from 'react-navigation';

import SurveyCompletedScreenExample from './app/screens/SurveyCompletedScreenExample'
import SurveyScreenExample from './app/screens/SurveyScreenExample';
import HomeScreenExample from "./app/screens/HomeScreenExample";
import NewUser from "./app/screens/NewUser";
import Authentication from "./app/screens/Authentication";
import ResearcherPage from "./app/screens/ResearcherScreen"

const appStack = createStackNavigator(
    {
      Home: HomeScreenExample,
      Survey: SurveyScreenExample,
      SurveyCompleted: SurveyCompletedScreenExample,
      ResearcherPage: ResearcherPage
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
        Authentication: Authentication,
    },
    {
        initialRouteName: 'Authentication',
    }

);

const AppContainer = createAppContainer(sections);

export default AppContainer;
