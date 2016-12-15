import React from 'react';

import {
  HeaderContainer,
  NavigationContainer,
} from '../containers';

const App = (props) => {
  return (
    <div>
      <NavigationContainer />
      <div className="app-wrapper">
        <HeaderContainer />
        Hello from App
        {props.children}
      </div>
    </div>
  );
};

App.propTypes = {
  children: React.PropTypes.node,
};

export default App;
