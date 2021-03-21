import { createStore } from 'redux';
import rootReducer from './reducer';
import { BoardsState } from './modules/boards/reducer';
import { BoardState } from './modules/board/reducer';

export interface AppState {
  boards: BoardsState;
  board: BoardState;
  // user: UserState;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const initialState: AppState = {
  boards: {
    boards: [
      { id: 1, title: 'покупки' },
      { id: 2, title: 'подготовка к свадьбе' },
      { id: 3, title: 'разработка интернет-магазина' },
      { id: 4, title: 'курс по продвижению в соцсетях' },
    ],
  },
  board: {
    title: 'Моя тестовая доска',
    lists: [
      {
        id: 1,
        title: 'Планы',
        cards: [
          { id: 1, title: 'помыть кота' },
          { id: 2, title: 'приготовить суп' },
          { id: 3, title: 'сходить в магазин' },
        ],
      },
      {
        id: 2,
        title: 'В процессе',
        cards: [{ id: 4, title: 'посмотреть сериал' }],
      },
    ],
  },
  // user: {},
};

// const store = createStore(rootReducer, initialState);
const store = createStore(rootReducer);

// export const asyncDispatch = store.dispatch;

export default store;
