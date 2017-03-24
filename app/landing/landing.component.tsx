import { Card, CardText } from 'material-ui/Card';
import * as React from 'react';
import { Col, Grid, Row } from 'react-flexbox-grid/lib/index';
import { LoadingComponent } from '../common/loading.component';
import { AboutCardComponent } from './about/about-card.component';
import { LandingState } from './landing.state';
import { NewestArticlesComponent } from './newest-articles/newest-articles.component';

interface Props {
  landing: LandingState;
  fetchNewestArticles();
}

export class LandingComponent extends React.Component<Props, any> {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <Grid fluid>
        <Row>
          <Col xs={12} sm={12} md={12}>
            <AboutCardComponent />
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={12}>
            <NewestArticlesComponent landing={this.props.landing} fetchNewestArticles={this.props.fetchNewestArticles} />

            <br />
            <br />
          </Col>
        </Row>
      </Grid>
    );
  }
}
