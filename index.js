import React,{Component} from 'react'
import{Button} from '../Button/Button'
import {Link, useHistory, withRouter} from 'react-router-dom'
import {Menu,MenuOpen} from '@material-ui/icons'
import AuthService from '../../services/auth.service'
import './navbar.css'


class Navbarr extends Component{
    constructor(props,showModeratorBoard,showAdminBoard){
        super(props);
        this.showModeratorBoard = showModeratorBoard;
        this.showAdminBoard = showAdminBoard;

        this.state={
            clicked:false

        }
    }

    handleClicked = ()=>{
        this.setState({clicked:!this.state.clicked})
    }


    render(){



        const user  = AuthService.getCurrentUser()
        return (
        <div className="Navbar">
            <h1 className="navbar-logo">Match Making</h1>
            <div className="menu-icon" onClick={(e)=>{this.handleClicked()}}>
                {this.state.clicked ? <Menu style={{ color: "white", cursor:"pointer" }} />:<MenuOpen  style={{ color: "white", cursor:"pointer" }} />}
            </div>
            <ul className={this.state.clicked ? "navbar-menu active":"navbar-menu"}>
                
                <Link style={{textDecoration:'none',color: 'white'}} to="/home"><li className="nav-links">Home</li></Link>
                
                <Link style={{textDecoration:'none',color: 'white'}} to="/profile"><li className="nav-links">Profile</li></Link>
                
                <Link style={{textDecoration:'none',color: 'white'}} to=""><li className="nav-links">Admin</li></Link>
                <Link style={{textDecoration:'none',color: 'white'}} to=""><li className="nav-links">Moderador</li></Link>
                
                
                {
                user?<li  onClick={(e)=>{
                    try {
                        AuthService.logout();
                    } catch (error) {
                        console.log(error)
                    }
                    }}  className="nav-links-mobile">Log out</li>:<Link style={{textDecoration:'none',color: 'white'}} to="/login"><li className="nav-links-mobile">Sign in</li></Link>}
            </ul>


        </div>
        )
    }
}
export default withRouter(Navbarr);