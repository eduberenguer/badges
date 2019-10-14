import React from 'react'
import confLogo from '../images/badge-image.svg'
import './styles/Badge.css';

class Badge extends React.Component{
    render() {
        return(
            <div className="Badge">
                <div className="Badge__header">
                    <img src={confLogo} alt="Imagen de referencia"/>
                </div>
                <div className="Badge__section-name">
                    <img src="https://www.gravatar.com/avatar/HASH" alt="Logo de la conferencia" className="Badge__avatar"/>
                    <h1>Richard <br/> Kaufman</h1>
                </div>
                <div className="Badge__section-info">
                    <p>Frontend Engineer</p>
                    <p>@sparragus</p>
                </div>
                <div className="Badge__footer">
                    #Platzi
                </div>
            </div>
        )
    }
}

export default Badge