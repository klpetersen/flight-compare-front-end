import React, { Component } from 'react'
import SearchList from '../components/SearchList'
import SearchBar from '../components/SearchBar'
import SavedSearches from '../components/SavedSearches'
import Clouds from '../components/Clouds'

export default class Search extends Component {

    state = { 
        Carriers: null, 
        Currencies: null, 
        Places: null, 
        Quotes: null, 
        savedSearches: null
      }

    componentDidMount() { 
      fetch('https://powerful-peak-13449.herokuapp.com/searches')
          .then(resp => resp.json())
          .then(data => this.setState({ 
              savedSearches: data
          }))
    } 

    findFlight = (origin, destination, date) => {

      fetch(`https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsedates/v1.0/US/USD/en-US/${origin}-sky/${destination}-sky/${date}`, {
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
            })
          )
          .catch(err => {
            console.log(err)
          })
    }

    addToSavedSearch = (data) => { 
      this.setState({
        savedSearches: [...this.state.savedSearches, data]
      })
    }

    removeFromSavedSearch = (data) => { 
      this.setState({ 
        savedSearches: data
      })
    }
      
    render() {
    return (
          <div className='search-container'>
            <Clouds /> 
            <SearchList 
                Carriers={this.state.Carriers} 
                Currencies={this.state.Currencies} 
                Places={this.state.Places}
                Quotes={this.state.Quotes}
                user_id={this.props.user_id}
                addToSavedSearch={this.addToSavedSearch}
            /> 
            <SavedSearches 
              user_id={this.props.user_id} 
              savedSearches={this.state.savedSearches} 
              removeFromSavedSearch={this.removeFromSavedSearch}
              /> 
            <SearchBar 
              findFlight={this.findFlight} 
              signOut={this.props.signOut} 
              {...this.props} 
              /> 
          </div>
    )
    }
}
