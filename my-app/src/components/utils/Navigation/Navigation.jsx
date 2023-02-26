import React from 'react';
import "./navigation.scss";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Twitter from '@material-ui/icons/Twitter';


function Navigation() {

    return (

        <nav className="navigation">
            <div className="wrapper">
                <div className="left">
                    <a href="#about" className="logo">Tray Pearce </a>
                    <div className="itemContainer">
                        <ul>
                            <li><a href="https://github.com/ilike3p" target="_blank" rel="noreferrer"><GitHubIcon className="icon"></GitHubIcon></a></li>
                            <li><a href="https://www.linkedin.com/in/tray-pearce-04018a20/" target="_blank" rel="noreferrer"><LinkedInIcon className="icon"></LinkedInIcon></a></li>
                        </ul>
                    </div>
                </div>

                <div className="right">
                    <ul>
                        <li><a href="#about">About Me</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="#resume">Resume</a></li>
                    </ul>
                </div>

            </div>

        </nav>
    
    );
}

export default Navigation;
