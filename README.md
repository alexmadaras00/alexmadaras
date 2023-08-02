import {BrowserRouter, Route, Routes} from 'react-router-dom';

import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Projects,
} from './components';
import BusinessIntelligence from "./components/BusinessIntelligence.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0">
        <div>
          <Navbar />
          <Hero />
        </div>

        <div className="bg-about bg-cover bg-center bg-no-repeat">
          <About />
        </div>

        <div className="bg-lisbon bg-cover bg-center bg-no-repeat pb-10">
          <Tech />
        </div>

        <Projects />
        <Routes>
          <Route path="/business-intelligence" component={BusinessIntelligence} />
        </Routes>

        <div
          className="bg-experience bg-cover bg-center bg-no-repeat
            rounded-tl-[150px] rounded-br-[150px]">
          <div
            className="bg-experienceLight bg-cover bg-center
            bg-no-repeat rounded-tl-[150px] rounded-br-[130px]">
            <Experience />
          </div>
        </div>
        <div className="relative z-0">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

