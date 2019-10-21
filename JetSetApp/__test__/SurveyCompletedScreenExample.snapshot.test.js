import React from "react";
import SurveyCompletedScreen from "../app/screens/SurveyCompletedScreen"
import renderer from "react-test-renderer"

describe("<SurveyCompletedScreenExapmle/>", ()=>{
  it("snapshot", ()=>{
    expect(renderer.create(<SurveyCompletedScreen/>).toJSON()).toMatchSnapshot();
  });
});
