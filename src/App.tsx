import React from 'react';
import './App.css';

  
export const App = ()=> {
  return(
    <>
      <header style={{display: 'flex'}}>
        <h1>Announcements</h1>
        <button>Add</button>
        <input></input>
        <button>Search</button>
      </header>
      <div className='map'>

      </div>
    </>
  )
}