import React from "react";
import "../styles/Project.css"
import Card from "../components/Card";



function Project() {


    return (
        <div>
            <div className="projects_container">
                <div>
                    <h1 className="title_section">Project Me</h1>
                    <div>
                        <h2 className="section">Explore Now</h2>
                    </div>
                </div>
            </div>
            
            <Card/>
        </div>
    )
}


export default Project;