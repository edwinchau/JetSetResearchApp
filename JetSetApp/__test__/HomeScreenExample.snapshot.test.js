import React from "react";
import HomeScreenExample from "../app/screens/HomeScreen/HomeScreen"
import renderer from "react-test-renderer"

describe("<HomeScreen/>", ()=>{
  it("snapshot", ()=>{
    expect(renderer.create(<HomeScreenExample/>).toJSON()).toMatchSnapshot();

  });
});
