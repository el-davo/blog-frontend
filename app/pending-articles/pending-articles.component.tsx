import Avatar from 'material-ui/Avatar';
import { Card, CardActions, CardText } from 'material-ui/Card';
import { List, ListItem } from 'material-ui/List';
import * as React from 'react';
import { Col, Grid, Row } from 'react-flexbox-grid/lib/index';
import { fetchPendingArticles } from './pending-articles.actions';
import { PendingArticlesState } from './pending-articles.state';

interface Props {
    pendingArticles: PendingArticlesState;
    fetchPendingArticles();
}

export class PendingArticlesComponent extends React.Component<Props, any> {

    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {
        this.props.fetchPendingArticles();
    }

    render() {
        return (
            <Card>
                <CardText>
                    <List>
                        {
                            this.props.pendingArticles.pendingArticles.map((article, key) => {
                                return <ListItem
                                    key={key}
                                    leftAvatar={<Avatar src={article.imgUrl} />}
                                    primaryText={article.name}
                                    secondaryText={article.summary} />;
                            })
                        }
                    </List>
                </CardText>
            </Card>
        );
    }
}
