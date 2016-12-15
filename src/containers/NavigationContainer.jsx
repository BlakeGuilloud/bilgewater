import React       from 'react';
import { connect } from 'react-redux';


class NavigationContainer extends React.Component {

  static propTypes = {};

  render() {
    const props = {};

    return (
      <div>Hello from NavigationContainer</div>
    );
  }
}

function mapStateToProps(state) {
  const {} = state;
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationContainer);
