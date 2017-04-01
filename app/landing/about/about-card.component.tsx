import Avatar from 'material-ui/Avatar';
import {Card, CardActions, CardText, CardTitle} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import * as React from 'react';
import * as LinkedInIcon from 'react-icons/lib/fa/linkedin-square';
import * as GithubIcon from 'react-icons/lib/go/mark-github';

const style = {
  textAlign: 'center',
  marginTop: 50
};

export class AboutCardComponent extends React.Component<any, any> {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <div style={style}>
          <Avatar src="app/img/el-davo.jpg" size={125}/>
        </div>

        <br />

        <Card>
          <CardTitle title="About el-davo"/>
          <CardText>
            This may come as a surprise to you but my real name is in fact not el-davo.
            The names David Ahern however you can call me Dave for short.
            Before we go any further I should point out that you are infact correct,
            that is a dog wearing a little jumper in the image above.
            Now whats this site all about? Well ive been a software engineer for the last 5 years,
            in that time ive worked with many technologies,
            so i thought it was about time I start sharing some of my knowledge in the hope it might help some
            young up and coming software developers. My current main two languages of choice are
            Javascript and Java. This website is built with react for the frontend and nodejs for the backend.
            You will find some articles that might interest you below, thanks for stopping by and if you want to
            get in touch please feel free to contact me on LinkedIn or Github
          </CardText>
          <CardActions>
            <FlatButton
              href="https://www.linkedin.com/in/david-ahern-02696947"
              target="_blank"
              label="linkedIn"
              icon={<LinkedInIcon />}/>
            <FlatButton
              href="https://github.com/el-davo"
              target="_blank"
              label="Github"
              icon={<GithubIcon />}/>
          </CardActions>

        </Card>
      </div>
    );
  }
}
