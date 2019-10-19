import React from 'react'
import './styles/BadgeList.css'
import confLogo from "../images/badge-image.svg";

const BadgesList = (props) =>{
        return(
            <React.Fragment>
                {
                    props.badges.results.map(item => {
                    return(
                        <div className="item">
                            <div className="item__header">
                                <img src={confLogo} alt="Imagen de referencia"/>
                            </div>
                        <div className="item__section-name">
                            <img src={item.image} alt={item.name} className='item__avatar'/>
                            <h1>{item.name}</h1>
                        </div>
                        <div className="item__section-info">
                            <p>{item.gender} :: {item.species}</p>
                        </div>
                        </div>
                    )}
                )}
            </React.Fragment>
        )
}

export default BadgesList