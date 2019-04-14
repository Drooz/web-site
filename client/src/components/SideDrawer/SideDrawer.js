import React from 'react';
import './SideDrawer.css';
import '../SideDrawer/DrawerButtonToggle.css';
import logo from '../../assets/icons/logo-full.png';
import DrawerButtonToggle from '../SideDrawer/DrawerButtonToggle';
import { Link } from 'react-router-dom';




const sideDrawer = props =>{

    let drawerClasses = 'side-drawer';
    if(props.show){
        drawerClasses = 'side-drawer open';
    } 

   return( 
   <nav className={drawerClasses}>
    <div className="side-drawer-box" >
            <div className="side-drawer-bar">
                <div className="button">
                    <DrawerButtonToggle hover={props.drawerHandler}/>
                </div>
                <div className="logo" ><a href="/"><img src={logo} alt="Contaxer"/></a></div>
            </div>
        
            <ul style={{marginTop: '20px'}}>
                <li><i className="fas fa-tachometer-alt icon"></i><Link to="/dashboard" onClick={props.closeHandler}>DashBoard</Link></li>
                <li><i className="fas fa-address-book icon"></i><Link to="/contacts" onClick={props.closeHandler}>Contacts</Link></li>
                <li><i className="fas fa-calendar-alt icon"></i><Link to="/timeline" onClick={props.closeHandler}>Timeline</Link></li>
            </ul>
        </div>
    </nav>
    );

};
export default sideDrawer;