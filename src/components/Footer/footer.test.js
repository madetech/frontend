import React from 'react';
import { shallow } from 'enzyme';
import Footer from './index';

describe('<Footer>', () => {
    it('displays the correct copyright year', () => {
        const wrapper = shallow(<Footer />);
        const currentYear = new Date().getFullYear();
        expect(wrapper.find({"data-test": "copyrightYear"}).length).toEqual(1);
        expect(wrapper.find({"data-test": "copyrightYear"}).text()).toEqual(currentYear.toString());
    })
})
