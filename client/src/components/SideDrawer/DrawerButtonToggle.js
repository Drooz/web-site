import React from 'react';
import './DrawerButtonToggle.css';

const drawerButtonToggle = props => (
    <button className="toggle-button" onClick={props.hover}>
        <div className="toggle-button-line"/>
        <div className="toggle-button-line"/>
        <div className="toggle-button-line"/>
    </button>




);

export default drawerButtonToggle;