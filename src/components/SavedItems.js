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
        <div className='saved-items' key={i} id={search.id}>
            {/* {search.baggage_fee} */}
           <h4>{search.carrier}</h4> 
            <div className='saved-date'>{search.date}</div>
            <div className='saved-origin'>{search.departCity}</div>
            <div className='arrow-right'><i class="fas fa-arrow-right"></i></div>
            <div className='saved-destination'>{search.destination}</div>
            <div className='saved-direct'>{search.direct}</div>
            <div className='saved-price'>${search.price}</div>
            <button onClick={(e) => this.handleDelete(e)}><i className="fas fa-trash fa-2x"></i></button>
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
        <div >
            {this.findUser()}
        </div>
    )
    }
}
