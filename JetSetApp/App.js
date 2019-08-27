import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation';
import SurveyCompletedScreenExample from './app/screens/SurveyCompletedScreenExample';
import SurveyScreenExample from './app/screens/SurveyScreenExample';

const stackNav = createStackNavigator({
  Survey: {
    screen: SurveyScreenExample
  },
  SurveyCompleted: {
    screen: SurveyCompletedScreenExample
  }
});

const AppContainer = createAppContainer(stackNav);

export default AppContainer;
