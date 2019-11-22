import React, { Component } from 'react'

export default class SearchBar extends Component {

    state = { 
        origin: null, 
        destination: null, 
        date: null 
    }

    handleChange = (event) => { 
        let target = event.target; 
        this.setState({ 
            [target.name]: target.value
        })
    } 

    handleSubmit = (event) => { 
        event.preventDefault(); 
        this.props.findFlight(this.state.origin, this.state.destination, this.state.date)
    }

    handleSignOut = () => { 
        this.props.signOut()
        localStorage.removeItem('user_id')
        this.props.history.push('/')
    }

    render() {
        return (
            <div className='search-bar-container'>
                <div> 
                    <form onSubmit={this.handleSubmit}>
                        <label>FROM</label> 
                            <input name ='origin' type='text' placeholder='Airport Code' onChange={this.handleChange}/>
                        <label>TO</label>
                            <input name='destination' type='text' placeholder='Airport Code' onChange={this.handleChange}/> 
                        <label>WHEN</label>
                            <input name='date' type='text' placeholder='0000-00-00' onChange={this.handleChange}/> 
                        <button type='submit'>Submit</button>
                    </form>
                    <button onClick={() => this.handleSignOut()}>SignOut</button>
                </div>
            </div>
        )
    }
}
