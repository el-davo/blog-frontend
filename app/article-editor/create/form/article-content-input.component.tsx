import TextField from 'material-ui/TextField';
import * as React from 'react';
import { ArticleEditorState } from '../../article-editor.state';

interface Props {
    articleEditor: ArticleEditorState;
    newKeyArticleContent(character: string);
}

export class ArticleContentInputComponent extends React.Component<Props, any> {

    constructor(props, context) {
        super(props, context);

        this._onKeyPress = this._onKeyPress.bind(this);
    }

    _onKeyPress({target: {value}}) {
        this.props.newKeyArticleContent(value);
    }

    render() {
        return (
            <TextField
                hintText="Markdown Content"
                value={this.props.articleEditor.newArticle.content}
                onChange={this._onKeyPress}
                fullWidth={true}
                multiLine={true} />
        );
    }
}
