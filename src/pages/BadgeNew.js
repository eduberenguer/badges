import React from 'react'

import NavBar from '../components/Navbar'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'
import logo from '../images/badge-image.svg'
import './styles/BadgeNew.css'

class BadgeNew extends React.Component{
    render() {
        return(
            <div>
                <NavBar />
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={logo} alt="logo"/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge
                            firstName="Richard"
                            lastName="Kaufman"
                            twitter="sparragus"
                            jobTitle="Frontend Engineer"
                            avatarUrl=""
                            />
                        </div>
                        <div className="col-6">
                            <BadgeForm />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BadgeNew