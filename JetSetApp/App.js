import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation';

import SurveyCompletedScreenExample from './app/screens/SurveyCompletedScreenExample/SurveyCompletedScreenExample';
import SurveyScreenExample from './app/screens/SurveyScreenExample/SurveyScreenExample';
import HomeScreenExample from "./app/screens/HomeScreenExample/HomeScreenExample";
import SaveData from "./app/screens/SaveDataExample/SaveData";

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

// export default SaveData;