import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({countryData}) => {
  return (
    <div className='  bg-white shadow-lg shadow-black w-64 h-80 rounded-lg flex flex-col justify-between hover:scale-110 transition-all ease-in '>
      <img src={countryData?.flags?.png} className=' rounded-lg w-64 h-40'></img>
      <Link to={`/country/${countryData?.ccn3}`}>
      <div className=' px-4 py-3 mb-8 flex flex-col gap-1'>
        <p className='font-bold text-lg'>{countryData?.name?.common}</p>
        <p className=' font-semibold'>Popultaion: <span className=' font-normal'>{countryData?.population}</span></p>
        <p className=' font-semibold'>Region: <span className=' font-normal'>{countryData?.region}</span></p>
        <p className=' font-semibold'>Capital: <span className=' font-normal'> {countryData.capital && `${countryData?.capital[0]}`}</span></p>
      </div>
      </Link>
    </div>
  )
}

export default Card
