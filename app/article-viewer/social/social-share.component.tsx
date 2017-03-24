import * as React from 'react';
import {ShareButtons, generateShareIcon} from 'react-share';
import {Article} from '../../landing/landing.state';
import {Col, Grid, Row} from 'react-flexbox-grid/lib/index';

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

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const TelegramIcon = generateShareIcon('telegram');
const WhatsappIcon = generateShareIcon('whatsapp');
const GooglePlusIcon = generateShareIcon('google');
const LinkedinIcon = generateShareIcon('linkedin');
const PinterestIcon = generateShareIcon('pinterest');
const VKIcon = generateShareIcon('vk');

const ICON_SIZE = 20;

const style = {
  wrapper: {
    margin: 5,
    cursor: 'pointer'
  }
};

interface Props {
  article: Article;
}

export class SocialShareComponent extends React.Component<Props, any> {

  private url: string;

  constructor(props, context) {
    super(props, context);

    this.url = window.location.href;
  }

  render() {
    return (
      <Grid fluid>
        <Row>

          <Col>
            <div style={style.wrapper}>
              <FacebookShareButton
                url={this.url}
                title={this.props.article.name}
                description={this.props.article.summary}
                picture={this.props.article.imgUrl}>
                <FacebookIcon size={ICON_SIZE} round={true}/>
              </FacebookShareButton>
            </div>
          </Col>

          <Col>
            <div style={style.wrapper}>
              <GooglePlusShareButton url={this.url}>
                <GooglePlusIcon size={ICON_SIZE} round={true}/>
              </GooglePlusShareButton>
            </div>
          </Col>

          <Col>
            <div style={style.wrapper}>
              <LinkedinShareButton
                url={this.url}
                title={this.props.article.name}
                description={this.props.article.summary}>
                <LinkedinIcon size={ICON_SIZE} round={true}/>
              </LinkedinShareButton>
            </div>
          </Col>

          <Col>
            <div style={style.wrapper}>
              <TwitterShareButton
                url={this.url}
                title={this.props.article.name}>
                <TwitterIcon size={ICON_SIZE} round={true}/>
              </TwitterShareButton>
            </div>
          </Col>

          <Col>
            <div style={style.wrapper}>
              <WhatsappShareButton
                url={this.url}
                title={this.props.article.name}>
                <WhatsappIcon size={ICON_SIZE} round={true}/>
              </WhatsappShareButton>
            </div>
          </Col>

          <Col>
            <div style={style.wrapper}>
              <TelegramShareButton
                url={this.url}
                title={this.props.article.name}>
                <TelegramIcon size={ICON_SIZE} round={true}/>
              </TelegramShareButton>
            </div>
          </Col>

          <Col>
            <div style={style.wrapper}>
              <PinterestShareButton
                url={this.url}
                description={this.props.article.summary}
                media={this.props.article.imgUrl}>
                <PinterestIcon size={ICON_SIZE} round={true}/>
              </PinterestShareButton>
            </div>
          </Col>

          <Col>
            <div style={style.wrapper}>
              <VKShareButton
                url={this.url}
                title={this.props.article.name}
                description={this.props.article.summary}
                image={this.props.article.imgUrl}>
                <VKIcon size={ICON_SIZE} round={true}/>
              </VKShareButton>
            </div>
          </Col>

        </Row>
      </Grid>
    );
  }
}
