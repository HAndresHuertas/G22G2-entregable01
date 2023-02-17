import React from 'react'

const QuoteButton = ({ newQoute, color }) => {
    return (
        <button className='quoteBox__button' onClick={newQoute} style={{ backgroundColor: color.colorTexto }}>
            <i className='bx bxs-right-arrow'></i>
        </button>
    )
}

export default QuoteButton