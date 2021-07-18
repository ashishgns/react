import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import App from './ListForm';
//import App from './Api';
//import App from './Toggle';
// import App from './Login';
// import App from './Reservation';
// import App from './Accessble';
// import App from './BlurExample';
// import App from './MySuspense';
// import App from './MyContext';
// import App from './DyContext';
// import App from './NstComponent';
// import App from './MultiContext';
// import App from './Fragment';
// import App from './hello';
// import App from './user';
// import App from './toggle';
// import App from './card';
// import App from './formik';
// import App from './NameForm';
// import App from './FileInput';
// import App, {Homea, Abouta} from './Main';
import store from './store';
import App from './reduxTest';
import {Provider} from 'react-redux';

// import { add } from './math.js';
import reportWebVitals from './reportWebVitals';


// store.subscribe(() => console.log(store.getState()));

// console.log(add(16, 26));

// import("./math").then(math => {
//   console.log(math.subtract(26, 26));
// });

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();