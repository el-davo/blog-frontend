import TextField from 'material-ui/TextField';
import * as React from 'react';
import {ArticleEditorState} from '../../article-editor.state';

interface Props {
  articleEditor: ArticleEditorState;
  editKeyArticleName(character: string);
}

export class ArticleNameInputComponent extends React.Component<Props, any> {

  constructor(props, context) {
    super(props, context);

    this._onKeyPress = this._onKeyPress.bind(this);
  }

  _onKeyPress({target: {value}}) {
    this.props.editKeyArticleName(value);
  }

  render() {
    return (
      <TextField
        hintText="Article Name"
        fullWidth={true}
        value={this.props.articleEditor.editingArticle.name}
        onChange={this._onKeyPress}
      />
    );
  }
}
