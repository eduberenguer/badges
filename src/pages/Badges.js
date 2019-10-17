import React from 'react'

import './styles/Badges.css'
import logo from '../images/logo.svg'
import Navbar from "../components/Navbar";
import BadgesList from "../components/BadgesList";

class Badges extends React.Component{
    state = {
        data: [
            {
               "id":"1231231",
               "firstName": "Daphney",
               "lastName": "Edu",
               "email": "asdad@asd",
               "jobTitle": "National",
                "twitter": "asdasd@aeda",
                "avatarUrl": "https://www.test.com"
            },
            {
                "id":"1231231",
                "firstName": "Daphney",
                "lastName": "Edu",
                "email": "asdad@asd",
                "jobTitle": "National",
                "twitter": "asdasd@aeda",
                "avatarUrl": "https://www.test.com"
            }
        ]
    }
    render() {
        return(
            <div>
                <Navbar />
                <div className='Badges'>
                    <div className='Badges__hero'>
                        <div className='Badges__container'>
                            <img className='Badges_conf-logo' src={logo} alt="Logo"/>
                        </div>
                    </div>
                </div>
                <div className='Badges__container'>
                    <div className='Badges__buttons'>
                        <a href="/badges/new" className='btn btn-primary'>
                            New Badge
                        </a>
                    </div>
                    <div className='BadgesList'>
                        <div className='Badges__container'>
                            <BadgesList badges={this.state.data}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Badges