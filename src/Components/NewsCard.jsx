import React from 'react'
import { Link } from 'react-router-dom'

function NewsCard({img,title,snippet,date,favicon,source}) {
  return (
    <>
    <Link to={source}>
      <div className='card'>
        <img src={img} alt="" />
        <h3>{title}</h3>
        <p>
          {snippet}
          <span>read more...</span>
          </p>
        <span>Publish on  {new Date(date).toLocaleString()}</span>
        {/* <img className="card-favicon" src={favicon} alt="source favicon " /> */}
        {/* <p className='card-favicon'>Publisher : {favicon}</p> */}
      </div>
    </Link>
    </>
  )
}

export default NewsCard
