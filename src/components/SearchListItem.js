import React from 'react'

export default function SearchListItem(props) {
   
    const mapQuotes = () => { 
        if(props.Quotes !== null) { 
            return props.Quotes.slice(0,20).map((quote, i) => {  
                return <li key={i}>
                    Carrier: {findCarrier(quote.OutboundLeg.CarrierIds[0])}
                    Direct: {quote.Direct ? 'Yes ' : 'No '}
                    Price: ${quote.MinPrice + ' '}
                    Departure Date: {formatDate(quote.OutboundLeg.DepartureDate) + ' '}
                    Destination City: {findCity(quote.OutboundLeg.DestinationId) + ' '}
                    Origin City: {findCity(quote.OutboundLeg.OriginId) + ' '}
                </li>
            })
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
        return foundCity.CityName + ' Airport: ' + foundCity.Name
    }
                


    return (
        <div>
            <ul>
                {mapQuotes()}
            </ul>
        </div>
    )
}

// Carriers: Array(4)
// 0:
// CarrierId: 851
// Name: "Alaska Airlines"
// __proto__: Object
// 1: {CarrierId: 1065, Name: "Frontier Airlines"}
// 2: {CarrierId: 1721, Name: "Sun Country Airlines"}
// 3: {CarrierId: 1793, Name: "United"}
// length: 4
// __proto__: Array(0)
// Currencies: Array(1)
// 0:
// Code: "USD"
// DecimalDigits: 2
// DecimalSeparator: "."
// RoundingCoefficient: 0
// SpaceBetweenAmountAndSymbol: false
// Symbol: "$"
// SymbolOnLeft: true
// ThousandsSeparator: ","
// __proto__: Object
// length: 1
// __proto__: Array(0)
// Places: Array(2)
// 0:
// CityId: "CHIA"
// CityName: "Chicago"
// CountryName: "United States"
// IataCode: "ORD"
// Name: "Chicago O'Hare International"
// PlaceId: 73076
// SkyscannerCode: "ORD"
// Type: "Station"
// __proto__: Object
// 1: {PlaceId: 81727, IataCode: "SFO", Name: "San Francisco International", Type: "Station", SkyscannerCode: "SFO", …}
// length: 2