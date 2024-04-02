import { Button } from "@mui/material";
import "../styles/FrameComponents.css";

function FrameComponents() {
  return (
    <header className="frame-group">
      <div className="title-parent">
        <b className="title">{`Gabriele`}</b>
        <div className="ibrahim-memon-label">
          <div className="title1">Zito</div>
        </div>
      </div>
      <div className="ibrahim-memon-wrapper">
        <b className="ibrahim-memon">Gabriele Zito!</b>
      </div>
      <div className="about-button-parent">
        <button className="about-button">
          <div className="about-me">About me</div>
          <div className="about-button-child" />
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
    </header>

  )
}

export default FrameComponents;