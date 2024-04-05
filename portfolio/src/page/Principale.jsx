import Services from "./Services";
import Header from "./Header";
import "../styles/Header.css";
import Navbar from "../components/Navbar";
// import GabriImg from "../asset/gabri.png"

function Principale() {
  return (
    <div className="portfolio">
      <div className="">
        <Navbar/>
        <div className="experience-container-wrapper">
          {/* <Services /> */}
          <Header/>
        </div>
      </div>
    
      <div className="">
        {/* <img className="logo-icon" loading="lazy" alt="" src={GabriImg} /> */}
      </div>
    </div>
  )
}

export default Principale;