import React from 'react'
import { useGetAllCountriesQuery } from './services/RestApi'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import CountryDetails from './pages/CountryDetails'
import Header from './components/Header'
import SearchResult from './pages/SearchResult'
import CountryByRegion from './pages/CountryByRegion'
const App = () => {
  return (
    <div className=' bg-gray-100/60 min-h-[100vh] max-h-fit pb-4'>
    <Header/>
    <Routes>
      <Route exact path="/" element={<Home/>}></Route>
      <Route exact path="/country/:id" element={<CountryDetails/>}></Route>
      <Route exact path = "/search/:name" element={<SearchResult/>}></Route>
      <Route exact path = "/countries/region/:region" element={<CountryByRegion/>}></Route>
    </Routes>
    </div>

)
}

export default App

