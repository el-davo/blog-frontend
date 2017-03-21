import TextField from 'material-ui/TextField';
import * as React from 'react';
import { ArticleEditorState } from '../../article-editor.state';

interface Props {
    articleEditor: ArticleEditorState;
    newKeyArticleSummary(character: string);
}

export class ArticleSummaryInputComponent extends React.Component<Props, any> {

    constructor(props, context) {
        super(props, context);

        this._onKeyPress = this._onKeyPress.bind(this);
    }

    _onKeyPress({target: {value}}) {
        this.props.newKeyArticleSummary(value);
    }

    render() {
        return (
            <TextField
                hintText="Article Summary"
                fullWidth={true}
                value={this.props.articleEditor.newArticle.summary}
                onChange={this._onKeyPress}
            />
        );
    }
}
