import React from 'react'

class BadgeForm extends React.Component{

    onHandleChange = e => {
        const {value, name} = e.target
        this.setState({[name]: value})
    }

    handleClick = e => {
        e.preventDefault()
        console.log('Button was clicked')
    }

    render() {
        return(
            <div>
                <p>New Attendant</p>
                <form onSubmit={this.handleClick}>
                    <div className="form-group">
                        <label>First Name:</label>
                        <input onChange={this.onHandleChange} className='form-control' type="text" name='firstName'/>
                    </div>
                    <button className="btn btn-primary">Save</button>
                </form>
            </div>
        )
    }
}

export default BadgeForm