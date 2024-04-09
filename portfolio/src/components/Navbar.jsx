import { Button } from "@mui/material";
import "../styles/Navbar.css";
import GzImg from "../asset/Gz.png"


function Navbar() {
  return (
    <nav className="frame-group">

      <img className="img_logo" src={GzImg} />

    </nav>

  )
}

export default Navbar;