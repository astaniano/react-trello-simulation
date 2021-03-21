import { combineReducers } from 'redux';
import boardReducer from './modules/board/reducer';
import boardsReducer from './modules/boards/reducer';
// import userReducer from './modules/user/reducer';

export default combineReducers({
  boards: boardsReducer,
  board: boardReducer,
  // user: userReducer,
});
