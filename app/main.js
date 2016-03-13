import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import Greeter from './Greeter';

import './styles/main.css';

render((
  <Router history={browserHistory}>
    <Route path="/" component={Greeter} />
  </Router>
), document.getElementById('root'));
