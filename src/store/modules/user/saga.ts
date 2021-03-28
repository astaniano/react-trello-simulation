// import { put, takeEvery } from 'redux-saga/effects';
// import { AxiosResponse } from 'axios';
// import { userAPI } from '../../../api/requests';
//
// type LoginSuccess = {
//   result: string;
//   token: string;
// };
//
// // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
// function* login() {
//   const res: AxiosResponse<LoginSuccess> = yield userAPI.login();
//
//   yield put({ type: 'LOGIN', token: res.token });
// }
//
// // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types,@typescript-eslint/explicit-function-return-type
// export default function* watchGetBoards() {
//   yield takeEvery('ASYNC_LOGIN', login);
// }

export {};
