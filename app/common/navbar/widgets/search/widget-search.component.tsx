
import AutoComplete from 'material-ui/AutoComplete';
import * as React from 'react';

interface Props {
}

export class WidgetSearch extends React.Component<Props, any> {

  constructor(props, context) {
    super(props, context);

    this.state = {
      dataSource: []
    };
  }

  render() {
    return (
      <AutoComplete
          hintText="Search Articles"
          dataSource={this.state.dataSource}
        />
    );
  }
}
