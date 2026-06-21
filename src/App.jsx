import Header from './components/Header.jsx';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About.jsx';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Skills from './components/Skills';
function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills/>
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;