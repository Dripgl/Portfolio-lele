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
            <p className="description_about">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam amet dicta quod beatae ducimus ipsa natus eligendi eveniet quidem distinctio earum dolore, reprehenderit facere molestiae dignissimos non pariatur. Ea, consectetur.
           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus sit exercitationem illo aliquam quos vel officia tempore mollitia provident maxime a asperiores ad, fuga, accusamus repudiandae repellat totam iste molestiae.
            </p>
        </div>
    )
}


export default About;