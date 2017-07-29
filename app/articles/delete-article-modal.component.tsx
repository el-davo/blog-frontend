import Dialog from 'material-ui/Dialog';
import Button from 'material-ui/Button';
import * as React from 'react';
import {Link} from 'react-router';
import {AdminState} from '../admin/admin.state';
import {Article} from '../landing/landing.state';

interface Props {
  admin: AdminState;
  requestDeleteArticle(article: Article);
  hideDeleteArticleModal();
}

export class DeleteArticleModal extends React.Component<Props, any> {

  constructor(props, context) {
    super(props, context);

    this._requestDeleteArticle = this._requestDeleteArticle.bind(this);
    this._hideDeleteArticleModal = this._hideDeleteArticleModal.bind(this);
  }

  _requestDeleteArticle() {
    this.props.requestDeleteArticle(this.props.admin.deleteArticle);
  }

  _hideDeleteArticleModal() {
    this.props.hideDeleteArticleModal();
  }

  render() {
    const actions = [
      <Button
        label="Cancel"
        primary={true}
        onTouchTap={this._hideDeleteArticleModal}
      />,
      <Button
        label="Delete"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this._requestDeleteArticle}
      />
    ];

    return (
      <Dialog
        title="Delete Article"
        open={this.props.admin.showDeleteArticleDialog}
        actions={actions}>
        Are you sure you want to delete - {this.props.admin.deleteArticle.name}
      </Dialog>
    );
  }
}
