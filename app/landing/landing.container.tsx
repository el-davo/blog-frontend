import * as React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from './landing.actions';
import {LandingComponent} from './landing.component';
import {LandingState} from './landing.state';

interface Props {
  landing: LandingState;
  actions: Actions;
}

interface Actions {
  fetchNewestArticles();
}

const LandingContainer: React.StatelessComponent<Props> = (props) => {
  return (
    <LandingComponent landing={props.landing} fetchNewestArticles={props.actions.fetchNewestArticles}/>
  );
};

function mapStateToProps(state, ownProps) {
  return {
    landing: state.landing
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({...actions}, dispatch)
  };
}

export default connect<{}, {}, any>(
  mapStateToProps,
  mapDispatchToProps
)(LandingContainer);
