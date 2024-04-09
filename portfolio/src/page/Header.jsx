import React from "react";
import { Button } from "@mui/material";
import "../styles/Header.css"
import Card from "../components/Card";


function Header() {

    return (

        <div>
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
                    <h1 className="about_me1">About Me</h1>
                    <div>
                        <h2 className="explore-now">Explore Now</h2>
                    </div>
                </div>
            </div>

            <Card/>
        </div>
    )
}


export default Header;