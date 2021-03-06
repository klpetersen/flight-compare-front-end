import React from 'react'


export default function SearchListItem(props) {

    const formatQuote = () => { 
        if(props.Quotes && props.Quotes[0] !== undefined) { 
            let quote = props.Quotes[0]
            console.log(props)
            let carrier = findCarrier(quote.OutboundLeg.CarrierIds[0])
            let direct = quote.Direct ? 'Nonstop' : 'Connection'; 
            let date = formatDate(quote.OutboundLeg.DepartureDate)
            let departCity = findCity(quote.OutboundLeg.OriginId)
            let destination = findCity(quote.OutboundLeg.DestinationId)
            let price = quote.MinPrice
            return formatCard(carrier, direct, date, departCity, destination, price)

        } else if (props.Quotes === undefined || (props.Quotes !== null && props.Quotes.length === 0)){
           return (
                <div> 
                    <h2 className='search-heading'>Sorry, no flights found!</h2>
                </div>
                )
        } else { 
            return (
                <div> 
                    <h2 className='search-heading'>Please search flights...</h2>
                </div>
            )
        }
    }

    const formatCard = (carrier, direct, date, departCity, destination, price) => { 
        return(
        <div className='flight-detail-card'> 
            <h2>{carrier}</h2>
            <p className='direct-flight'>{direct}</p>
            <p className='departure-date'>{date}</p>
            <p className='departure-city'>{departCity}<i className="fas fa-arrow-right fa-1x result-arrow"></i>{destination}</p>
            <p className='price'>${price}</p>
            <button className='result-submit' onClick={() => handleClick(carrier, direct, date, departCity, destination, price)}>Save</button>
        </div>
        )
    }

    const findCarrier = (id) => { 
        let foundCarrier = props.Carriers.filter(carrier => carrier.CarrierId === id)
        return foundCarrier[0].Name
    }

    const formatDate = (date) => {
        let fixDate = date.slice(0,10).split('-')
        let year = fixDate.shift() 
        fixDate.push(year)
        let newDate = fixDate.join('/')
        return newDate
    }

    const findCity = (id) => { 
        let foundCity = props.Places.find(place => place.PlaceId === id)
        console.log(foundCity)
        return foundCity.IataCode
    }
                
    const handleClick = (carrier, direct, date, departCity, destination, price) => {
        fetch('https://powerful-peak-13449.herokuapp.com/searches', { 
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({
                user_id: props.user_id, 
                baggage_fee: 0, 
                price,
                carrier,
                direct, 
                date, 
                departCity, 
                destination
            })
        }).then(resp => resp.json()).then(data => props.addToSavedSearch(data))    
    }


    return (
        <div>
            {formatQuote()}
        </div>
    )
}
