import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PagesOtazka from './components/PagesOtazka';
import Mainpage from './components/Main-page';
import PagesTemaSeznam from './components/PagesTemaSeznam';
import PagesTemaVybrane from './components/PagesTemaVybrane';
import PagesNavod from './components/PagesNavod';
import './style.css';

const App = () => (
  <Router>
    <Switch>
      <Route path="/PagesOtazka/:id">
        <PagesOtazka />
      </Route>
      <Route path="/PagesTemaSeznam">
        <PagesTemaSeznam />
      </Route>
      <Route path="/PagesTemaVybrane/:id">
        <PagesTemaVybrane />
      </Route>
      <Route path="/PagesNavod">
        <PagesNavod />
      </Route>
      <Route path="/">
        <Mainpage />
      </Route>
    </Switch>
  </Router>
);

render(<App />, document.querySelector('#app'));
