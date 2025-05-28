import React from 'react';
import {motion} from 'framer-motion';
import {styles} from '../styles';
import {services} from '../constants';
import {fadeIn, textVariant} from '../utils/motion';
import {SectionWrapper} from '../hoc';
import alexVideo from '../assets/Alex.mp4'

function About() {
    return (
        <div className="p-10 bg-lisbon rounded-lg shadow-sm">
            <h1 className="flex justify-center font-bold font-mova ml-3 text-3xl text-customGreen-200">ABOUT ME</h1>
            <div className="grid grid-cols-3 grid-rows-2 gap-4 font-small ml-4 mt-10 text-base text-[#69896E]">
                <div className="bg-customGreen-200 rounded-lg p-4 shadow-md">
                    <h2 className="flex justify-center font-bold font-mova ml-3 text-3xl text-#69896E">INTRO</h2>
                    <p className="m-3 text-medium">
                        From developing web apps to tour guiding, I thrive at the intersection of curiosity and code.
                        Hi! I’m Alex, a passionate <span className="font-bold"><a> Software Developer </a></span>  who loves building meaningful,
                        user-centered software products 💻✨.
                    </p>
                </div>
                <div className="bg-customGreen-200 rounded-lg p-4 shadow-md">
                    <h2 className="flex justify-center font-bold font-mova ml-3 text-3xl text-#69896E">MOTIVATION</h2>
                    <p className="m-3 text-medium">
                        I’m driven by curiosity and a desire to solve real-world problems 🌍 using modern technologies
                        🚀.
                        My goal is to create tools that connect 🤝 and empower people’s lives 💡.
                    </p>
                </div>
                <div className="bg-customGreen-200 rounded-lg p-4 shadow-md">
                    <h2 className="flex justify-center font-bold font-mova ml-3 text-3xl text-#69896E">QUALITIES</h2>
                    <p className="m-3 text-medium">
                        I’m interested in both web 🌐 and Android 📱 development, with academic and professional
                        experience in
                        Java ☕, Spring Boot 🌱, HTML/CSS 🎨, JavaScript ⚡, and Kotlin 🧩. Currently, I’m focusing on
                        personal projects
                        to strengthen my React skills ⚛️.
                    </p>
                </div>

                <div className="bg-customGreen-200 rounded-lg p-4 shadow-md">
                    <h2 className="flex justify-center font-bold font-mova ml-3 text-3xl text-#69896E">HOBBIES</h2>
                    <p className="m-3 text-medium">
                        Outside of tech, I’m co-building a travel startup 🧳 with friends,  and running a history-focused
                        Instagram
                        channel—PocketPedia 📜—where I simplify complex historical topics into short, engaging reels 🎥.
                        Moreover, I am a certified Tour Guide in my hometown - Timisoara.
                        I also love learning languages 🗣️ and exploring cultures 🌏—I’m currently learning Dutch 🇳🇱, with
                        an already A1 obtained certificate!
                    </p>
                </div>
                <div className="bg-customGreen-200 rounded-lg shadow-md">
                    <video
                        src={alexVideo}
                        autoPlay
                        muted
                        loop
                        className="w-full rounded-md"
                    />
                </div>
                <div className="bg-customGreen-200 rounded-lg p-4 shadow-md">
                    <h2 className="flex justify-center font-bold font-mova ml-3 text-3xl text-#69896E">GOALS</h2>
                    <p className="m-3 text-medium">
                        I’m actively looking for junior developer roles 👨‍💻 where I can grow 🌱, contribute to impactful
                        projects 💪.
                        Let’s connect! If you have exciting projects, I’d love to collaborate.
                    </p>
                </div>

                <div className="bg-customGreen-200 rounded-lg p-4 shadow-md col-span-3 flex flex-col items-center justify-center">
                    <h2 className="font-bold font-mova text-3xl text-#69896E mb-4">Want to dive deeper?</h2>
                    <p className="text-center text-[#69896E] mb-6">Read about my full journey, values, and how I became who I am.</p>
                    <a href="/story" className="bg-[#69896E] text-white font-bold py-2 px-4 rounded hover:bg-[#506b52] transition duration-200">
                        Read More / My Story →
                    </a>
                </div>


            </div>


        </div>

    );

}

export default About;
