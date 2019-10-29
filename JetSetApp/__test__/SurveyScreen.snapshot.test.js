import React from "react";
import SurveyScreen from "../app/screens/SurveyScreen"
import renderer from "react-test-renderer"

describe("<SurveyScreen/>", ()=>{
  it("SurveyScreen snapshot", ()=>{
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
      wrapper = renderer.create(<SurveyScreen {...props} />)
      wrapper.setState({params: params})
    })
    expect(wrapper).toMatchSnapshot();
  });
});
