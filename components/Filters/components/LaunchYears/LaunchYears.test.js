import React from 'react';
import Adpapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import Button from '../../../Button/Button'


configure ({ adpapter : new Adpapter()});

describe( "<LaunchYears/>", ()=>{
    it("should render exactly 15 <Button /> element", () =>{
        const wrap = shallow(<Button/>);
        expect( wrap.find(Button)).toHaveLength(15);
    });

});