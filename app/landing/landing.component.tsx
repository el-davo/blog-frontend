import { Card, CardText } from 'material-ui/Card';
import * as React from 'react';
import { LoadingComponent } from '../common/loading.component';
import { AboutCardComponent } from './about/about-card.component';
import { LandingState } from './landing.state';

interface Props {
  landing: LandingState;
  fetchNewestArticles();
}

export class LandingComponent extends React.Component<Props, any> {

  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    this.props.fetchNewestArticles();
  }

  render() {
    return (
      <div>
        <AboutCardComponent />
      </div>
    );
  }
}
