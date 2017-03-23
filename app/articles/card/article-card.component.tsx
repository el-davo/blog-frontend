import { Card, CardActions, CardMedia, CardTitle } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import * as React from 'react';
import { Link } from 'react-router';
import { AdminState } from '../../admin/admin.state';
import { Article } from '../../landing/landing.state';

const style = {
    marginTop: 30,
    marginRight: 20
};

interface Props {
    admin: AdminState;
    article: Article;
    showDeleteArticleModal(article: Article);
}

export class ArticleCardComponent extends React.Component<Props, any> {

    constructor(props, context) {
        super(props, context);

        this._showDeleteArticleModal = this._showDeleteArticleModal.bind(this);
    }

    _showDeleteArticleModal() {
        this.props.showDeleteArticleModal(this.props.article);
    }

    render() {
        return (
            <Card style={style}>
                <Link to={`/articles/${this.props.article.id}`}>
                    <CardMedia
                        overlay={<CardTitle title={this.props.article.name} subtitle={this.props.article.summary} />}>
                        <img src={this.props.article.imgUrl} />
                    </CardMedia>
                </Link>
                {
                    this.props.admin.isLoggedIn ? (
                        <CardActions>
                            <Link to={`/articles/edit/${this.props.article.id}`}>
                                <FlatButton label="Edit" />
                            </Link>
                            <FlatButton label="Delete" onClick={this._showDeleteArticleModal} />
                        </CardActions>
                    ) : (
                            <div />
                        )
                }
            </Card>
        );
    }
}
