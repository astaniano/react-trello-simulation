import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
// import { devToolsEnhancer } from 'redux-devtools-extension'; // todo enhancer
import rootReducer from './reducer';
import { BoardsState } from './modules/boards/reducer';
import { BoardState } from './modules/board/reducer';
import rootSaga from './saga';

export interface AppState {
  boards: BoardsState;
  board: BoardState;
  // user: UserState;
}

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

// export const asyncDispatch = store.dispatch;
export default store;
