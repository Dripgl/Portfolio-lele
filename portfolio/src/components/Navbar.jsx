import { Button } from "@mui/material";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="frame-group">
    
      <div className="title_name_wrapper">
        <b className="title_name">Gabriele Zito!</b>
      </div>
      <div className="about-button-parent">
        <button className="about-me">
          <div>About me</div>
          <div />
        </button>
        <Button
          className="contact-button"
          disableElevation={true}
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#000",
            fontSize: "13.2",
            background: "#fff",
            borderRadius: "8.796296119689941px",
            "&:hover": { background: "#fff" },
            height: 35.2,
          }}
        >
          Contact
        </Button>
      </div>
    </nav>

  )
}

export default Navbar;