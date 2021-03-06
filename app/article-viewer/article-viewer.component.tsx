import {Card, CardHeader, CardText} from 'material-ui/Card';
import * as React from 'react';
import {Col, Grid, Row} from 'react-flexbox-grid/lib/index';
import {LoadingComponent} from '../common/loading.component';
import {ArticleViewerState} from './article-viewer.state';
import {SocialShareComponent} from './social/social-share.component';

interface Props {
  articleId: string;
  articleViewer: ArticleViewerState;
  fetchViewArticle(articleId: string);
}

export class ArticleViewerComponent extends React.Component<Props, any> {

  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    this.props.fetchViewArticle(this.props.articleId);
  }

  render() {
    return (
      <Grid fluid>
        <Row>
          <Col xs={12} sm={12} md={12}>
            {
              !this.props.articleViewer.isFetchingArticle ? (
                  <div>
                    <Card>
                      <CardHeader
                        title={this.props.articleViewer.article.name}
                        avatar={this.props.articleViewer.article.imgUrl}/>
                      <CardText>
                        <div dangerouslySetInnerHTML={{ __html: this.props.articleViewer.article.parsedContent }}></div>

                        <br />
                        <br />

                        <SocialShareComponent article={this.props.articleViewer.article}/>

                      </CardText>
                    </Card>

                    <br />
                    <br />
                  </div>

                ) : (
                  <LoadingComponent />
                )
            }
          </Col>
        </Row>
      </Grid>
    );
  }
}
