import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import BinaryBackdrop from './components/BinaryBackdrop.jsx';

function App() {
  return (
    <div className="app-shell portfolio-shell">
      <BinaryBackdrop />
      <Navbar />
      <main className="site-main" id="top">
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
