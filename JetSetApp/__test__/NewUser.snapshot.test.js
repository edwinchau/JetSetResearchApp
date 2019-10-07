import React from "react";
import NewUser from "../app/screens/NewUser/NewUser"
import renderer from "react-test-renderer"

describe("<NewUser/>", ()=>{
  it("snapshot", ()=>{
    expect(renderer.create(<NewUser/>).toJSON()).toMatchSnapshot();
  });
});
