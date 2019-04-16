import React from 'react';
import './Navbar.css';
import logo from '../../assets/icons/logo-full.png';
import DrawerButtonToggle from '../SideDrawer/DrawerButtonToggle';
import {BrowserRouter as Link} from 'react-router-dom';
import { useGlobal } from 'reactn';





const navbar = props => {
    const [ global ] = useGlobal();
    return (
        
        
        <header className="navbar">
        <link href="https://use.fontawesome.com/releases/v5.0.7/css/all.css" rel="stylesheet"></link>
            <nav className="navbar__nav">
                <div>
                    <DrawerButtonToggle hover={props.drawerHandler}/>
                </div>
                <div className="navbar__logo" ><Link to="/"><img src={logo} alt="Contaxer"/></Link></div>
                <div className="spacer" />
                <div className="navbar__items">
                    <ul>
                        <li><a href="/"><img src={global.userData.photoURL} alt="Contaxer" className="navbar_profilePhoto" /></a></li>
                        <li><Link to="/profile">{global.userData.displayName}</Link></li>
                        <li><Link to="/settings"><i className="fas fa-sliders-h"></i></Link></li>
                        <li><div onClick={props.signOut}><Link to="/login"><i className="fas fa-sign-out-alt"></i></Link></div></li>
                    </ul>
                </div>
            </nav>
        </header>



    );
}
export default navbar;

