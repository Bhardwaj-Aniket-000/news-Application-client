import React, { useState } from 'react'
import searchIcon from "../../../assets/svg/search.svg"
import useWeatherData from '../../../hooks/useWeatherData';

const ForcastInput = () => {
    const [input,setInput] = useState()
    const {HandleInput} = useWeatherData()
    
    return (
    <div className='w-[100%] p-2 flex justify-center items-center'>
      <input type="text" className='p-2 border-none outline-none text-white bg-slate-700 m-0 rounded-e-none font-medium' value={input ?? "chandigarh"} onChange={(e) => {
        setInput(e.target.value)
      }}/>
      <button className='h-10 w-10 flex justify-center items-center md:p-[10px] rounded-md rounded-s-none text-sm font-medium bg-slate-800' onClick={() => {
        HandleInput(input)
      }}>
        <img src={searchIcon} alt="search icon" className='w-5 md:w-5'/>
      </button>
    </div>
  )
}

export default ForcastInput
