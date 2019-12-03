import React from 'react';
import './App.css';
import Search from './containers/Search'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LoginSign from './containers/LoginSign'



export default class App extends React.Component {

  state = { 
    currentUser: null, 
    user_id: null
  }

  componentDidMount() { 
    if(localStorage.user_id){ 
      this.fetchUsers()
    }
  }

  setCurrentUser = (user) => { 
    this.setState({ 
      currentUser: user,
      user_id: user.id
    })
  }

  signOut = () => {
    this.setState({
      currentUser: null, 
      user_id: null
    })
  }

  fetchUsers = () => { 
    fetch('https://powerful-peak-13449.herokuapp.com/users')
      .then(resp => resp.json())
      .then(data => this.findUser(data))
  }

  findUser = (users) => { 
    let id = localStorage.user_id 
    id = parseInt(id)
    let foundUser = users.find(user => user.id === id)
    this.setCurrentUser(foundUser)
  }

  render() { 
  return (
    <Router>
      <div>
          <Switch> 
              <Route exact path='/' render={(routerProps) => <LoginSign currentUser={this.state.currentUser} setCurrentUser={this.setCurrentUser} {...routerProps} />}/> 
              <Route exact path='/search' render={(routerProps) =><Search user_id={this.state.user_id} signOut={this.signOut} {...routerProps}/>}/> 
          </Switch>
      </div>
    </Router>
  )
  }
}
