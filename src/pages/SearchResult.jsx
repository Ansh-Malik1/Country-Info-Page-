import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useGetCountryBySearchQuery } from '../services/RestApi'
import Card from '../components/Card'
import Spinner from '../components/Spinner'
const SearchResult = () => {
    const navigate = useNavigate()
    const {name} = useParams()
    const {data , isFetching , error} = useGetCountryBySearchQuery(name)
    if(isFetching){
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
        console.log(data)
        return (
            <div className=' flex flex-col justify-center items-center gap-3'>
            <button className="lg:mt-12 mt-4 mb-8 bg-white shadow-lg font-semibold rounded-lg shadow-black px-3 py-1" onClick={()=>navigate(-1)}>{`<- Back`}</button>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 px-12 gap-8 w-[90%] mx-auto'>
            {
                data.map((country , i)=>(<Card key={i} countryData={country}/>))
            }
            </div>
            </div>
            
          )
    }
  
}

export default SearchResult
