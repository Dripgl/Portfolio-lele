import React from "react";
import "../styles/About.css"
import GabriImg from "../asset/gabri.png"



function About() {


    return (
        <div>
            <div className="about_container">
                <div>
                    <h1 className="title_section">About Me</h1>
                    <div>
                        <h2 className="section">Explore Now</h2>
                    </div>
                </div>
            </div>
            <img className="avatar_img" src={GabriImg} alt="avatar"/>
        </div>
    )
}


export default About;