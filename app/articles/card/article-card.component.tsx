import Card, {CardActions, CardContent, CardMedia} from 'material-ui/Card';
import Button from 'material-ui/Button';
import * as React from 'react';
import {Link} from 'react-router';
import {AdminState} from '../../admin/admin.state';
import {Article} from '../../landing/landing.state';

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
                <CardContent>
                    <Link to={`/articles/${this.props.article.id}`}>
                        <CardMedia>
                            <img src={this.props.article.imgUrl} style={{minHeight: 200, maxHeight: 200}}/>
                        </CardMedia>
                    </Link>
                    {this.props.article.summary}
                    {
                        this.props.admin.isLoggedIn ? (
                            <CardActions>
                                <Link to={`/articles/edit/${this.props.article.id}`}>
                                    <Button>Edit</Button>
                                </Link>
                                <Button onClick={this._showDeleteArticleModal}>Delete</Button>
                            </CardActions>
                        ) : (
                            <div />
                        )
                    }
                </CardContent>
            </Card>
        );
    }
}
