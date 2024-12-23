import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const error = useRouteError()
  return (
    <div style={{padding:"20px",height:'300px',width:"400px",margin:"auto",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",gap:"5px",fontFamily:"Arial"}}>
      <h2>Oops ! this page isn't Exist </h2>
      <h4>{error.status} {error.statusText}</h4>
      <h5>{error.data}</h5>
      <button style={{padding:"10px",border:"1px solid #000",outline:"none",backgroundColor:"#212121",borderRadius:"4px",marginTop:"10px",cursor:"pointer"}}><Link to="/" style={{textDecoration:"none",color:"#FFF",textTransform:"capitalize"}}>back To Home</Link></button>
    </div>
  )
}

export default ErrorPage
