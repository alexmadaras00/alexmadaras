import {BrowserRouter, Route, Routes} from 'react-router-dom';
import React from 'react';

import {
    About,
    Contact,
    Experience,
    Hero,
    Navbar,
    Tech,
    Projects,
} from './index.js';

const App = () => {
    return (
        <BrowserRouter>
            <div id="home" className="relative z-0">
                <div className="">
                    <Navbar/>
                    <Hero/>
                </div>

                <div id="about" className="bg-about bg-cover bg-center bg-no-repeat ">
                    <About/>
                </div>

                <div id="projects" className="bg-lisbon bg-cover bg-center bg-no-repeat pb-10">
                    <Tech/>
                    <div
                        className="bg-experience bg-cover bg-center bg-no-repeat
            rounded-tl-[150px] rounded-br-[150px]">
                        <Projects/>
                        <div
                            className="bg-experienceLight bg-cover bg-center
            bg-no-repeat rounded-tl-[150px] rounded-br-[130px]">
                            <Experience/>
                        </div>
                    </div>
                </div>
                <div id="contact" className="relative z-0">
                    <Contact/>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
