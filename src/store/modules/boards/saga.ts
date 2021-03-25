import { put, takeEvery } from 'redux-saga/effects';
// import {boardsAPI} from '../../../api/requests';
import { AxiosResponse } from 'axios';
import { getBoardsReq } from '../../../api/requests';

type Gg = {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function* getBoards() {
  // const res: AxiosResponse<Gg> = yield call(getBoards);
  const res: AxiosResponse<Gg> = yield getBoardsReq();

  // eslint-disable-next-line no-console
  console.log('res below');
  // eslint-disable-next-line no-console
  console.log(res);

  yield put({ type: 'SET_BOARDS' });
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types,@typescript-eslint/explicit-function-return-type
export default function* watchGetBoards() {
  yield takeEvery('GET_BOARDS', getBoards);
}
