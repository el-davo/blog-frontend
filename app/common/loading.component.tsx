import * as React from 'react';
import * as Loader from 'halogen/ScaleLoader';

const COLOR = '#008774';
const SIZE = '20px';

const style = {
  padding: 20,
  textAlign: 'center'
};

export class LoadingComponent extends React.Component<any, any> {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div style={style}>
        <Loader color={COLOR} size={SIZE}/>
      </div>
    );
  }
}
