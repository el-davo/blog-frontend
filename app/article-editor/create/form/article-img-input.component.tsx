import TextField from 'material-ui/TextField';
import * as React from 'react';
import {ArticleEditorState} from '../../article-editor.state';

interface Props {
  articleEditor: ArticleEditorState;
  newKeyArticleImg(character: string);
}

export class ArticleImgInputComponent extends React.Component<Props, any> {

  constructor(props, context) {
    super(props, context);

    this._onKeyPress = this._onKeyPress.bind(this);
  }

  _onKeyPress({target: {value}}) {
    this.props.newKeyArticleImg(value);
  }

  render() {
    return (
      <TextField
        hintText="Image Url"
        fullWidth={true}
        value={this.props.articleEditor.newArticle.imgUrl}
        onChange={this._onKeyPress}/>
    );
  }
}
