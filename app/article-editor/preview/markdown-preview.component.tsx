import {Card, CardHeader, CardText} from 'material-ui/Card';
import * as React from 'react';

interface Props {
  name: string;
  summary: string;
  imgUrl: string;
  content: string;
}

export class MarkdownPreviewComponent extends React.Component<Props, any> {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <Card>
        <CardHeader
          title={this.props.name}
          avatar={this.props.imgUrl}/>
        <CardText>
          <div dangerouslySetInnerHTML={{ __html: this.props.content }}></div>
        </CardText>
      </Card>

    );
  }
}
