import React from 'react'
import SavedItems from './SavedItems'

export default function SavedSearches(props) {
    return (
        <div className='saved-search-container'>
            <SavedItems user_id={props.user_id}/> 
        </div>
    )
}
