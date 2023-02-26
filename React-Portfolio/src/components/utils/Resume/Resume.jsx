mport React from 'react';
import "./resume.scss"


function Resume() {

    return (
        <div className="resume" id="resume">
            <h2>Tray Pearce Resume</h2>
            <p>Please check out <a href="https://drive.google.com/file" target="_blank" rel="noreferrer">downloadable resume here</a></p>
            <h3>Full Stack Web Development Experience</h3>
            <p>Graduated from the UCLA Extension Full Stack Web Development Coding Bootcamp, I have gained proficiency with these technologies:</p>
            <ul>
                <i>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MySQL</li>
                <li>Sequelize</li>
                <li>MongoDB</li>
                <li>Mongoose</li>
                <li>React</li>
                </i>
            </ul>
        </div>
    );
}

export default Resume;