import Navbar from './components/Navbar';
import Particles from './components/ParticlesContainer';
import SocialLinks from './components/SocialLinks';
import About from './page/About';
import Header from './page/Header';
import Project from './page/Project';



function App() {
  return (
    <div className="App">

      <Navbar />
      <Particles />
      <SocialLinks/>

      <div>
        <Header />
      </div>
      <div>
        <About />
      </div>
      <div>
        <Project />
      </div>

    </div>
  );
}

export default App;
