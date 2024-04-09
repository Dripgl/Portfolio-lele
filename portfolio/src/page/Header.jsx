import React from "react";
import { Button } from "@mui/material";
import "../styles/Header.css"
import Card from "../components/Card";


function Header() {

    return (

        <div className="container_home">
            <div className="ido_container">
                <h1>I do Code &</h1>
                <h1 className="chill">Chill</h1>
                <span className="span1">🍿</span>
            </div>
            <h1 className="subtitle">
                <p className="passionate-software-engineer">
                    Passionate Software Engineer with a focus on React Native
                    development,
                </p>
                <p className="dedicated-to-crafting">
                    dedicated to crafting elegant and user-friendly mobile
                    applications.
                </p>
            </h1>
            <div className="contact_button">
                <Button
                    className="style_button"
                    disableElevation={true}
                    variant="contained"
                    sx={{
                        textTransform: "none",
                        color: "#000",
                        fontSize: "15",
                        background: "#ffff",
                        borderRadius: "75px",
                        "&:hover": { background: "#9c83ff" },
                        width: 187,
                        height: 55,
                    }}
                >
                    Contact Me
                </Button>
            </div>

            <div className="projects_container">
                <div>
                    <h1 className="title_section">About Me</h1>
                    <div>
                        <h2 className="explore-now">Explore Now</h2>
                    </div>
                </div>
            </div>

            <Card />

            <div className="projects_container">
                <div>
                    <h1 className="title_section">Projects</h1>
                    <div>
                        <h2 className="explore-now">Explore Now</h2>
                    </div>
                </div>
            </div>
            <div className="web-h-r-info-wrapper">
                <div className="web-h-r-info">
                    <div className="web-h-r-title-parent">
                        <div className="web-h-r-title">
                            <div className="webhr2">WebHR</div>
                            <div className="verge-title">
                                <div className="designed-a-modern">
                                    Designed a modern UI website comprising more than 50 screens,
                                    along with the integration of a blog using Next.js.
                                </div>
                            </div>
                        </div>
                        <div className="current-job-title">
                            <div className="react-stack">
                                <div className="verge-systems">Verge Systems</div>
                                <div className="payoasis-title">
                                    <div className="developed-the-verge">
                                        Developed the Verge Systems website using React.js.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hire-side-logo-parent">
                        <div className="hire-side-logo">
                            <div className="hireside">HireSide</div>
                            <div className="developed-a-web">{`Developed a web application on Next.js that allows users to apply for jobs, create job posts, and manage their company profiles. `}</div>
                        </div>
                        <div className="payoasis-parent">
                            <div className="payoasis">{`Payoasis `}</div>
                            <div className="designed-the-modern">
                                Designed the modern UI for a banking website utilizing Gatsby.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}


export default Header;