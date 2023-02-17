import React from 'react'
import QuoteButton from './QuoteButton'

const QuoteBox = ({ quote, newQoute, color }) => {
    return (
        <div className='quoteBox' style={{ color: color.colorTexto }}>
            <ul className='quoteBox__list'>
                <li><i className='bx bxs-quote-alt-left' ></i></li>
                <li><p className='quoteBox__quote'>{quote.quote}</p></li>
                <li><i className='bx bxs-quote-alt-right' ></i></li>
            </ul>

            <h2 className='quoteBox__author'>{quote.author} </h2>
            <QuoteButton newQoute={newQoute} color={color} />
        </div>
    )
}

export default QuoteBox