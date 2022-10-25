import React from 'react'
import "./App.scss"

import Nav from "./components/Nav/Nav"
import Main from "./containers/Main/Main"

import beers  from './data/beers'

const App = () => {
  // const url="https://api.punkapi.com/v2/beers"
  
  // useEffect(() => {
  //   getBeers();
  // }, [])

  // const getBeers = async () => {
     
  //     const res = await fetch(url);
  //     const data = await res.json();
  //     console.log(url);
  //   }
  
  return (
    <div className='App'>
      {/* <Nav beers={beers}/> */}
      <Main />
    </div>
  )
}

export default App