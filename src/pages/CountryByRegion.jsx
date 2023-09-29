import React from 'react'
import { useGetCounrtyByRegionQuery } from '../services/RestApi'
import { useParams } from 'react-router-dom'
import Card from '../components/Card'
import Search from '../components/Search'
import Spinner from '../components/Spinner'
const CountryByRegion = () => {
    const {region} = useParams()
    const {data , isFetching , error} = useGetCounrtyByRegionQuery(region)
    if(isFetching){
        return( 
            <Spinner></Spinner>
        )
    }
    else if(error){
        console.log(error)
    }
    else{
        console.log(data)
        return (
            <>
            <Search/>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 px-12 gap-8 w-[90%] mx-auto  justify-center place-items-center'> 
            {
                data.map((country , i)=> <Card key={i} countryData={country}></Card>)
            }
            </div>
            </>
          )
    }

}

export default CountryByRegion
