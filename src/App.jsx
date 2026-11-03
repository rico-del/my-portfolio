import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Stats from './components/Stats.jsx';
import Pipeline from './components/Pipeline.jsx';
import Projects from './components/Projects.jsx';
import Toolchain from './components/Toolchain.jsx';
import Skills from './components/Skills.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import './portfolio-enhancements.css';

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main id="top">
        <Hero />
        <Stats />
        <Projects />
        <Pipeline />
        <Toolchain />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
