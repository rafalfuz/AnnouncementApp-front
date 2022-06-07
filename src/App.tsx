import React, { useState } from 'react';
import { Route,  Routes } from 'react-router-dom';
import { AddForm } from './AddForm/AddForm';
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
      <Routes>
          <Route path='/' element={<Map />} />
          <Route path='/add' element={<AddForm />} />
      </Routes>
    </SearchContext.Provider>
    </>
  )
}