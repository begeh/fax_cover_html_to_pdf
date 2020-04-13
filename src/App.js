import React from 'react';
import {
  BrowserRouter as Router,
  Route,
	Switch
} from "react-router-dom";

import FaxInput from './components/FaxInput';
import FaxPage from './components/FaxPage';
import './App.css';

function App() {
	
  return (
		<Router>
			<body>
				<Switch>
					<Route exact path="/" >
						<FaxInput />
					</Route>
					<Route path="/create" component={props=><FaxPage {...props}/>} />
				</Switch>
			</body>
		</Router>
	
  );
}

export default App;
