import React from 'react' ;
import './NavBar.css';
import logo from './hc-logo.svg';

const NavigationBar = () => {
    return(
        <div>
            <p>.</p>
        <div className= 'App-header'>
            <div id='logo'>
        <img src={logo} className="App-logo" alt="logo" />
           </div>
        <nav>
            <ul>
                <li><a href='#'>DashBoard</a></li>
                <li><a href='#'>Reviews</a></li>
                <li><a href='#'>Hotel Manager</a></li>
                <li><a href='#'>Settings</a></li>
            </ul>
        </nav>
        </div>
        </div>

    );   
};

export default NavigationBar;