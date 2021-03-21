import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Board from './pages/Board/Board';
import Home from './pages/Home/Home';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/board/:boardId">
            <Board />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
