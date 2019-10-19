import React from 'react'
import {Link} from "react-router-dom";

const NotFound = () => {
    return(
        <div>
            404: Not Found
            <Link to={'/'} className='btn btn-primary'>Home</Link>
        </div>
    )
}

export default NotFound