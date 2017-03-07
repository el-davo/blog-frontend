import { mount, shallow } from 'enzyme';
import * as React from 'react';
import { spy } from 'sinon';
import AutoComplete from 'material-ui/AutoComplete';
import { WidgetSearch } from './widget-search.component';

describe('<WidgetSearch />', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<WidgetSearch />);
    });

    it('should contain an AutoComplete component', () => {
        wrapper.find(AutoComplete).should.have.length(1);
    });

});
