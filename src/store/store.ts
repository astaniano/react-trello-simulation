import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducer';
import { BoardsState } from './modules/boards/reducer';
import { BoardState } from './modules/board/reducer';
// import { UserState } from './modules/user/reducer';
import rootSaga from './saga';

export interface AppState {
  boards: BoardsState;
  board: BoardState;
  // user: UserState;
}

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga);

// export const asyncDispatch = store.dispatch;

export default store;
