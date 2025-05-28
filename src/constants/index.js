import {
    ux,
    prototyping,
    software_dev,
    fullstack,
    nodejs,
    kotlin,
    adobexd,
    sql,
    jira,
    firebase,
    android_studio,
    python,
    colab,
    java,
    git,
    figma,
    ing,
    postgresql,
    graphql,
    leaderboard,
    math,
    movie,
    nyeusi,
    android,
    analysis,
    preparation,
    visualization,
    management,
    gameDev,
    erasmus,
    uvt,
    twente,
    victory_square, azul2, vrades, datascience,
} from '../assets';

export const navLinks = [
    {
        id: 'about',
        title: 'About',
    },
    {
        id: 'projects',
        title: 'Projects',
    },
    {
        id: 'contact',
        title: 'Contact',
    },
];

const services = [
    {
        title: 'Android Developer',
        icon: android
    },
    {
        title: 'Software Developer',
        icon: software_dev,
    },
    {
        title: "Full Stack Developer",
        icon: fullstack,
        description: "Developing scalable web applications with React, Node.js, and databases.",
        skills: ["React", "Node.js", "Express", "MongoDB", "SQL", "REST APIs"]
    },
    {
        title:'Software Management',
        icon: management
    }
];

const technologies = [
    {
        name: 'Java',
        icon: java,
    },
    {
        name: 'Kotlin',
        icon: kotlin,
    },
    {
        name: 'Firebase',
        icon: firebase,
    },
    {
        name: 'MySQL',
        icon: sql,
    },

    {
        name:'Jira',
        icon: jira,
    },
    {
        name: 'GIT',
        icon: git,
    },
    {
        name: 'Adobe XD',
        icon: adobexd,
    },
    {
        name: 'Node JS',
        icon: nodejs,
    },
    {
        name: 'Python',
        icon: python,
    },
    {
        name: 'PostgreSQL',
        icon: postgresql,
    }
];
const experiences = [
    {
        title: 'AI Engineer Intern',
        company_name: 'ING Nederland',
        icon: ing,
        iconBg: '#333333',
        date: 'Apr 2024 - Nov 2024',
    },
    {
        title: 'Android Developer Intern',
        company_name: 'Victory Square Partners',
        icon: victory_square,
        iconBg: '#333333',
        date: 'Aug 2021 - Sep 2021',
    },
]
const academic = [
    {
        title: 'Master Software Technology',
        company_name: 'University of Twente',
        icon: twente,
        iconBg: '#333333',
        date: 'Sep 2022 - March 2025',
    },
    {
        title: 'Erasmus Exchange in Lisbon',
        company_name: 'IADE - Universidade Europeia ',
        icon: erasmus,
        iconBg: '#333333',
        date: 'Sep 2020 - Feb 2021',
    },
    {
        title: 'Bachelor Computer Science',
        company_name: 'West University of Timisoara',
        icon: uvt,
        iconBg: '#333333',
        date: 'Sep 2019 - Aug 2022',
    }
];

const projects = [
    {
        id: 'project-1',
        name: 'AzulApp',
        description: '2D Board Game developed as part of a team of 5 students. ',
        tags: [
            {
                name: 'java',
                color: 'blue-text-gradient',
            },
            {
                name: 'jira',
                color: 'green-text-gradient',
            },
            {
                name: 'git',
                color: 'pink-text-gradient',
            },
        ],
        image: azul2,
        repo: 'https://github.com/alexmadaras00/AzulApp',
        // demo: 'https://shaqdeff.github.io/KomiKult/',
    },
    {
        id: 'project-2',
        name: 'VRADES',
        description:
            'Android app.',
        tags: [
            {
                name: 'react',
                color: 'blue-text-gradient',
            },
            {
                name: 'restapi',
                color: 'green-text-gradient',
            },
            {
                name: 'scss',
                color: 'pink-text-gradient',
            },
        ],
        image: vrades,
        repo: 'https://github.com/shaqdeff/Leaderboard',
         // demo: 'https://alexmadaras00.github.io/business-intelligence',
    },
    {
        id: 'project-3',
        name: 'Business Intelligence',
        description: 'Data analysis and visualization project on Classic Models Inc.\'s business performance using the BSC approach, with strategic recommendations for management. Data stored on PostgreSQL.',
        tags: [
            {
                name: 'nextjs',
                color: 'blue-text-gradient',
            },
            {
                name: 'supabase',
                color: 'green-text-gradient',
            },
            {
                name: 'css',
                color: 'pink-text-gradient',
            },
        ],
        image: datascience,
        repo: 'https://github.com/alexmadaras00/Business-Intelligence',
        demo: 'https://alexmadaras00.github.io/business-intelligence',
    },
    {
        id: 'project-4',
        name: 'IQQuizApp',
        description: `Android App with different types of IQ Tests. Developed in a team of 3 as part of an University Project.`,
        tags: [
            {
                name: 'nextjs',
                color: 'blue-text-gradient',
            },
            {
                name: 'supabase',
                color: 'green-text-gradient',
            },
            {
                name: 'css',
                color: 'pink-text-gradient',
            },
        ],
        image: movie,
        repo: 'https://github.com/alexmadaras00/IQQuizApp',
        // demo: 'https://movie-metro.netlify.app/',
    },
    {
        id: 'project-5',
        name: 'SpyForHire',
        description:
            'SpyForHire: The companion app for the Windows game EIA. Developed using Kotlin, SQL, and NodeJS as part of a multiplatform project during my Erasmus Mobility.',
        tags: [
            {
                name: 'nextjs',
                color: 'blue-text-gradient',
            },
            {
                name: 'supabase',
                color: 'green-text-gradient',
            },
            {
                name: 'css',
                color: 'pink-text-gradient',
            },
        ],
        image: nyeusi,
        repo: 'https://github.com/alexmadaras00/SpyForHire-CompanionApp',
        // demo: 'https://shaqdeff.github.io/Nyeusi-Fest-Site/',
    },
];

export {services, technologies, academic, projects};
