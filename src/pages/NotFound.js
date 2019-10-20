import React from 'react'
import {Link} from "react-router-dom";

import './styles/NotFound.css'

const NotFound = () => {
    return(
        <div className='NotFound'>
            404: Not Found
            <Link to={'/'} className='btn btn-primary'>Home</Link>
        </div>
    )
}

export default NotFound