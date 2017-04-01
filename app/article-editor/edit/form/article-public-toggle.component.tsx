import Toggle from 'material-ui/Toggle';
import * as React from 'react';
import {ArticleEditorState} from '../../article-editor.state';

const style = {
  width: 100
};

interface Props {
  articleEditor: ArticleEditorState;
  editToggleArticlePublic();
}

export class ArticlePublicToggleComponent extends React.Component<Props, any> {

  constructor(props, context) {
    super(props, context);

    this._toggle = this._toggle.bind(this);
  }

  _toggle() {
    this.props.editToggleArticlePublic();
  }

  render() {
    return (
      <Toggle
        style={style}
        label="Public"
        defaultToggled={this.props.articleEditor.editingArticle.public}
        onToggle={this._toggle}/>
    );
  }
}
