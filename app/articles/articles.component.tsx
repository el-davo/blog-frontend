import * as React from 'react';
import {Card, CardText} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import {Col, Grid, Row} from 'react-flexbox-grid/lib/index';
import {Link} from 'react-router';
import {ArticlesState} from './articles.state';
import {LoadingComponent} from '../common/loading.component';

interface Props {
  articles: ArticlesState;
  fetchAllArticles();
}

export class ArticlesComponent extends React.Component<Props, any> {

  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    this.props.fetchAllArticles();
  }

  render() {
    return (
      <Grid fluid>
        <Row>
          <Col xs={12} sm={12} md={12}>
            {
              !this.props.articles.isFetchingAllArticles ? (
                  <Card>
                    <CardText>
                      <List>
                        {
                          this.props.articles.list.map((article, key) => {
                            return <Link key={key} to={`/articles/${article.id}`}>
                              <ListItem
                                primaryText={article.name}
                                secondaryText={article.summary}
                                leftAvatar={<Avatar src={article.imgUrl}/>}/>
                            </Link>;
                          })
                        }
                      </List>
                    </CardText>
                  </Card>
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
