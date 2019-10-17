import React from 'react'

class BadgesList extends React.Component{
    render() {
        return(
            <ul className='list-unstyled'>
                {this.props.badges.map(item => {
                    return(
                        <li key={item.id}>{item.firstName}</li>
                    )}
                )}
            </ul>
        )
    }
}

export default BadgesList