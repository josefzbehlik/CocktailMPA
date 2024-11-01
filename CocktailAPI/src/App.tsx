import { useState } from 'react'
import DataDisplay from './components/DataDisplay';
import  SearchBar  from './components/SearchBar.tsx'
import './App.css'

function App() {


  return (
    <>
      <SearchBar />
      <DataDisplay />
    </>
  )
}

export default App
