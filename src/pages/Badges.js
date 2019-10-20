import React from 'react'
import { Link } from "react-router-dom";
import './styles/Badges.css'
import logo from '../images/platzi-conf-logo.svg'
import BadgesList from "../components/BadgesList";
import PageLoading from "../components/PageLoading"
import PageError from "../components/PageError"

import db from '../db.js'

const validateRequest = require('../utils/handleErrors')

class Badges extends React.Component{
    state = {
        data: [],
        loading: true,
        error: ''
    }

    //Simulación de una llamada a una API para recoger a los asistentes
    componentDidMount(){
        /*fetch('https://rickandmortyapi.com/api/character/')
            .then(response => validateRequest(response))
            .then(res => res.json())
            .then(data => {
                this.setState({data, loading: false})
                sessionStorage.setItem('badges', JSON.stringify(this.state.data))
            })
            .catch(error => {
                this.setState({error: error.toString(), loading: false})
            })*/
        setTimeout(() => {
             this.setState({data: db,loading: false})
         },1000)

    }
    render() {
        if(this.state.loading){
            return <PageLoading />
        }
        if(this.state.error){
            return <PageError error={this.state.error}/>
        }
        return(
            <div>
                <div className='Badges'>
                    <div className='Badges__hero'>
                        <div className='Badges__container'>
                            <img className='Badges_conf-logo' src={logo} alt="Logo"/>
                        </div>
                    </div>
                </div>
                <div className='Badges__container'>
                    <div className='Badges__buttons'>
                        <p>List of Assistants:</p>
                        <Link to="/badges/new" className='btn btn-primary'>
                            New Badge
                        </Link>
                    </div>
                    <div className='BadgesList'>
                       <div className='Badges__container'>
                           {/*{!this.state.data.info ? '' : <BadgesList badges={this.state.data}/> }*/}
                           {!this.state.data.badges.length ? '' : <BadgesList badges={this.state.data}/> }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Badges