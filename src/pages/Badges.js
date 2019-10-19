import React from 'react'
import { Link } from "react-router-dom";
import './styles/Badges.css'
import logo from '../images/logo.svg'
import BadgesList from "../components/BadgesList";

class Badges extends React.Component{
    state = {
        data: []
    }
    componentDidMount(){
        fetch('https://rickandmortyapi.com/api/character/')
            .then(res => res.json())
            .then(data => {
                this.setState({data})
            })
        /* /!*setTimeout(() => {
             this.setState({data: [
                 {
                     "id":"1231231",
                     "firstName": "Daphney",
                     "lastName": "Edu",
                     "email": "asdad@asd",
                     "jobTitle": "National",
                     "twitter": "asdasd@aeda",
                     "avatarUrl": "https://www.test.com"
                 },
                 {
                     "id":"1231231",
                     "firstName": "Daphney",
                     "lastName": "Edu",
                     "email": "asdad@asd",
                     "jobTitle": "National",
                     "twitter": "asdasd@aeda",
                     "avatarUrl": "https://www.test.com"
                 }
             ]})
         },3000)*!/*/
    }
    render() {
        /*if(this.state.loading === true){
            return 'Loading...'
        }*/
        console.log(this.state.data)
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
                        <Link to="/badges/new" className='btn btn-primary'>
                            New Badge
                        </Link>
                    </div>
                    <div className='BadgesList'>
                       <div className='Badges__container'>
                           {!this.state.data.info ? 'Not data' : <BadgesList badges={this.state.data}/> }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Badges