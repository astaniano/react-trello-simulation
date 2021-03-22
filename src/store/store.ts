import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import rootReducer from './reducer';
import { BoardsState } from './modules/boards/reducer';
import { BoardState } from './modules/board/reducer';

export interface AppState {
  boards: BoardsState;
  board: BoardState;
  // user: UserState;
}

const store = createStore(rootReducer, devToolsEnhancer({}));

// export const asyncDispatch = store.dispatch;
export default store;
