
import './App.css';
import NavBar from "../src/Components/NavBar/Views/NavBar"
import Home from "../src/Components/Home/Views/Home"
import About from "../src/Components/About/Views/About"
import Skills from "../src/Components/Skills/Views/Skills"
import Works from "../src/Components/Works/Views/Works"
import Contact from "../src/Components/Contact/Views/Contact"

function App() {
  return (
    <div>
      <Home id="home" ></Home>
      <NavBar />
      <About />
      <Skills />
      <Works />
      <Contact />
    </div>
  );
}

export default App;
