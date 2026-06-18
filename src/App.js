import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Education } from './components/Education';
import { Leadership } from './components/LeaderShip';
import { Analytics } from '@vercel/analytics/react';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Projects />
      <Education />
      <Leadership />
      <Contact />
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
