import React from 'react'

class BadgeForm extends React.Component{
    //state = {}
    /*onHandleChange = e => {
        const {value, name} = e.target
        this.setState({[name]: value})
    }*/

    handleClick = e => {
        e.preventDefault()
    }

    render() {
        return(
            <div>
                <p>New Attendant</p>
                <form onSubmit={this.handleClick}>
                    <div className="form-group">
                        <label>First Name:</label>
                        <input onChange={this.props.onChange} className='form-control' type="text" name='firstName' value={this.props.formValues.firstName}/>
                    </div>
                    <div className="form-group">
                        <label>Last Name:</label>
                        <input onChange={this.props.onChange} className='form-control' type="text" name='lastName' value={this.props.formValues.lastName}/>
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input onChange={this.props.onChange} className='form-control' type="email" name='email' value={this.props.formValues.email}/>
                    </div>
                    <div className="form-group">
                        <label>Job Title:</label>
                        <input onChange={this.props.onChange} className='form-control' type="text" name='jobTitle' value={this.props.formValues.jobTitle}/>
                    </div>
                    <div className="form-group">
                        <label>Twitter:</label>
                        <input onChange={this.props.onChange} className='form-control' type="text" name='twitter' value={this.props.formValues.twitter}/>
                    </div>
                    <button className="btn btn-primary">Save</button>
                </form>
            </div>
        )
    }
}

export default BadgeForm