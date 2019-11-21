import React from 'react'
import SearchListItem from './SearchListItem'

export default function SearchList(props) {
    return (
        <div className='search-list-container'>
           <SearchListItem 
           Carriers={props.Carriers} 
           Currencies={props.Currencies} 
           Places={props.Places}
           Quotes={props.Quotes}
           user_id={props.user_id} /> 
        </div>
    )
}


