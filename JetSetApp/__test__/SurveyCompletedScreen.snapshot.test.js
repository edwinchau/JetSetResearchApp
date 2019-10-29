import React from "react";
import SurveyCompletedScreen from "../app/screens/SurveyCompletedScreen"
import renderer from "react-test-renderer"

describe("<SurveyCompletedScreen/>", ()=>{
  it("SurveyCompletedScreen snapshot", ()=>{
    let wrapper = null;
    const spyNavigate = jest.fn();
    const props = {
      navaigation: {
        navigate: spyNavigate,
        state:{}
      }
    }
    const params = {
      token: 'someToken'
    }

    beforeEach(() => {
      wrapper = renderer.create(<SurveyCompletedScreen {...props} />)
      wrapper.setState({params: params})
    })
    expect(wrapper).toMatchSnapshot();
  });
});
