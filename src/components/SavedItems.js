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
            <p key={i}>
                {search.baggage_fee}
                {search.carrier}
                {search.date}
                {search.departCity}
                {search.destination}
                {search.direct}
                {search.price}
            </p>
            )
    }
    render() { 
    return (
        <div className='saved-items'>
            {this.findUser()}
        </div>
    )
    }
}
