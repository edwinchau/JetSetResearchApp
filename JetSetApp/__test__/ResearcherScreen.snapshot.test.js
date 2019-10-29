import React from "react";
import ResearcherScreen from "../app/screens/ResearcherScreen"
import renderer from "react-test-renderer"

describe("<ResearcherScreen/>", ()=>{
  it("snapshot", async ()=>{
    expect(renderer.create(<ResearcherScreen/>).toJSON()).toMatchSnapshot();
  });
});
