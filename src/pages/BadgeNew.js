import React from 'react'

import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'
import logo from '../images/badge-image.svg'
import './styles/BadgeNew.css'

class BadgeNew extends React.Component{
    state = { form:{}}

    handleChange = e => {
        const { name, value} = e.target
        this.setState({
            form: {
                ...this.state.form,
                [name]: value}
        })
    }
/*
    handleChange = (test) => {
        //const { name, value} = e.target
        this.setState({firstname: test})
        console.log(this.state.firstName)
    }
*/

    render() {
        return(
            <React.Fragment>
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
                            <BadgeForm onChange={this.handleChange} formValues={this.state.form}/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default BadgeNew