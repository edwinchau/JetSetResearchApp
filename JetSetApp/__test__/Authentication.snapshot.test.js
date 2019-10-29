import React from "react";
import Authentication from "../app/screens/Authentication"
import renderer from "react-test-renderer"

describe("<Authentication/>", ()=>{
  it("snapshot", async ()=>{
    expect(renderer.create(<Authentication/>).toJSON()).toMatchSnapshot();
  });
});
