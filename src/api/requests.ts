import axios from 'axios';
import { api } from '../common/constants';

const instance = axios.create({
  baseURL: api.baseURL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer 1616766919122', // к этому мы ещё вернёмся как-нибудь потом
    // can be used later axios.defaults.headers.common['Authorization'] = store.getState().session.token;
  },
});

instance.interceptors.response.use((res) => res.data);

export const boardsAPI = {
  getBoards: (): any => instance.get('/board'),
};

// export const userAPI = {
//   login: (email: string, password: string): any => instance.post('/board', { email, password }),
// };

export default instance;
