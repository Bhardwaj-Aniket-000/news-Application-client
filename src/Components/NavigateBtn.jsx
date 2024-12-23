import React from 'react'

const NavigateBtn = ({handleNextNavigate,handlePrevNavigate,currentPage,totalPage}) => {
  return (
    <div className="btn">
         <button onClick={() => {
            handlePrevNavigate()
         }}>previous</button>
         <div className="pages">
            <p>{currentPage} page </p>
            <p> of {totalPage}</p>
         </div>
         <button onClick={() => {
            handleNextNavigate()
         }}>next</button>
    </div>
  )
}

export default NavigateBtn
