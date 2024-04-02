import { Button } from "@mui/material";
import FrameComponent from "./FrameComponents";
import Services from "./Services";
import "../styles/Header.css";
import GabriImg from "../asset/gabri.png"

function Header() {
  return (
    <div className="portfolio">
      <div className="frame-parent">
        <FrameComponent />
        <div className="experience-container-wrapper">
          <Services />
        </div>
      </div>
    
      <div className="background-pattern-parent">
        <img
          className="background-pattern-icon"
          alt=""
          src="/background-pattern@2x.png"
        />
        <img className="logo-icon" loading="lazy" alt="" src={GabriImg} />
        <Button
          className="icon-sets"
          disableElevation={true}
          variant="contained"
          sx={{
            background: "#fff",
            borderRadius: "7.546099662780762px",
            "&:hover": { background: "#fff" },
            width: 126,
            height: 70.9,
          }}
        />
        <Button
          className="icon-sets1"
          disableElevation={true}
          variant="contained"
          sx={{
            background: "#fff",
            borderRadius: "7.546099662780762px",
            "&:hover": { background: "#fff" },
            width: 126,
            height: 70.9,
          }}
        />
        <Button
          className="icon-sets2"
          endIcon={<img width="31.7px" height="38px" src="/image-9.png" />}
          disableElevation={true}
          variant="contained"
          sx={{
            background: "#fff",
            borderRadius: "7.546099662780762px",
            "&:hover": { background: "#fff" },
            width: 126,
            height: 70.9,
          }}
        />
        <img className="vector-icon" loading="lazy" alt="" src="/vector.svg" />
        <img
          className="frame-child"
          loading="lazy"
          alt=""
          src="/group-1435.svg"
        />
        <img className="icon-sets3" loading="lazy" alt="" src="/vector-1.svg" />
        <img
          className="simple-iconsx"
          loading="lazy"
          alt=""
          src="/simpleiconsx.svg"
        />
      </div>
    </div>
  )
}

export default Header;