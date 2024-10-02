import React from 'react'
import './App.css'
import { trending, originals, action, comedyMovies, horrerMovies, romanceMovies, documentaries } from './urls'
import NavBar from './Componets/Navbar/NavBar'
import Banner from './Componets/Banner/Banner'
import RowPost from './Componets/Rowpost/RowPost'

function App() {

  return (
    <>
      <div className="App">
        <NavBar />
        <Banner />
        <RowPost url={trending} title='Trending' />
        <RowPost url={action} title='Action' isSmall />
        <RowPost url={originals} title='Netflix Originals' />
        <RowPost url={comedyMovies} title='Comedy Movies' isSmall />
        <RowPost url={horrerMovies} title='Horror Movies' />
        <RowPost url={romanceMovies} title='Romance Movies' isSmall />
        <RowPost url={documentaries} title='Documentaries' isSmall />
      </div>
    </>
  )
}

export default App
