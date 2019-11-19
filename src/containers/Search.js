import React, { Component } from 'react'
import SearchList from '../components/SearchList'

export default class Search extends Component {

    state = { 
        Carriers: null, 
        Currencies: null, 
        Places: null, 
        Quotes: null
      }
      
    componentDidMount() { 
      fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/US/USD/en-US/SFO-sky/ORD-sky/2019-12-01?inboundpartialdate=2019-12-10", {
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
          "x-rapidapi-key": "e97c8b15b3msh52caadd348f42c4p16e807jsne1ae8e66764f"
        }
      })
          .then(resp => resp.json())
          .then(data => this.setState({
              Carriers: data.Carriers, 
              Currencies: data.Currencies, 
              Places: data.Places, 
              Quotes: data.Quotes
          }))
          .catch(err => {
            console.log(err)
          })
    }   
      
    render() {
    return (
        <div className='search-container'>
           <SearchList 
              Carriers={this.state.Carriers} 
              Currencies={this.state.Currencies} 
              Places={this.state.Places}
              Quotes={this.state.Quotes}
            /> 
        </div>
    )
    }
}
