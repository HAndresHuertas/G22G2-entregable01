
import { useState } from 'react'
import './App.css'
import QuoteBox from './components/QuoteBox'
import db from "./db/quotes.json"
import dbColor from "./db/colors.json"

const getRandom = (arrayElements) => {
  const quantityValues = arrayElements.length
  const randomIndex = Math.floor(Math.random() * quantityValues)
  return arrayElements[randomIndex]
}



function App() {
  const [quote, setQuote] = useState(getRandom(db))

  const [color, setColor] = useState(getRandom(dbColor))
  const newQoute = () => {
    setQuote(getRandom(db))
    setColor(getRandom(dbColor))
  }

  return (
    <div className="App" style={{ backgroundColor: color.colorFondo }}>

      <QuoteBox
        quote={quote}
        newQoute={newQoute}
        color={color}
      />
    </div>
  )
}

export default App
