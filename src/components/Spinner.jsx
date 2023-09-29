import React from 'react'
import "./spinner.css"
const Spinner = () => {
  return (
    <div className='w-[100vw] h-[80vh] flex justify-center items-center'>
      <div className="custom-loader"></div>
    </div>
  )
}

export default Spinner
