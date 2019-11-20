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
    }


    render() {
        return (
            <div className='search-bar-container'>
                <div> 
                    <form onSubmit={this.handleSubmit}> 
                        <input name ='origin' type='text' placeholder='Origin Airport Code' onChange={this.handleChange}/>
                        <input name='destination' type='text' placeholder='Dest Airport Code' onChange={this.handleChange}/> 
                        <input name='date' type='text' placeholder='Date 0000-00-00' onChange={this.handleChange}/> 
                        <button type='submit'>Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}
