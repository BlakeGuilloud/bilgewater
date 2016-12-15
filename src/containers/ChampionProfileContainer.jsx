import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as RiotActions from '../actions/RiotActions';
import { ChampionProfile } from '../components';

class ChampionProfileContainer extends Component {
  static displayName = 'Champion Profile Container';

  static propTypes = {
    champion: React.PropTypes.object,
    fetchChampion: React.PropTypes.func,
  };

  state = {}

  componentDidMount() {
    this.props.fetchChampion('Aatrox');
  }

  render() {
    console.log('hello?');
    const props = {
      champion: this.props.champion,
    };

    return (
      <ChampionProfile {...props} />
    );
  }
}

function mapStateToProps(state) {
  const { riot } = state;

  return {
    champion: riot.champion,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchChampion: bindActionCreators(RiotActions.fetchChampion, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChampionProfileContainer);
