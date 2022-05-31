import React, { useState } from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { SearchContext } from './context/Context';
import { Map } from './Map/Map';

  
export const App = ()=> {

  const [search, setSearch] = useState('')

  return(
    <>
    <SearchContext.Provider value={{search, setSearch}} >
      <Header />
      <Map/>
    </SearchContext.Provider>
    </>
  )
}