
import AutoComplete from 'material-ui/AutoComplete';
import * as React from 'react';

export class WidgetSearch extends React.Component<any, any> {

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
