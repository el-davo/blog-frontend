import TextField from 'material-ui/TextField';
import * as React from 'react';
import { ArticleEditorState } from '../../article-editor.state';

interface Props {
    articleEditor: ArticleEditorState;
    newKeyArticleName(character: string);
}

export class ArticleNameInputComponent extends React.Component<Props, any> {

    constructor(props, context) {
        super(props, context);

        this._onKeyPress = this._onKeyPress.bind(this);
    }

    _onKeyPress({target: {value}}) {
        this.props.newKeyArticleName(value);
    }

    render() {
        return (
            <TextField
                hintText="Article Name"
                fullWidth={true}
                value={this.props.articleEditor.newArticle.name}
                onChange={this._onKeyPress}
            />
        );
    }
}
