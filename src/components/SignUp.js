import React, { Component } from 'react'

export default class SignUp extends Component {

    state = { 
        username: null, 
        password: null, 
        login: false, 
    }

    handleChange = (event) => { 
        let target = event.target; 
        this.setState({ 
            [target.name]: target.value
        })
    } 

    handleSubmit = (event) => { 
        event.preventDefault() 
        fetch('https://powerful-peak-13449.herokuapp.com/users')
            .then(resp => resp.json())
            .then(data => this.findUser(data))
    }

    handleClick = () => { 
        this.setState({ 
            login: !this.state.login
        })
    }
        
    findUser = (users) => { 
        if (this.state.user !== null && this.state.password !== null) {
        let foundUser = users.find(user => user.username === this.state.username) 
            if(this.state.login === false) {
                if (foundUser) {
                    alert('User already exists!') 
                } else {
                fetch('https://powerful-peak-13449.herokuapp.com/users', {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json'
                    },
                    body: JSON.stringify({
                        username: this.state.username, 
                        password: this.state.password
                    })
                    }).then(resp=>resp.json())
                    .then(data=> {
                    this.props.setCurrentUser(data)
                    localStorage.user_id = data.id
                    this.props.history.push('/search')} )
                    alert('Profile created!')
                } 
            } else if (this.state.login === true) { 
                if (this.state.password === foundUser.password) { 
                    this.props.setCurrentUser(foundUser)
                    localStorage.user_id = foundUser.id
                    this.props.history.push('/search')
                } else { 
                    alert('Please try again')
                }
            }
        } else { 
            alert('Please try again')
        }
    }




    render() {
        return (
            <div className='sign-up-form' >
                {this.state.login 
                ? 
                <div>
                    <h1>Login</h1> 
                    <button className='login-btn' onClick={() => this.handleClick()}>Create a Profile!</button>
                </div>
                
                : 
                <div>
                    <h1>Sign Up</h1>
                    <button className='login-btn' onClick={() => this.handleClick()}>Already a User?</button>
                </div>}

                <form onSubmit={this.handleSubmit}> 
                    <div>
                        <input type='text' name='username' placeholder='Username' onChange={this.handleChange}/> 
                    </div>
                    <div>
                        <input type='password' name='password' placeholder='Password' onChange={this.handleChange} />
                    </div>
                    <button className='sign-up-btn' type='submit' value='Submit'>Submit</button> 
                    
                </form>
                
            </div>
        )
    }
}
