import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Map } from './Map/Map';

  
export const App = ()=> {
  return(
    <>
      <Header />
      <Map/>
    </>
  )
}