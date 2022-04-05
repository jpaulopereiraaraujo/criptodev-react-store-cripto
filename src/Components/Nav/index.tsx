import React from "react";

import  { Link } from 'react-router-dom'
import Logo from '../../img/bannercripto.jpg'

const Nav: React.FC = () => {

    return(
        <div className='container' >
            <img src={Logo} alt ="Logo america"  background-image/>
            <ul>
            <li><Link to ='/'>Home</Link ></li>
            
            <li><Link to ='/Contact'>Contato</Link></li>

            </ul>
            
        </div>
    )
}

export default Nav