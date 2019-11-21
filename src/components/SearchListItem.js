import React from 'react'

export default function SearchListItem(props) {
   
    const mapQuotes = () => { 
        if(props.Quotes !== null && props.Quotes !== undefined) { 
            return props.Quotes.map((quote, i) => {  
                let carrier = findCarrier(quote.OutboundLeg.CarrierIds[0])
                let direct = quote.Direct ? 'nonstop' : 'connections'; 
                let date = formatDate(quote.OutboundLeg.DepartureDate)
                let departCity = findCity(quote.OutboundLeg.OriginId)
                let destination = findCity(quote.OutboundLeg.DestinationId)
                let price = quote.MinPrice

                return (
                    <div key={i} className='flight-detail-card'> 
                        <h2>{carrier + ' '}</h2>
                        <p className='direct-flight'>{direct}</p>
                        <p className='departure-date'>{ date + ' '}</p>
                        <p className='departure-city'>{ departCity + ' '}</p>
                        <p className='destination'>{ destination + ' '}</p>
                        <p className='price'>{price + ' '}</p>
                        <button onClick={() => handleClick(carrier, direct, date, departCity, destination, price)}>Save</button>
                    </div>
                )
            })
        } else if (props.Quotes === undefined) { 
           return (
                <div> 
                    <h2>Sorry, no flights found!</h2>
                </div>
                )
        } else if (props.Quotes === null) { 
            return (
                <div> 
                    <h2>Please search flights...</h2>
                </div>
            )
        }
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
        })    
    }


    return (
        <div>
            {mapQuotes()}
        </div>
    )
}
