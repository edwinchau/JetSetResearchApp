import React from "react";
import App from "../App"
import renderer from "react-test-renderer"

describe("<App/>", ()=>{
  it("snapshot", async ()=>{
    expect(renderer.create(<App/>).toJSON()).toMatchSnapshot();
  });
});
