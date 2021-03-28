import { put, takeEvery } from 'redux-saga/effects';
import { boardsAPI } from '../../../api/requests';
import { BoardsState } from './reducer';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function* getBoards() {
  const res: BoardsState = yield boardsAPI.getBoards();

  yield put({ type: 'SET_BOARDS', boards: res.boards });
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types,@typescript-eslint/explicit-function-return-type
export default function* watchGetBoards() {
  yield takeEvery('GET_BOARDS', getBoards);
}
