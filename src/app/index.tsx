import * as React from 'react';
import { hot } from 'react-hot-loader';
import { Router, Route, Switch } from 'react-router';
import { Provider } from 'mobx-react';

import { createBrowserHistory } from 'history';
import { createStores } from 'app/stores';

const history = createBrowserHistory();
const rootStore = createStores(history);

// render react DOM
export const App =  hot(module)(() => (
  <Root>
    <Provider rootstore={rootStore}>
      <Router history={history}>
        <Switch>
          <Route path="/" component={()=>{return (<>ASD</>)}} />
        </Switch>
      </Router>
    </Provider>
  </Root>
));

// Root class with mobx devtools

class Root extends React.Component<any, any> {
  renderDevTool() {
    if (process.env.NODE_ENV !== 'production') {
      const DevTools = require('mobx-react-devtools').default;
      return <DevTools />;
    }
  }

  render() {
    return (
      <>
        {this.props.children}
        {this.renderDevTool()}
      </>
    );
  }
}
