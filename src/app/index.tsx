import * as React from 'react';
import { hot } from 'react-hot-loader';
import { Router, Route, Switch } from 'react-router';
import { Provider, observer, inject } from 'mobx-react';

import { CssBaseline, createMuiTheme } from '@material-ui/core';
import AppWrapper from './containers/AppWrapper';

import {jss, rootStore, history} from 'app/setup';
import { darkPrimary, lightPrimary, darkAppTheme, lightAppTheme } from 'app/constants';
import { I18nextProvider } from "react-i18next";
import i18n from './i18n';
import { initStorage, getKey } from './utils';
import { StylesProvider, ThemeProvider } from '@material-ui/styles';
const Home = React.lazy(() => import('./containers/Home'));

@inject("rootStore")
@observer
class AppFragment extends React.Component<any, any>{
  constructor(props){
    super(props);

    initStorage();
    this.init();
  }
  init = async () => {
    const t0 = await getKey("theme");
    const l0 = await getKey("locale");
    if (t0) this.props.rootStore.appStore.setTheme(t0);
    if (l0) this.props.rootStore.appStore.setLocale(l0);
  }
  render(){
    const { appStore } = this.props.rootStore;
    const theme = createMuiTheme({
      palette: {
        type: appStore.theme == 0 ? "dark" : "light",
        primary: appStore.theme == 0 ? darkPrimary : lightPrimary,
      },
      //@ts-ignore
      app: appStore.theme == 0 ? darkAppTheme: lightAppTheme,
      typography: {
        useNextVariants: true,
      },
    })    
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <I18nextProvider i18n={i18n}>
          <AppWrapper>
            <React.Suspense fallback={<div>Loading...</div>}>
              <Switch>
                  <Route path="/" component={props => <Home {...props} />} />
              </Switch>
            </React.Suspense>
          </AppWrapper>
        </I18nextProvider>
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

//const AppFragmentWithI18n = withNamespaces()(AppFragment);

// render react DOM

export const App = hot(module)(() => (
  <Root>
      <Provider rootStore={rootStore}>
        {/*
        //@ts-ignore*/}
        <StylesProvider jss={jss}>
            <Router history={history}>
              <AppFragment />
            </Router>
        </StylesProvider>
      </Provider>
  </Root>
));
