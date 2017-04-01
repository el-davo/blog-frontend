import * as React from 'react';
import {shallow} from 'enzyme';
import * as Breadcrumbs from 'react-breadcrumbs';
import {BreadcrumbComponent} from './breadcrumb.component';

describe('<BreadcrumbComponent />', () => {

  let wrapper;

  beforeEach(() => {
    const routes = {};
    const params = {};
    wrapper = shallow(<BreadcrumbComponent routes={routes} params={params}/>);
  });

  describe('layout', () => {

    it('should contain a Breadcrumbs component', () => {
      wrapper.find(Breadcrumbs).should.have.length(1);
    });
  });

});
