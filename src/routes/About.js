import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

export default function About() {
  const { path } = useRouteMatch();
  return (
  		<React.Fragment>
      	<h1>About</h1>
	      <Switch>
	        <Route path={`${path}/ashish`}>
	          <Ashish />
	        </Route>
	        <Route path={`${path}/amit`}>
	          <Amit />
	        </Route>
	      </Switch>
      </React.Fragment>
  );
}

const Ashish = () => {
	return <h2>Ashish</h2>
}

const Amit = () => {
	return <h2>Amit</h2>
}