import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PagesOtazka from './components/PagesOtazka';
import Mainpage from './components/Main-page';
import PagesTemata from './components/Pagestemata';
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
      <Route path="/Pagestemata">
        <PagesTemata />
      </Route>
      {/* <Route path="/PagesTemaSeznam">
        <PagesTemaSeznam />
      </Route>
      <Route path="/PagesTemaVybrane">
        <PagesTemaVybrane />
      </Route> */}
      <Route path="/Mainpage">
        <Mainpage />
      </Route>
    </Switch>
  </Router>
);

render(<App />, document.querySelector('#app'));
