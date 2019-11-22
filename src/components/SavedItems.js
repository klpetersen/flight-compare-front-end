import React from 'react'

export default class SavedItems extends React.Component {

    state = { 
        savedSearches: null
    }

    componentDidMount() { 
        if (this.props.user_id !== null) { 
            fetch('http://localhost:3000/searches')
                .then(resp => resp.json())
                .then(data => this.setState({ 
                    savedSearches: data
                }))
        }
    }

    findUser = () => { 
        if(this.state.savedSearches !== null) { 
            let foundUserData = this.state.savedSearches.filter(search => search.user_id === this.props.user_id)
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

// baggage_fee: 0
// carrier: "Frontier Airlines"
// created_at: "2019-11-21T20:53:59.842Z"
// date: "12/01/2019"
// departCity: "New York"
// destination: "Los Angeles"
// direct: "connections"
// id: 1
// price: 378
// updated_at: "2019-11-21T20:53:59.842Z"
// user_id: 1