import * as React from 'react';
import {shallow} from 'enzyme';
import {SocialShareComponent} from './social-share.component';
import {ShareButtons, generateShareIcon} from 'react-share';
import {Article} from '../../landing/landing.state';

describe('<SocialShareComponent />', () => {

  let wrapper;
  const {
    FacebookShareButton,
    GooglePlusShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    TelegramShareButton,
    WhatsappShareButton,
    PinterestShareButton,
    VKShareButton
  } = ShareButtons;

  beforeEach(() => {
    const article = {
      id: 'articleId',
      name: 'articleName',
      imgUrl: 'http://localhost:3001/img.png'
    } as Article;

    wrapper = shallow(<SocialShareComponent article={article}/>);
  });

  describe('layout', () => {

    it('should contain a facebook share button', () => {
      wrapper.find(FacebookShareButton).should.have.length(1);
    });

    it('should contain a google+ share button', () => {
      wrapper.find(GooglePlusShareButton).should.have.length(1);
    });

    it('should contain a LinkedIn share button', () => {
      wrapper.find(LinkedinShareButton).should.have.length(1);
    });

    it('should contain a twitter share button', () => {
      wrapper.find(TwitterShareButton).should.have.length(1);
    });

    it('should contain a whats-app share button', () => {
      wrapper.find(WhatsappShareButton).should.have.length(1);
    });

    it('should contain a telegram share button', () => {
      wrapper.find(TelegramShareButton).should.have.length(1);
    });

    it('should contain a pinterest share button', () => {
      wrapper.find(PinterestShareButton).should.have.length(1);
    });

    it('should contain a vk share button', () => {
      wrapper.find(VKShareButton).should.have.length(1);
    });
  });

});
