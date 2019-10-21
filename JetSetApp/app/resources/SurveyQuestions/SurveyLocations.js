import {survey as BreakfastQuestions} from './BreakfastQuestions';
import {survey as LunchQuestions} from './LunchQuestions';
import {survey as DinnerQuestions} from './DinnerQuestions';
import {survey as NewUserQuestions} from './NewUserQuestions';
import {survey as FlightBreakfastQuestions} from './FlightQuestionsBreakfast';
import {survey as FlightLunchQuestions} from './FlightQuestionsLunch';
import {survey as FlightDinnerQuestions} from './FlightQuestionsDinner';

let SurveyLocations = {};

SurveyLocations['BreakfastQuestions'] = BreakfastQuestions;
SurveyLocations['LunchQuestions'] = LunchQuestions;
SurveyLocations['DinnerQuestions'] = DinnerQuestions;
SurveyLocations['NewUserQuestions'] =  NewUserQuestions;
SurveyLocations['FlightBreakfastQuestions'] =  FlightBreakfastQuestions;
SurveyLocations['FlightLunchQuestions'] =  FlightLunchQuestions;
SurveyLocations['FlightDinnerQuestions'] =  FlightDinnerQuestions;

export default SurveyLocations
