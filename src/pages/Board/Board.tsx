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

class Board extends React.Component<BoardPropsType, Record<string, never>> {
  // constuctor({ title, lists, match }: BoardPropsType) {
  // constuctor(props: BoardPropsType): void {
  //   super(props);
  // }

  componentDidMount(): void {
    // eslint-disable-next-line no-console
    console.log('Board componentDidMount');
  }

  render(): JSX.Element {
    const { title, lists, match } = this.props;
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
  }
}

const mapStateToProps = (state: AppState): BoardState => ({
  title: state.board.title,
  lists: state.board.lists,
});

const mapDispatchToProps = {};

// export default compose(connect(mapStateToProps, mapDispatchToProps), withRouter)(Board);
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Board));
