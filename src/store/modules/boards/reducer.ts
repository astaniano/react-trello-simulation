interface IBoard {
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

export default function reducer(state = initialState, action: { type: string }): BoardsState {
  switch (action.type) {
    default: {
      return { ...state };
    }
  }
}
