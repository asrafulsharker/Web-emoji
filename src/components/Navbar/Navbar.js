import React,{Component} from 'react';
import {MenuItems} from "./MenuItem";
// import {Button} from "../Button";
import {Button} from '../Button';
import './Navbar.css'

class Navbar extends React.Component{
state ={clicked:false}

handleClick=()=>{
    this.setState({clicked: !this.state.clicked})
}

    render(){
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Octapia<i className="fas fa-blog"></i></h1>
                <div className="menu-icon" onClick={this.handleClick}> 
                <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>

                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item,index)=>{
                        return(
                    <li key={index}>
                        <a className={item.cName} href={item.url}>
                            {item.title}
                        </a>
                    </li>
                        )
                    })}


                    
                </ul>

                <Button>Sign In</Button>

            </nav>
        )
    }
}

export default Navbar;