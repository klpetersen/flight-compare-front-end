import React from 'react'

export default function SavedItems(props) {

    const fetchSearches = () => { 
        if (props.user_id !== null) { 
            fetch('http://localhost:3000/searches')
                .then(resp => resp.json())
                .then(data => findUser(data))
        }
    }

    const findUser = (searches) => { 
        let userData = searches.filter(search => search.user_id === props.user_id)
        displayData(userData)
    }

    const displayData = (userData) => { 
        console.log(userData)
        return userData.map(search => 
            console.log(search)
            // <p>
            //     {search.baggage_fee}
            //     {search.carrier}
            //     {search.date}
            //     {search.departCity}
            //     {search.destination}
            //     {search.direct}
            //     {search.price}
            // </p>
            )
    }

    return (
        <div className='saved-items'>
            {fetchSearches()}
        </div>
    )
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