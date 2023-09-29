import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
export const RestApi = createApi({
    reducerPath: 'RestApi',
    baseQuery: fetchBaseQuery({
        baseUrl:'https://restcountries.com/v3.1'
    }),
    endpoints: (builder)=>({
        getAllCountries : builder.query({query: ()=> `/all`}),
        getCountryDetails: builder.query({query:(id)=>`/alpha/${id}`}),
        getCountryBySearch : builder.query({query:(name)=>`/name/${name}`}),
        getCounrtyByRegion : builder.query({query:(region)=>`/region/${region}`})
    })
})

export const {
    useGetAllCountriesQuery,
    useGetCountryDetailsQuery,
    useGetCountryBySearchQuery,
    useGetCounrtyByRegionQuery
} = RestApi