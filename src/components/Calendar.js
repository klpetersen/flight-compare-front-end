import React from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default function Calendar(props) {
    return (
        <div>
            <DatePicker
                    dateFormat="yyyy-MM-dd"
                    selected={props.date}
                    onChange={(date) => props.handleChange(date)}
                    placeholderText="YYYY-MM-DD"
                />
        </div>
    )
}


