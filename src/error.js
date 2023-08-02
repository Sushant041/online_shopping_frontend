import React from 'react'
import { Link } from "react-router-dom";


function Error() {
  return (
    <div className='container error'>
         <h3>404: page not found</h3>
         <Link to="/" className="btn btn-success">Go Back to Home</Link>
    </div>
  )
}

export default Error