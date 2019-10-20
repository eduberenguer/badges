import React from 'react'
import { Link } from 'react-router-dom'

import './styles/PageError.css'

const PageError = (props) => {
    return(
        <div className='PageError'>
            <div >❌{props.error}🤦🏻‍♂️</div>
            <Link to={'/'} className='btn btn-primary'>Home</Link>
        </div>

    )
}

export default PageError