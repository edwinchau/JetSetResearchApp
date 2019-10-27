import {SurveyAnswersParse, SurveyQuestions} from "../app/resources/SurveyAnswersParse";


const surveyQs = ["this", "is", "test", "case"];
const surveyAs = ["And", "this", "is", "answers"];

const getNow = () => new Date(Date.now());

describe("This is test suits for SurveyAnswersParse", ()=> {
  it("SurveyAnswersParse() is tested.", ()=>{
    SurveyAnswersParse(surveyAs, surveyQs);
    jest.spyOn(global.Date, 'now').mockImplementationOnce(() =>
        new Date('2019-05-14T11:01:58.135Z').valueOf()
      );
    expect(getNow()).toEqual(new Date('2019-05-14T11:01:58.135Z'));
  });

  it("SurveyQuestions() is tested.", ()=>{
    let result = SurveyQuestions(surveyQs);
    expect(result).toBeDefined();
  });

});
