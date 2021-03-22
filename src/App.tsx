import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Board from './pages/Board/Board';
import Home from './pages/Home/Home';

function App(): JSX.Element {
  // eslint-disable-next-line no-console
  console.log(process.env.REACT_APP_API_URL);

  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/board/:boardId?" render={(): JSX.Element => <Board />} />
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
