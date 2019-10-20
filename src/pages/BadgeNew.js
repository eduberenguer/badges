import React from 'react'

import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'
import logo from '../images/platzi-conf-logo.svg'
import './styles/BadgeNew.css'
import PageLoading from "../components/PageLoading";

class BadgeNew extends React.Component{
    state = { form:{}, loading: false, error:null}

    handleChange = e => {
        const { name, value} = e.target
        this.setState({
            form: {
                ...this.state.form,
                [name]: value}
        })
    }

    render() {
        if(this.state.loading) {
            return <PageLoading />
        }
        return(
            <React.Fragment>
                <div className="BadgeNew__hero">
                    <img className="BadgeNew__hero-image" src={logo} alt="logo"/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge
                            firstName={this.state.form.firstName || 'FIRST_NAME'}
                            lastName={this.state.form.lastName || 'LAST_NAME'}
                            twitter={this.state.form.twitter || 'TWITTER'}
                            email={this.state.form.email || 'EMAIL'}
                            jobTitle={this.state.form.jobTitle || 'JOB_TITLE'}
                            avatarUrl="https://www.gravatar.com/avatar/HASH"
                            />
                        </div>
                        <div className="col-6">
                            <BadgeForm
                                onSubmit={this.handleSubmit}
                                onChange={this.handleChange}
                                formValues={this.state.form}
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default BadgeNew