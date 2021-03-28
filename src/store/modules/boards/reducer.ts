const SET_BOARDS = 'SET_BOARDS';

export interface IBoard {
  id: number;
  title: string;
}

export interface BoardsState {
  boards: IBoard[] | null;
}

const initialState: BoardsState = {
  boards: null,
  // boards: [
  //   { id: 1, title: 'покупки' },
  //   { id: 2, title: 'подготовка к свадьбе' },
  //   { id: 3, title: 'разработка интернет-магазина' },
  //   { id: 4, title: 'курс по продвижению в соцсетях' },
  // ],
};

interface ActionType {
  type: typeof SET_BOARDS;
  boards: IBoard[];
}

export default function reducer(state = initialState, action: ActionType): BoardsState {
  switch (action.type) {
    case SET_BOARDS:
      return {
        ...state,
        boards: action.boards,
      };
    default: {
      return { ...state };
    }
  }
}
