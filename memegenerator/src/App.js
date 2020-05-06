import React from 'react'
import './App.css'
import Header from './headerComp'
import Memes from './memeGeneratorComp'


function App(){//component that renderes other components to the screen.
  return(
    <div>
      <Header/>
      <Memes/>
    </div>
  )
}
export default App