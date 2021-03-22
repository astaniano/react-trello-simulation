import React from 'react';
// import { compose } from 'redux';
import { NavLink, RouteComponentProps, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { AppState } from '../../store/store';
import List from './components/List/List';
import './board.scss';
import { BoardState, BoardList } from '../../store/modules/board/reducer';

interface MatchParams {
  boardId: string;
}

type BoardPropsType = BoardState & RouteComponentProps<MatchParams>;

const Board = ({ title, lists, match }: BoardPropsType): JSX.Element => {
  const { boardId } = match.params;
  // eslint-disable-next-line no-console
  console.log(boardId);

  return (
    <div>
      <NavLink to="/">back home</NavLink>
      <h1>{title}</h1>
      <div className="boardContainer">
        {lists.map((boardList: BoardList) => (
          <List key={boardList.id} title={boardList.title} cards={boardList.cards} />
        ))}
      </div>
      <button>Add task</button>
    </div>
  );
};

const mapStateToProps = (state: AppState): BoardState => ({
  title: state.board.title,
  lists: state.board.lists,
});

const mapDispatchToProps = {};

// export default compose(connect(mapStateToProps, mapDispatchToProps), withRouter)(Board);
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Board));
