import React from 'react';
import ICard from '../../common/interfaces/ICard';
import List from './components/List/List';
import './board.scss';

// const Board = (): JSX.Element => <h1>Hello Board!</h1>;
// export default Board;

interface BoardSection {
  id: number;
  title: string;
  cards: ICard[];
}

type MyProps = Record<string, unknown>;
type MyState = {
  title: string;
  lists: BoardSection[];
};

export default class Board extends React.Component<MyProps, MyState> {
  constructor(props: Record<string, unknown>) {
    super(props);

    this.state = {
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
        {
          id: 3,
          title: 'Сделано',
          cards: [
            { id: 5, title: 'сделать домашку' },
            { id: 6, title: 'погулять с собакой' },
          ],
        },
      ],
    };
  }

  render(): JSX.Element {
    const { lists, title } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        {/* <div style={{ color: 'red', display: 'flex', width: '650px', justifyContent: 'space-around' }}> */}
        <div className="boardContainer">
          {lists.map((bSection: BoardSection) => (
            <List key={bSection.id} title={bSection.title} cards={bSection.cards} />
          ))}
        </div>
        <button>Add task</button>
      </div>
    );
  }
}
