import './App.css';
import Navbar from './pages/navbar/Navbar';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contacts from './pages/contacts/Contacts';
import Projects from './pages/projects/Projects';
import Skills from './pages/skills/Skills';
import Bottom from './pages/bottom/Bottom';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contacts />
      <Bottom />
    </div>
  );
}

export default App;
