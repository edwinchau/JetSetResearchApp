import {survey as BreakfastQuestions} from './BreakfastQuestions';
import {survey as LunchQuestions} from './LunchQuestions';
import {survey as DinnerQuestions} from './DinnerQuestions';
import {survey as NewUserQuestions} from './NewUserQuestions';

let SurveyLocations = {};

SurveyLocations['BreakfastQuestions'] = BreakfastQuestions;
SurveyLocations['LunchQuestions'] = LunchQuestions;
SurveyLocations['DinnerQuestions'] = DinnerQuestions;
SurveyLocations['NewUserQuestions'] =  NewUserQuestions;

export default SurveyLocations
