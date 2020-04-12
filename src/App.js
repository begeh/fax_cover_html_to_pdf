import React from 'react';
import {
  BrowserRouter as Router,
  Route,
	Switch
} from "react-router-dom";

import FaxInput from './components/FaxInput';
import FaxPage from './components/FaxPage';

function App() {

  return (
		<Router>
			<Switch>
				<Route exact path="/" >
					<FaxInput />
				</Route>
				<Route path="/create" component={props=><FaxPage {...props}/>} />
			</Switch>
		</Router>
	
  );
}

export default App;
