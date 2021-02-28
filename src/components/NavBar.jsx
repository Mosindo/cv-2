import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from  "react-icons/ai";
import './../navbar.css'; 


const NavBar = () => {

    return (
        <div className=""> 
            <nav>
                <div className="id">
                 <img src="./media/Mosindo-photo.jpg" alt="profil-pic"/>  
                 <h3>Mosindo Mbilinyama</h3>
                </div>
                <ul  className='navbar-liste'>
                    <li >
                        <Link exact to="./">
                            <span>Accueil</span>
                        </Link>
                    </li>
                    <li >
                        <Link exact to="./competence">
                            <span>Compétences</span>
                        </Link>
                    </li>
                    <li >
                        <Link exact to="./portfolio">
                            <span>Portfolio</span>
                        </Link>
                    </li>
                    <li >
                        <Link exact to="./contact">
                            <span>Contact</span>
                        </Link>
                    </li>
                </ul>
                <div>
                <ul  className="reseaux">
                    <li> <FaIcons.FaLinkedin/></li>
                    <li> <FaIcons.FaGithub/></li>
                </ul>
                </div>
            </nav> 
            
        </div>
    )
}

export default NavBar;
