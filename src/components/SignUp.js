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
        console.log(this.state.username, this.state.password)
    }



    render() {
        console.log(this.state.username, this.state.password)
        return (
            <div className='sign-up-form' >
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
