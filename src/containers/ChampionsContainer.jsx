import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as RiotActions from '../actions/RiotActions';
import { Champions } from '../components';

class ChampionsContainer extends Component {
  static displayName = 'Champions Container';

  static propTypes = {
    championIds: React.PropTypes.array,
    champions: React.PropTypes.object,
    fetchChampions: React.PropTypes.func,
  };

  state = {}

  componentDidMount() {
    this.props.fetchChampions();
  }
  render() {
    const props = {
      champions: this.props.champions,
      championIds: this.props.championIds,
    };

    return (
      <Champions {...props} />
    );
  }
}

function mapStateToProps(state) {
  const { riot } = state;

  return {
    championIds: riot.championIds,
    champions: riot.champions,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchChampions: bindActionCreators(RiotActions.fetchChampions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChampionsContainer);
