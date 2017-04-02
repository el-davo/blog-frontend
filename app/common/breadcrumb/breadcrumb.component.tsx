import * as React from 'react';
import Breadcrumbs from 'react-breadcrumbs';
import {Col, Grid, Row} from 'react-flexbox-grid/lib/index';

const style = {
  container: {
    marginBottom: 15
  }
};

interface Props {
  routes: any;
  params?: any;
}

export class BreadcrumbComponent extends React.Component<Props, any> {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <Grid fluid style={style.container}>
        <Row>
          <Col xs={12} sm={12} md={12}>
            <Breadcrumbs
              routes={this.props.routes}
              params={this.props.params}
              excludes={['Edit']}
              displayMissing={false}
            />
          </Col>
        </Row>
      </Grid>
    );
  }
}
