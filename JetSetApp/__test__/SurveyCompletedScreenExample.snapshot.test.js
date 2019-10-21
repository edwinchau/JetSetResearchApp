import React from "react";
import SurveyCompletedScreenExample from "../app/screens/SurveyCompletedScreenExample"
import renderer from "react-test-renderer"

describe("<SurveyCompletedScreenExapmle/>", ()=>{
  it("snapshot", ()=>{
    expect(renderer.create(<SurveyCompletedScreenExample/>).toJSON()).toMatchSnapshot();
  });
});
