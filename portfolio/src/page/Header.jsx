import React from "react";
import "../styles/Header.css"


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
        </div>
    )
}


export default Header;