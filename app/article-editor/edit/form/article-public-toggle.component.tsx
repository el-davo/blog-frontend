import {FormControlLabel} from 'material-ui/Form';
import Switch from 'material-ui/Switch';
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
            <FormControlLabel
                control={
                    <Switch
                        style={style}
                        checked={this.props.articleEditor.editingArticle.public}
                        onChange={this._toggle}
                    />
                }
                label="Public"
            />
        );
    }
}
