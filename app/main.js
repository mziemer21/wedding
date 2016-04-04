import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import Shell from './views/components/Shell';
import OurStory from './views/OurStory';
import Wedding from './views/Wedding';
import Homies from './views/Homies';
import Pics from './views/Pics';
import Rsvp from './views/Rsvp';

// set up routing
render((
    <Router history={browserHistory}>
		<Route path="/" component={Shell}>
			<IndexRoute component={OurStory} />
			<Route path="/wedding" component={Wedding} />
			<Route path="/homies" component={Homies} />
			<Route path="/pics" component={Pics} />
			<Route path="/rsvp" component={Rsvp} />
		</Route>
    </Router>
), document.getElementById('root'));
