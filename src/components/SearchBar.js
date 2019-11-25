import React, { Component } from 'react'
import cloud1 from '../cloud1.png'
import cloud2 from '../cloud2.png'
import cloud3 from '../cloud3.png'
import cloud4 from '../cloud4.png'
import plane1 from '../plane1.png'

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
                <img className='cloud-1' src={cloud1} alt='cloud'/> 
                <img className='cloud-2' src={cloud2} alt='cloud'/> 
                <img className='cloud-3' src={cloud3} alt='cloud'/> 
                <img className='cloud-4' src={cloud4} alt='cloud'/> 
                <img className='cloud-5' src={cloud1} alt='cloud'/> 
                <img className='cloud-6' src={cloud4} alt='cloud'/> 
                <img className='plane-1' src={plane1} alt='cloud'/> 
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
                    <button name='sign-out' className='sign-out' onClick={() => this.handleSignOut()}><i class="fas fa-plane-departure fa-4x"></i></button>
                </div>
            </div>
        )
    }
}
