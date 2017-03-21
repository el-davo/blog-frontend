import { Card, CardActions, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import * as React from 'react';
import { Col, Grid, Row } from 'react-flexbox-grid/lib/index';
import { Article } from '../../landing/landing.state';
import { editToggleArticlePublic } from '../article-editor.actions';
import { ArticleEditorState } from '../article-editor.state';
import { MarkdownPreviewComponent } from '../preview/markdown-preview.component';
import { ArticleContentInputComponent } from './form/article-content-input.component';
import { ArticleImgInputComponent } from './form/article-img-input.component';
import { ArticleNameInputComponent } from './form/article-name-input.component';
import { ArticlePublicToggleComponent } from './form/article-public-toggle.component';
import { ArticleSummaryInputComponent } from './form/article-summary.component';

interface Props {
    articleEditor: ArticleEditorState;
    articleId: string;
    fetchEditArticle(articleId: string);
    editArticle(article: Article);
    editKeyArticleName(character: string);
    editKeyArticleSummary(character: string);
    editKeyArticleImg(character: string);
    editKeyArticleContent(character: string);
    editToggleArticlePublic();
    editingRequestPreview(markdown: string);
}

export class EditArticleComponent extends React.Component<Props, any> {

    constructor(props, context) {
        super(props, context);

        this._editArticle = this._editArticle.bind(this);
        this._editingRequestPreview = this._editingRequestPreview.bind(this);
    }

    componentDidMount() {
        this.props.fetchEditArticle(this.props.articleId);
    }

    _editArticle() {
        this.props.editArticle(this.props.articleEditor.editingArticle);
    }

    _editingRequestPreview() {
        this.props.editingRequestPreview(this.props.articleEditor.editingArticle.content);
    }

    render() {
        return (
            <Grid>
                <Row>
                    <Col xs={12} sm={12} md={12}>
                        <Card>
                            <CardText>
                                <ArticleNameInputComponent
                                    articleEditor={this.props.articleEditor}
                                    editKeyArticleName={this.props.editKeyArticleName} />
                                <ArticleSummaryInputComponent
                                    articleEditor={this.props.articleEditor}
                                    editKeyArticleSummary={this.props.editKeyArticleSummary} />
                                <ArticleImgInputComponent articleEditor={this.props.articleEditor}
                                    editKeyArticleImg={this.props.editKeyArticleImg} />

                                <br />
                                <br />
                                <ArticlePublicToggleComponent articleEditor={this.props.articleEditor}
                                    editToggleArticlePublic={this.props.editToggleArticlePublic} />

                                <br />

                                <ArticleContentInputComponent
                                    articleEditor={this.props.articleEditor}
                                    editKeyArticleContent={this.props.editKeyArticleContent} />
                            </CardText>
                            <CardActions>
                                <FlatButton label="Edit" onClick={this._editArticle} />
                                <FlatButton label="Preview" onClick={this._editingRequestPreview} />
                            </CardActions>
                        </Card>

                        <br />

                        <MarkdownPreviewComponent
                            name={this.props.articleEditor.editingArticle.name}
                            summary={this.props.articleEditor.editingArticle.summary}
                            imgUrl={this.props.articleEditor.editingArticle.imgUrl}
                            content={this.props.articleEditor.editingArticlePreview} />

                        <br />
                    </Col>
                </Row>
            </Grid>
        );
    }
}
