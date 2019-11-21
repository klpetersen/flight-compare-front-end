import React from 'react';
import './App.css';
import Search from './containers/Search'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom' 
import LoginSign from './containers/LoginSign'




function App() {
  return (
    <Router>
      <div>
          <Switch> 
              <Route exact path='/' render={() => <LoginSign />}/> 
              <Route exact path='/search' render={() =><Search />}/> 
          </Switch>
      </div>
    </Router>
  )
}

export default App; 