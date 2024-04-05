import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import "../styles/ParticlesContainer.css";

const ParticlesContainer = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#181818",
        },
      },
      fpsLimit: 60,
      particles: {
        color: {
          value: "#FFFFFF",
        },
        links: {
          color: "#FFFFFF",
          distance: 150,
          enable: false, // Disabilita i collegamenti tra le particelle
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "out",
          },
          random: true,
          speed: 1, // Velocità di movimento delle particelle
          straight: false,
        },
        number: {
          density: {
            enable: true,
            value_area: 800, // Area in cui le particelle si distribuiscono
          },
          value: 100, // Numero totale di particelle
        },
        opacity: {
          value: 0.5, // Opacità delle particelle
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 2, max: 10 }, // Dimensione dei cerchi trasparenti
          animation: {
            enable: true, // Abilita l'animazione delle dimensioni
            speed: 1, // Velocità di animazione delle dimensioni
            sync: true,
          },
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (init) {
    return (
      <div className="particles-container">
        <Particles
          id="tsparticles"
          className="particles_imp"
          particlesLoaded={particlesLoaded}
          options={options}
        />
        <div className="content-above-particles">
          {/* Contenuto da visualizzare sopra il background delle particelle */}
          <img src="path_to_your_image" alt="Your Image" />
          {/* Altri elementi aggiunti sopra il background delle particelle */}
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default ParticlesContainer;
