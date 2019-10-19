import React from 'react'
import {Link} from "react-router-dom";

class Home extends React.Component{
    render() {
        return(
            <React.Fragment>
                <Link to={'/badges'} className='btn btn-primary'>
                    Start
                </Link>
            </React.Fragment>
        )
    }
}

export default Home