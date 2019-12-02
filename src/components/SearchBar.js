import React, {Component} from 'react'
import Clouds from './Clouds'

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
                <Clouds /> 
                <div> 
                    <form onSubmit={this.handleSubmit}>
                        <div className='search-label'>FROM:</div> 
                            <input name='origin' className ='search-origin' type='text' placeholder='Airport Code' onChange={this.handleChange}/>
                        <div className='search-label'>TO:</div>
                            <input name='destination' className='search-destination' type='text' placeholder='Airport Code' onChange={this.handleChange}/> 
                        <div className='search-label'>WHEN:</div>
                            <input name='date' className='search-date' type='text' placeholder='YYYY-MM-DD' onChange={this.handleChange}/> 
                        <button className='submit-search-btn' type='submit'>Submit</button>
                    </form>
                    <button name='sign-out' className='sign-out' onClick={() => this.handleSignOut()}><i className="fas fa-plane-departure fa-4x"></i><div className='logout-word'>Sign Out</div></button>
                </div>
            </div>
        )
    }
}
