import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useGetCountryDetailsQuery } from '../services/RestApi'
import Spinner from '../components/Spinner'
const CountryDetails = () => {
  const navigate = useNavigate()
  const {id} = useParams()
  const {data , isFetching , error} = useGetCountryDetailsQuery(id)
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
    
    const currencyValue = Object.values(data[0]?.currencies)
    return (
        <div className='lg:w-[70%] w-[90%] mx-auto'>
          <button className="lg:mt-6 mt-4 mb-2 bg-white shadow-lg font-semibold rounded-lg shadow-black px-3 py-1" onClick={()=>navigate(-1)}>{`<- Back`}</button>
          <div className='flex flex-col lg:flex-row mt-16 items-center justify-center lg:h-80'>
            <img src={data[0]?.flags?.svg} className='lg:w-[40%] rounded-md'></img>
            <div className='py-3 lg:px-7 px-0 lg:w-[70%] flex flex-col gap-12 items-center justify-between'>
                <p className=" text-2xl font-semibold">{data[0]?.name?.common}</p>
                <div className=' grid lg:grid-cols-2 grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2'>
                    <p className=' font-semibold'>Official Name:  <span className='font-normal'>{data[0]?.name?.official}</span></p>
                    <p className=' font-semibold'>Popultaion: <span className='font-normal'>{data[0]?.population}</span></p>
                    <p className=' font-semibold'>Region: <span className='font-normal'>{data[0]?.region}</span> </p>
                    <p className=' font-semibold'>Sub Region: <span className='font-normal'>{data[0]?.subregion}</span> </p>
                    <p className=' font-semibold'>Capital: <span  className='font-normal'>{data[0].capital&& data[0]?.capital[0]}</span></p>
                    <p className=' font-semibold'>Currencies: <span  className='font-normal'>{`${currencyValue[0].name}(${currencyValue[0]?.symbol})`}</span> </p>
                    <p className=' font-semibold'>Languages: <span className='font-normal'>{
                        Object.values(data[0]?.languages).map((lang,i)=>(<span key={i}>{lang} </span>))
                    }</span></p>
                    <p className=' font-semibold'>Time Zones: {data[0]?.timezones.map((value,  i)=> <span className='font-normal' key={i}>{value}</span>)}</p>
                </div>
                <div className=' flex flex-wrap gap-3 w-[100%] mx-auto items-center'>
                <p>Border Countries: </p>
                  {
                    data[0]?.borders.map((border, i)=> <p key={i} className=' px-1 py-1 rounded-md bg-gray-500 text-white flex justify-center items-center'>{border}</p>)
                  }
                </div>
            </div>
          </div>
        </div>
      )
  }
 
}

export default CountryDetails