import React from 'react';
import './home.scss';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { AppState } from '../../store/store';
import { BoardsState } from '../../store/modules/boards/reducer';
import BoardLabel from './components/BoardLabel';

const Home = ({ boards }: BoardsState): JSX.Element => (
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

const mapStateToProps = (state: AppState): BoardsState => ({
  // todo fix state.boards.boards
  boards: state.boards.boards,
});

const mapDispatchToProps = {};

export default compose(
  // withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(Home);
