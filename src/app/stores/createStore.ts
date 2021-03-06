import { History } from 'history';
import { RouterStore } from './RouterStore';

export function createStores(history: History) {
  const routerStore = new RouterStore(history);
  return {
    routerStore
  };
}
