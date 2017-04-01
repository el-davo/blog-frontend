import {shallow} from 'enzyme';
import * as React from 'react';
import Avatar from 'material-ui/Avatar';
import {Card, CardText, CardActions} from 'material-ui/Card';
import {AboutCardComponent} from './about-card.component';

describe('<AboutCardComponent />', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<AboutCardComponent />);
  });

  describe('layout', () => {

    it('should contain a Avatar', () => {
      wrapper.find(Avatar).should.have.length(1);
    });

    it('should have the correct size Avatar', () => {
      wrapper.find({size: 125}).should.have.length(1);
    });

    it('should have the correct image url', () => {
      wrapper.find({src: 'app/img/el-davo.jpg'}).should.have.length(1);
    });

    it('should contain a Card', () => {
      wrapper.find(Card).should.have.length(1);
    });

    it('should contain card text', () => {
      wrapper.find(CardText).should.have.length(1);
    });

    it('should contain CardActions', () => {
      wrapper.find(CardActions).should.have.length(1);
    });

    it('should contain a link to linkedIn', () => {
      wrapper.find(CardActions).find({href: 'https://www.linkedin.com/in/david-ahern-02696947'}).should.have.length(1);
      wrapper.find(CardActions).find({label: 'linkedIn'}).should.have.length(1);
    });

    it('should contain a link to github', () => {
      wrapper.find(CardActions).find({href: 'https://github.com/el-davo'}).should.have.length(1);
      wrapper.find(CardActions).find({label: 'Github'}).should.have.length(1);
    });

  });

});
