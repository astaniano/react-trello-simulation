import { all } from 'redux-saga/effects';
import watchGetBoards from './modules/boards/saga';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types,@typescript-eslint/explicit-function-return-type
export default function* rootSaga() {
  yield all([watchGetBoards()]);
}
