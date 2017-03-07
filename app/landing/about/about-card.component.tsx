import Avatar from 'material-ui/Avatar';
import * as React from 'react';

interface Props {
}

export class AboutCardComponent extends React.Component<Props, any> {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div style={{ textAlign: 'center', marginTop: 50 }}>
                <Avatar src="app/img/el-davo.jpg" size={100} />
            </div>
        );
    }
}