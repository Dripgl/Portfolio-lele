import { Button } from "@mui/material";
import "../styles/Services.css";

function Services() {
    return (
        <div className="experience-container">
            <div className="web-h-r-company-logo">
                <div className="frame-container">
                    <div className="frame-div">
                        <div className="i-do-code-chill-wrapper">
                            <div className="ido_container">
                                <span>{`I do Code & `}</span>
                                <span className="chill">Chill</span>
                                <span className="span1">🍿</span>
                            </div>
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
                    <div className="contact-me-button-label">
                        <Button
                            className="contact-button1"
                            disableElevation={true}
                            variant="contained"
                            sx={{
                                textTransform: "none",
                                color: "#fff",
                                fontSize: "15",
                                background: "#000",
                                borderRadius: "75px",
                                "&:hover": { background: "#000" },
                                width: 187,
                                height: 55,
                            }}
                        >
                            Contact Me
                        </Button>
                    </div>
                </div>
            </div>
            <div className="projects-container">
                <div className="projects-container-inner">
                    <div className="about-me-parent">
                        <h1 className="about-me1">About Me</h1>
                        <div className="passionate-engineer-label">
                            <h2 className="explore-now">Explore Now</h2>
                        </div>
                    </div>
                </div>

            </div>
            <div className="experience-container-inner">
                <div className="experience-parent">
                    <h1 className="experience">Experience</h1>
                    <div className="react-native-label">
                        <h2 className="explore-now1">Explore Now</h2>
                    </div>
                </div>
            </div>

            <div>
                <div>
                    <div className="frame-parent1">
                        <div className="rectangle-parent">
                            <div className="frame-item" />
                            <div className="react-native">React Native</div>
                        </div>
                        <div className="rectangle-group">
                            <div className="frame-inner" />
                            <div className="react">React</div>
                        </div>
                        <div className="rectangle-container">
                            <div className="rectangle-div" />
                            <div className="javascript">JavaScript</div>
                        </div>
                        <div className="group-div">
                            <div className="frame-child1" />
                            <div className="typescript">Typescript</div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="experience-container-child">
                <div className="projects-parent">
                    <h1 className="projects">Projects</h1>
                    <div className="explore-now-wrapper">
                        <h2 className="explore-now2">Explore Now</h2>
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


export default Services;