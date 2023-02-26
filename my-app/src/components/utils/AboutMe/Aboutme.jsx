import React from 'react';
import "../AboutMe/./aboutMe.scss"
import { useEffect, useRef } from 'react';
import { init } from 'ityped'


function About() {
    const textRef = useRef();

    useEffect (()=>{
       init(textRef.current, {
        showCursor: true,
        backDelay: 1500,
        backSpeed: 60,
        strings: ["Full Stack Developer", "Web Dev", "Passionate Learner"],   
       });

    }, []);

    return (
        <div className="about" id="about">
            <div className="left">
                <div className="imgContainer">
                    <img src=png" alt="tri pic"/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>This is my Portfolio</h2>
                    <h1>Tray Pearce</h1>
                    <h3>Web Developer <span ref={textRef}></span></h3>
                    <br/>
                    <p> Passionate web developer, that enjoys createing web applications that are simple and improves everyones quality of life. 
                        I'm looking to optimized solutions that enhances the user experience.

                        <br /> <br />
                        Recent bootcamp graduate with a passion for building dynamic and user-friendly web applications.   

                        <br /> <br />
                        Being an ambitious problem solver, I'm driven by a chanllenges and decided to follow the one ive been running from. 
                        I'm motivated by the challenge to create a project that improves mankind. I enjoy spending my time enhancing my newly learned skills. 
                        Ultimately my dreams are now starting to come true by pursuing my career as a web developer.

                        <br /> <br />
                        Completed the full stack web developent bootcamp at UCLA Extensions, I am actively seeking opportunities to expand my knowledge and continue my education and gain experience.

                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;