import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { useNavigate, useParams } from 'react-router-dom';
import { useGetCounrtyByRegionQuery } from '../services/RestApi';

const Search = () => {
  const [input , setInput] = useState('')
  const navigate = useNavigate()
  return (
    <div className='w-[80%] mx-auto mb-8 lg:mt-12 flex lg:flex-row flex-col gap-3 lg:gap-0 justify-between '>
    <div className='flex items-center justify-center bg-white pl-3 lg:mx-0 mx-auto w-[80%] lg:w-[30%]'>
       <FaSearch className='text-lg'/>
       <input
      placeholder='Search for any country...'
      type='text'
      name="searchInput"
      value={input}
      className='py-2 pl-1 ml-2 focus:border-none w-[100%] rounded-lg'
      onChange={(e)=> setInput(e.target.value)}
      onKeyPress={(e)=>{
        if(e.key=='Enter'){
            navigate(`/search/${input}`)
        }
      }}
      ></input>
    </div>
    <fieldset className=' bg-white pt-2 px-3 pb-2 w-[80%] md:w-[50%] lg:w-[30%] lg:mx-0 mx-auto rounded-md flex justify-center items-center'>
      <label className=' font-semibold'>Search by region</label>
      <select
      className=' ml-2 p-1'
      onInput={(e)=>{
        e.preventDefault()
        if(e.target.value!= "All"){
          navigate(`/countries/region/${e.target.value}`)
          
        }
        else{
          navigate("/")
        }
      }}
      >
        <option>All</option>
        <option>Africa</option>
        <option>America</option>
        <option>Asia</option>
        <option>Europe</option>
        <option>Oceania</option>
      </select>
    </fieldset>
    </div>
  )
}

export default Search
