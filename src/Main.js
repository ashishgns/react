import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// import Home from './routes/Home';
// import About from './routes/About';

const Home = lazy(() => import('./routes/Home'));
const About = lazy(() => import('./routes/About'));

function Main() {

	return (
    <div className="wrapper">
      <h1>Marine Mammals</h1>
      <nav>
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/about">About</a></li>
          <ul>
	          <li><a href="/about/ashish">Ashish</a></li>
	          <li><a href="/about/amit">Amit</a></li>
          </ul>
        </ul>
      </nav>
      <BrowserRouter>
	      <Suspense fallback={<div>Loading...</div>}>
	        <Switch>
	          <Route path="/home">
	            <Home />
	          </Route>
	          <Route path="/about">
	            <About />
	          </Route>
	        </Switch>
	        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default Main;

export function Homea(){
	return (
		<h1>home</h1>
	);
}

export function Abouta() {
	return (
		<h1>about</h1>
	);
}