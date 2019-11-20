import React from 'react'
import SearchListItem from './SearchListItem'

export default function SearchList(props) {
    console.log(props)
    return (
        <div className='search-list-container'>
           <SearchListItem 
           Carriers={props.Carriers} 
           Currencies={props.Currencies} 
           Places={props.Places}
           Quotes={props.Quotes} /> 
        </div>
    )
}


