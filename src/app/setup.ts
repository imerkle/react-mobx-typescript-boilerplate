import { jssPreset } from '@material-ui/styles';
import { create } from 'jss';

import { createBrowserHistory } from 'history';
import { createStores } from 'app/stores';

const styleNode = document.createComment('jss-insertion-point');
document.head.insertBefore(styleNode, document.head.firstChild);

export const jss = create({
  ...jssPreset(),
  // We define a custom insertion point that JSS will look for injecting the styles in the DOM.
  insertionPoint: 'jss-insertion-point',
});

export const history = createBrowserHistory();
export const rootStore = createStores(history);
