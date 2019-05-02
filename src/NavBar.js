import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './App.css'

class NavBar extends Component {
    render(){
        return(
            <nav>
                <Link to='/ArtDumb'>Art Dump</Link>
                <Link to='/'>Hello World</Link>
                <Link to='/ContactPage'>Contact Me</Link>
            </nav>
        )
    }
}

export default NavBar