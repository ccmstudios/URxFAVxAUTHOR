import React from 'react'
import {Link} from 'react-router-dom';
import RZN8 from '../assets/images/RZN8CHROME.png'
import Social from '../pages/social'
import Games from '../pages/games'
import Merch from '../pages/merch'
import Home from '../pages/home'
import Gamerlogo from '../assets/images/gamerlogo.JPG'
class Navbar extends React.Component{
    render(){
        return(

            <nav>


            <div id='navbar'>

       <ul>
       
           <Link to='/'>
               <img id='rzn8nav' alt='homeRZN8' src={RZN8}/>
               </Link>
           <Link to='/games'>
               <li><h1>Games 'N Highlights</h1></li>
               </Link>
           <Link to='/merch'>
               <li><h1>Merch</h1></li></Link>
           <Link to='/social'>
               <li><h1>Let's Play</h1></li>
           </Link>
           </ul>
                   </div>

            </nav>


        )
    }
}

export default Navbar;