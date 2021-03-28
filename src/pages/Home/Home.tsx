import React from 'react';
import './home.scss';
// import { compose } from 'redux';
import { connect, ConnectedProps } from 'react-redux';
import { AppState } from '../../store/store';
import { BoardsState } from '../../store/modules/boards/reducer';
import BoardLabel from './components/BoardLabel';

const mapStateToProps = (state: AppState): BoardsState => ({
  // todo fix state.boards.boards
  boards: state.boards.boards,
});

const mapDispatchToProps = {
  getBoards: (): { type: 'GET_BOARDS' } => ({ type: 'GET_BOARDS' }),
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type HomePropsType = ConnectedProps<typeof connector>;

// eslint-disable-next-line react/prefer-stateless-function
class Home extends React.Component<HomePropsType, Record<string, never>> {
  componentDidMount(): void {
    const { getBoards } = this.props;
    getBoards();
  }

  render(): JSX.Element {
    const { boards } = this.props;
    if (!boards) {
      return <div>No boards, please create one </div>;
    }

    return (
      <div>
        <header>my boards</header>
        <div className="boardsContainer">
          {boards.map((b) => (
            <BoardLabel key={b.id} id={b.id} title={b.title} />
          ))}
        </div>
        <button>Add new board</button>
      </div>
    );
  }
}

export default connector(Home);
