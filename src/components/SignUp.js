import React, { Component } from 'react'

export default class SignUp extends Component {

    state = { 
        username: null, 
        password: null
    }

    handleChange = (event) => { 
        let target = event.target; 
        this.setState({ 
            [target.name]: target.value
        })
    } 

    handleSubmit = (event) => { 
        event.preventDefault() 
        fetch('http://localhost:3000/users')
            .then(resp => resp.json())
            .then(data => this.findUser(data))
        }
        
        findUser = (users) => { 
            let foundUser = users.find(user => user.username === this.state.username)
           if (foundUser) {
            alert('User already exists!')
           } else { 
            fetch('http://localhost:3000/users', {
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
                this.props.history.push('/search')} )
                alert('Profile created!')
           }
        }



    render() {
        console.log(this.props)
        return (
            <div className='sign-up-form' >
                <h1>Sign Up</h1>
                <form onSubmit={this.handleSubmit}> 
                    <div>
                        <input type='text' name='username' placeholder='Username' onChange={this.handleChange}/> 
                    </div>
                    <div>
                        <input type='text' name='password' placeholder='Password' onChange={this.handleChange} />
                    </div>
                    <button type='submit' value='Submit'>Submit</button> 
                </form>
                
            </div>
        )
    }
}
