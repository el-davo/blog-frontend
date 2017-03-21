import { Card, CardActions, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import * as React from 'react';
import { Col, Grid, Row } from 'react-flexbox-grid/lib/index';
import { Article } from '../../landing/landing.state';
import { newKeyArticleImg } from '../article-editor.actions';
import { ArticleEditorState } from '../article-editor.state';
import { MarkdownPreviewComponent } from '../preview/markdown-preview.component';
import { ArticleContentInputComponent } from './form/article-content-input.component';
import { ArticleImgInputComponent } from './form/article-img-input.component';
import { ArticleNameInputComponent } from './form/article-name-input.component';
import { ArticleSummaryInputComponent } from './form/article-summary.component';

interface Props {
    articleEditor: ArticleEditorState;
    addArticle(article: Article);
    newKeyArticleName(character: string);
    newKeyArticleSummary(character: string);
    newKeyArticleContent(character: string);
    newKeyArticleImg(character: string);
    requestPreview(markdown: string);
}

export class CreateArticleComponent extends React.Component<Props, any> {

    constructor(props, context) {
        super(props, context);

        this._saveArticle = this._saveArticle.bind(this);
        this._requestPreview = this._requestPreview.bind(this);
    }

    _saveArticle() {
        this.props.addArticle(this.props.articleEditor.newArticle);
    }

    _requestPreview() {
        this.props.requestPreview(this.props.articleEditor.newArticle.content);
    }

    render() {
        return (
            <Grid>
                <Row>
                    <Col xs={12} sm={12} md={12}>
                        <Card>
                            <CardText>
                                <ArticleNameInputComponent articleEditor={this.props.articleEditor}
                                    newKeyArticleName={this.props.newKeyArticleName} />
                                <ArticleSummaryInputComponent articleEditor={this.props.articleEditor}
                                    newKeyArticleSummary={this.props.newKeyArticleSummary} />
                                <ArticleImgInputComponent articleEditor={this.props.articleEditor}
                                    newKeyArticleImg={this.props.newKeyArticleImg} />
                                <ArticleContentInputComponent articleEditor={this.props.articleEditor}
                                    newKeyArticleContent={this.props.newKeyArticleContent} />
                            </CardText>
                            <CardActions>
                                <FlatButton
                                    label="Save"
                                    onClick={this._saveArticle}
                                    disabled={this.props.articleEditor.isCreatingNewArticle} />
                                <FlatButton
                                    label="Preview"
                                    onClick={this._requestPreview}
                                    disabled={this.props.articleEditor.isCreatingNewArticle} />
                            </CardActions>
                        </Card>

                        <br />

                        <MarkdownPreviewComponent
                            name={this.props.articleEditor.newArticle.name}
                            summary={this.props.articleEditor.newArticle.summary}
                            imgUrl={this.props.articleEditor.newArticle.imgUrl}
                            content={this.props.articleEditor.newArticlePreview} />

                        <br />
                    </Col>
                </Row>
            </Grid>
        );
    }
}
