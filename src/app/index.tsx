import * as React from 'react';
import { hot } from 'react-hot-loader';
import { Router, Route, Switch } from 'react-router';
import { Provider } from 'mobx-react';

import { MuiThemeProvider, CssBaseline, createMuiTheme } from '@material-ui/core';
import AppWrapper from './containers/AppWrapper';
import JssProvider from 'react-jss/lib/JssProvider';

import {jss, rootStore, history} from 'app/setup';
import { darkPrimary } from 'app/constants';



const Home = React.lazy(() => import('./containers/Home'));

// App Fragment
class AppFragment extends React.Component<any, any> {
  render(){
    const theme = createMuiTheme({
      palette: {
        type: (rootStore.appStore.theme == 0) ? "dark" : "light",
        primary: darkPrimary,
      },
    })
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <React.Suspense fallback={<div>Loading...</div>}>
        <AppWrapper>
          <Switch>
            <Route path="/" component={Home} />
          </Switch>
        </AppWrapper>
      </React.Suspense>
      </MuiThemeProvider>
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
      <Provider rootStore={rootStore}>
        <JssProvider jss={jss}>
          <Router history={history}>
            <AppFragment />
          </Router>
        </JssProvider>
      </Provider>
  </Root>
));
