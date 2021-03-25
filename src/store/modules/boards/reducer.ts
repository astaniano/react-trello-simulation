const SET_BOARDS = 'SET_BOARDS';

export interface IBoard {
  id: number;
  title: string;
}

export interface BoardsState {
  boards: IBoard[];
}

const initialState: BoardsState = {
  boards: [
    { id: 1, title: 'покупки' },
    { id: 2, title: 'подготовка к свадьбе' },
    { id: 3, title: 'разработка интернет-магазина' },
    { id: 4, title: 'курс по продвижению в соцсетях' },
  ],
};

export default function reducer(state = initialState, action: { type: typeof SET_BOARDS }): BoardsState {
  switch (action.type) {
    case SET_BOARDS:
      // eslint-disable-next-line no-console
      console.log('inside SET_BOARDS in board reducer');
      return {
        ...state,
      };
    default: {
      return { ...state };
    }
  }
}
