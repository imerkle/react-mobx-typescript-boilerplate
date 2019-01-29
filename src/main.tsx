import "./material";
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { configure } from 'mobx';
import { App } from 'app';

// enable MobX strict mode
configure({
  enforceActions: 'observed'
});

// render react DOM
ReactDOM.render(
    <App />,
  document.getElementById('root')
);
