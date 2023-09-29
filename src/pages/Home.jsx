import React from 'react'
import Card from '../components/Card'
import { useGetAllCountriesQuery } from '../services/RestApi'
import Search from '../components/Search'
import Spinner from '../components/Spinner'
const Home = () => {
    const {data , isFetching , error} = useGetAllCountriesQuery()
    if (isFetching){
      return(
        <Spinner/>
      )
    }
    else if(error){
      return(
          <div className='w-[100vw] h-[80vh] flex justify-center items-center'>
          <p className=' text-3xl font-semibold'>Error 404 </p>
      </div>
      )

  }
  else{
    return (
      <>
     <Search/>
      <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 px-12 gap-8 w-[90%] mx-auto'>
        {
              data.map((country , i)=> <Card key={i} countryData={country}/>)
        }
      </div>
      </>
   
    )
  }
 
}

export default Home
