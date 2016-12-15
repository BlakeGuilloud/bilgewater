import React from 'react';
import { connect } from 'react-redux';


class HeaderContainer extends React.Component {

  static propTypes = {};

  render() {
    const props = {};

    return (
      <div>Hello from HeaderContainer</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
