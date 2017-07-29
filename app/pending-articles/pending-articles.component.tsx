import Avatar from 'material-ui/Avatar';
import {Card, CardText} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';
import MoreVertIcon from 'material-ui-icons/MoreVert';
import Menu, {MenuItem} from 'material-ui/Menu';
import {grey400} from 'material-ui/colors';
import IconButton from 'material-ui/IconButton';
import {Link} from 'react-router';
import * as React from 'react';
import {Col, Grid, Row} from 'react-flexbox-grid/lib/index';
import {Article} from '../landing/landing.state';
import {PendingArticlesState} from './pending-articles.state';

interface Props {
    pendingArticles: PendingArticlesState;
    fetchPendingArticles();
    showDeleteArticleModal(article: Article);
}

export class PendingArticlesComponent extends React.Component<Props, any> {

    constructor(props, context) {
        super(props, context);

        this._showDeleteArticleModal = this._showDeleteArticleModal.bind(this);
    }

    componentDidMount() {
        this.props.fetchPendingArticles();
    }

    _showDeleteArticleModal(article: Article) {
        this.props.showDeleteArticleModal(article);
    }

    render() {

        const iconButtonElement = (
            <IconButton
                touch={true}
                tooltip="more"
                tooltipPosition="bottom-left"
            >
                <MoreVertIcon color={grey400}/>
            </IconButton>
        );

        const getRightIconMenu = (article: Article) => {
            return <Menu iconButtonElement={iconButtonElement}>
                <Link to={`/articles/edit/${article.id}`}>
                    <MenuItem>Edit Article</MenuItem>
                </Link>
                <MenuItem onTouchTap={() => this._showDeleteArticleModal(article)}>Delete Article</MenuItem>
            </Menu>;
        };

        return (
            <Grid fluid>
                <Row>
                    <Col xs={12} sm={12} md={12}>
                        <Card>
                            <CardText>
                                <List>
                                    {
                                        this.props.pendingArticles.pendingArticles.map((article, key) => {
                                            return <ListItem
                                                key={key}
                                                leftAvatar={<Avatar src={article.imgUrl}/>}
                                                primaryText={article.name}
                                                secondaryText={article.summary}
                                                rightIconButton={getRightIconMenu(article)}/>;
                                        })
                                    }
                                </List>
                            </CardText>
                        </Card>
                    </Col>
                </Row>
            </Grid>
        );
    }
}
