import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation';
import SurveyCompletedScreenExample from './app/screens/SurveyCompletedScreenExample/SurveyCompletedScreenExample';
import SurveyScreenExample from './app/screens/SurveyScreenExample/SurveyScreenExample';
import HomeScreenExample from "./app/screens/HomeScreenExample/HomeScreenExample";

// const stackNav = createStackNavigator({
//   Home: {
//     screen: HomeScreenExample
//   },
//   Survey: {
//     screen: SurveyScreenExample
//   },
//   SurveyCompleted: {
//     screen: SurveyCompletedScreenExample
//   },
// });

const stackNav = createStackNavigator(
    {
      Home: HomeScreenExample,
      Survey: SurveyScreenExample,
      SurveyCompleted: SurveyCompletedScreenExample,
    },
    {
      initialRouteName: 'Home',
    }
);


const AppContainer = createAppContainer(stackNav);

export default AppContainer;
