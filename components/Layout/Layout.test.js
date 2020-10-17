import React from 'react';
import { shallow } from 'enzyme';
import Layout from './Layout';
describe('Layout', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Layout debug />);
    expect(component).toMatchSnapshot();
  });
});