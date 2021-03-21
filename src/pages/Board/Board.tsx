import React from 'react';
import { compose } from 'redux';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { AppState } from '../../store/store';
import ICard from '../../common/interfaces/ICard';
// import List from './components/List/List';
import './board.scss';

// interface BoardSection {
//   id: number;
//   title: string;
//   cards: ICard[];
// }

// type BoardProps = {
//   title: string;
//   lists: BoardSection[];
// };

interface MatchParams {
  boardId: string;
}

interface BoardProps {
  board: string;
}

// type Ff = BoardProps & RouteComponentProps<MatchParams>;

const Board = (props: any): JSX.Element => {
  // eslint-disable-next-line no-console
  console.log(props);
  return (
    <div>
      <Link to="/">back home</Link>
      {/* <h1>{title}</h1>
    <div className="boardContainer">
      {lists.map((bSection: BoardSection) => (
        <List key={bSection.id} title={bSection.title} cards={bSection.cards} />
      ))}
    </div>
    <button>Add task</button> */}
    </div>
  );
};

const mapStateToProps = (state: AppState): BoardProps => ({
  // board: state.board,
  board: 'hi',
});

const mapDispatchToProps = {};

export default compose(connect(mapStateToProps, mapDispatchToProps), withRouter)(Board);
