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
           <div className='fullscreen'>
            <ul>
                <li><a href='#'>DashBoard</a></li>
                <li><a href='#'>Reviews</a></li>
                <li><a href='#'>Hotel Manager</a></li>
                <li><a href='#'>Settings</a></li>
            </ul>
            </div>
         <div class='menu'>
             <button class='menubutton'><i id='menuicon' class="fas fa-1.5x fa-bars"></i></button>
             <div class='dropdown'>
             <a href='#'>DashBoard</a><br></br>
                <a href='#'>Reviews</a><br></br>
                <a href='#'>Hotel Manager</a><br></br>
                <a href='#'>Settings</a>

             </div>
         </div>
    

            
            
        </div>
        </div>

    );   
};

export default NavigationBar;