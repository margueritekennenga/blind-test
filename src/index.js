import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Quiz from './components/quiz';
import Theme from './components/theme';
import Test from './components/Test';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const RouterComp = () => {
  return(
  <Router>
    <Switch>
      <Route exact path="/" component={Theme}></Route>
      <Route path="/quizz" component={App}></Route>
      <Route path="/test" component={Test}></Route>
      {/* <Route component={404}></Route> */}
    </Switch>
  </Router>
  )
}

ReactDOM.render(<RouterComp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

