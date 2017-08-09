// @flow
import * as React from 'react';
import { observer } from 'mobx-react';
import AppStore from './AppStore';

/** Components **/

/** Stylesheets **/
import './App.css';

@observer
class App extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div className="App">
        <div className="app-children">
          {children}
        </div>
      </div>
    );
  }
}

export default App;
