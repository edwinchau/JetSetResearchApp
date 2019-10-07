import React from "react";
import HomeScreenExample from "../app/screens/HomeScreenExample/HomeScreenExample"
import renderer from "react-test-renderer"

describe("<HomeScreenExample/>", ()=>{
  it("snapshot", ()=>{
    expect(renderer.create(<HomeScreenExample/>).toJSON()).toMatchSnapshot();
    
  });
});
