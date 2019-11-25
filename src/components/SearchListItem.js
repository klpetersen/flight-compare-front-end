import React from 'react'


export default function SearchListItem(props) {
    console.log(props.Quotes)

    const formatQuote = () => { 
        if(props.Quotes !== null && props.Quotes[0] !== undefined) { 
            let quote = props.Quotes[0]
            let carrier = findCarrier(quote.OutboundLeg.CarrierIds[0])
            let direct = quote.Direct ? 'nonstop' : 'connections'; 
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
        console.log(carrier, direct, date, departCity, destination, price)
        return(
        <div className='flight-detail-card'> 
            <h2>{carrier}</h2>
            <p className='direct-flight'>{direct}</p>
            <p className='departure-date'>{date}</p>
            <p className='departure-city'>{departCity}</p>
            <p className='destination'>{destination}</p>
            <p className='price'>{price}</p>
            <button onClick={() => handleClick(carrier, direct, date, departCity, destination, price)}>Save</button>
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
        return foundCity.CityName
    }
                
    const handleClick = (carrier, direct, date, departCity, destination, price) => {
        fetch('http://localhost:3000/searches', { 
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
