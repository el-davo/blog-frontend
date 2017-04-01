import TextField from 'material-ui/TextField';
import * as React from 'react';
import {ArticleEditorState} from '../../article-editor.state';

interface Props {
  articleEditor: ArticleEditorState;
  editKeyArticleImg(character: string);
}

export class ArticleImgInputComponent extends React.Component<Props, any> {

  constructor(props, context) {
    super(props, context);

    this._onKeyPress = this._onKeyPress.bind(this);
  }

  _onKeyPress({target: {value}}) {
    this.props.editKeyArticleImg(value);
  }

  render() {
    return (
      <TextField
        hintText="Image Url"
        fullWidth={true}
        value={this.props.articleEditor.editingArticle.imgUrl}
        onChange={this._onKeyPress}/>
    );
  }
}
