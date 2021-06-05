import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PagesOtazka from './components/PagesOtazka';
import './style.css';

const App = () => (
  <Router>
    <Switch>
      <Route path="/PagesOtazka">
        <PagesOtazka />
      </Route>
      <Route path="/PagesOdpoved">
        <PagesOtazka />
      </Route>
      <Route path="/PagesTemaSeznam">
        <PagesTemaSeznam />
      </Route>
      <Route path="/PagesTemaVybrane">
        <PagesTemaVybrane />
      </Route>
      <Route path="/Main-page">
        <Main-page />
      </Route>
    </Switch>
  </Router>
);

render(<App />, document.querySelector('#app'));
