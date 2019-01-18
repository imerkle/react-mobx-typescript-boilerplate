import { History } from 'history';
import { RouterStore } from './RouterStore';
import AppStore from './AppStore';

export function createStores(history: History) {
  const routerStore = new RouterStore(history);
  const appStore = AppStore.create({})
  return {
    routerStore,
    appStore,
  };
}
