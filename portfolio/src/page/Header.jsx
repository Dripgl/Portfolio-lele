import React from "react";
import { Button } from "@mui/material";
import "../styles/Header.css"


function Header() {

    return (

        <div className="container_home">
            <div className="ido_container">
                <h1>I do Code &</h1>
                <h1 className="special">Chill</h1>
                <span className="span1">🍿</span>
            </div>
            <h1 className="subtitle">
                <p>
                    Passionate Software Engineer with a focus on React Native
                    development,
                </p>
                <p>
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

        </div>
    )
}


export default Header;