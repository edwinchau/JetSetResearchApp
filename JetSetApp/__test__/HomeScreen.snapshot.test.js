import React from "react";
import HomeScreen from "../app/screens/HomeScreen"
import renderer from "react-test-renderer"
import moment from 'moment-timezone'

const aDay = {
  time: moment();
}

describe("<HomeScreen/>", ()=>{
  it("snapshot for home screen",  ()=>{
    moment.tz.setDefault('Australia/Sydney');
    expect(aDay).toMatchSnapshot({
      time: expect.any(Date)
    });
  });
});
