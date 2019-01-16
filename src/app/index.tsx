import * as React from 'react';
import { hot } from 'react-hot-loader';
import { Router, Route, Switch } from 'react-router';
import { Provider } from 'mobx-react';

import { createBrowserHistory } from 'history';
import { createStores } from 'app/stores';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider, install } from '@material-ui/styles';

install();

const history = createBrowserHistory();
const rootStore = createStores(history);

const theme = createMuiTheme({
  palette: {
  },
});


const Test = React.lazy(() => import('./containers/Test'));

// App Fragment
class AppFragment extends React.Component<any, any> {
  render(){
    return (
      <ThemeProvider theme={theme}>
        <React.Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" component={Test} />
        </Switch>      
      </React.Suspense>
      </ThemeProvider>
    )
  }
}


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

// render react DOM
export const App = hot(module)(() => (
  <Root>
    <Provider rootstore={rootStore}>
      <Router history={history}>
        <AppFragment />
      </Router>
    </Provider>
  </Root>
));
