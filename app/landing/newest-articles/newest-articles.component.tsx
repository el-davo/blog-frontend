import * as React from 'react';
import {Col, Grid, Row} from 'react-flexbox-grid/lib/index';
import ArticleCardContainer from '../../articles/card/article-card.container';
import {LoadingComponent} from '../../common/loading.component';
import {LandingState} from '../landing.state';

const style = {
  padding: 0
};

interface Props {
  landing: LandingState;
  fetchNewestArticles();
}

export class NewestArticlesComponent extends React.Component<Props, any> {

  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    this.props.fetchNewestArticles();
  }

  render() {
    return (
      <div>
        {
          !this.props.landing.isFetchingNewestArticles ? (
              <Grid fluid style={style}>
                <Row>
                  {
                    this.props.landing.articles.map((article, index) => {
                      return <Col xs={12} sm={6} md={3} key={index}>
                        <ArticleCardContainer article={article}/>
                      </Col>;
                    })
                  }
                </Row>
              </Grid>
            ) : (
              <LoadingComponent />
            )
        }
      </div>
    );
  }
}
