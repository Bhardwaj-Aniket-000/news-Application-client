import React from 'react'
import "./shimmerEffect.css"
const HomeShimmerEffect = () => {
    // create temprary array from array method...
    // 1) new Array(10).fill("empty")
    // 2) Array.from({length:10})
  return (
    <div className='shimmerEffectContainer'>
        {Array.from({length:39}).map
        ((element,index) => {
            return <div key={index} className="shimmerEffectCard  bg-slate-400 animate-pulse">
                <div className="img bg-slate-300 animate-pulse"></div>
                <div className="h3 bg-slate-300 animate-pulse"></div>
                <div className="description bg-slate-300 animate-pulse"></div>
                <div className="publish bg-slate-300 animate-pulse"></div>
            </div>
        })}
    </div>
  )
}

export default HomeShimmerEffect
