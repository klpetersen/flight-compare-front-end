import React from 'react'

export default class SavedItems extends React.Component {

    findUser = () => { 
        if (this.props.savedSearches !== null) { 
        let foundUserData = this.props.savedSearches.filter(search => search.user_id === this.props.user_id)
        return this.displayData(foundUserData)
        }
    }

    displayData = (userData) => { 
        return userData.map((search, i) => 
        <div key={i} id={search.id}>
            {search.baggage_fee}
            {search.carrier}
            {search.date}
            {search.departCity}
            {search.destination}
            {search.direct}
            {search.price}
            <button onClick={(e) => this.handleDelete(e)}>Delete</button>
        </div>
        )
    }

    handleDelete = (event) => { 
        let elementId = event.target.parentElement.id 
        elementId = parseInt(elementId)
        let foundSearch = this.props.savedSearches.find(search => search.id === elementId) 
        fetch(`http://localhost:3000/searches/${foundSearch.id}`, {
            method: 'DELETE'
        }).then(resp => resp.json()).then(data => this.props.removeFromSavedSearch(data))
    }


    render() { 
    return (
        <div className='saved-items'>
            {this.findUser()}
        </div>
    )
    }
}
