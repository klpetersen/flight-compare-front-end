import React from 'react'

export default function SearchListItem(props) {
   
    const mapQuotes = () => { 
        if(props.Quotes !== null && props.Quotes !== undefined) { 
            return props.Quotes.map((quote, i) => {  
                return (
                    <div key={i} className='flight-detail-card'> 
                        <h2>{findCarrier(quote.OutboundLeg.CarrierIds[0]) + ' '}</h2>
                        <p className='direct-flight'>{quote.Direct ? 'nonstop ' : 'connections '}</p>
                        <p className='departure-date'>{formatDate(quote.OutboundLeg.DepartureDate) + ' '}</p>
                        <p className='departure-city'>{findCity(quote.OutboundLeg.OriginId) + ' '}</p>
                        <p className='arrival-city'>{findCity(quote.OutboundLeg.DestinationId) + ' '}</p>
                        <p className='price'>{quote.MinPrice + ' '}</p>
                        <button >Save</button>
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
                


    return (
        <div>
            {mapQuotes()}
        </div>
    )
}
