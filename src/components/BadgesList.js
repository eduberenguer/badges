import React from 'react'
import './styles/BadgeList.css'
import confLogo from "../images/badge-image.svg";

const BadgesList = (props) =>{
        return(
            <React.Fragment>
                {
                    props.badges.badges.map(item => {
                    return(
                        <div className="item" key={item.id}>
                            <div className="item__header">
                                <img src={confLogo} alt="Imagen de referencia"/>
                            </div>
                            <div className="item__section-name">
                                <img src={item.avatarUrl} alt={item.name} className='item__avatar'/>
                                <h1>{item.firstName} <br/> {item.lastName}</h1>
                            </div>
                            <div className="item__section-info">
                                <p>{item.email} :: {item.twitter}</p>
                            </div>
                        </div>
                    )}
                )}
            </React.Fragment>
        )
}

export default BadgesList