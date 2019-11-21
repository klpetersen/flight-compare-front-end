import React from 'react';
import './App.css';
import Search from './containers/Search'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LoginSign from './containers/LoginSign'


export default class App extends React.Component {

  state = { 
    currentUser: null
  }


  setCurrentUser = (user) => { 
    this.setState({ 
      currentUser: user
    })
  }

  signOut = () => {
    this.setState({
      currentUser: null
    })
  }

  render() { 
  return (
    <Router>
      <div>
          <Switch> 
              <Route exact path='/' render={(routerProps) => <LoginSign currentUser={this.state.currentUser} setCurrentUser={this.setCurrentUser} {...routerProps} />}/> 
              <Route exact path='/search' render={() =><Search  />}/> 
          </Switch>
      </div>
    </Router>
  )
  }
}
