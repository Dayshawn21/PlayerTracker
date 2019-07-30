import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './layout/Navbar';
import Home from './pages/Home';

import SportState from './Context/SportState';

import './App.css';
import About from './pages/About';

function App() {
	return (
		<SportState>
			<Router>
				<div className="App">
					<Navbar />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/about" component={About} />
					</Switch>
				</div>
			</Router>
		</SportState>
	);
}

export default App;
