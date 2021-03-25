import axios from 'axios';
import { api } from '../common/constants';
// import { AxiosResponse } from 'axios'

const instance = axios.create({
  baseURL: api.baseURL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer 123', // к этому мы ещё вернёмся как-нибудь потом
  },
});

instance.interceptors.response.use((res) => res.data);

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type,@typescript-eslint/explicit-module-boundary-types
export const getBoardsReq = () => instance.get('https://jsonplaceholder.typicode.com/todos/1');

export default instance;
