import { FaLightbulb, FaPaintBrush, FaCode, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot,FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa';
import { SiTailwindcss, SiBootstrap } from "react-icons/si";


import profileImg from '../assets/profile.avif';
import projectImg1 from '../assets/project1.avif';
import projectImg2 from '../assets/project2.avif';
import projectImg3 from '../assets/project3.avif';
import projectImg4 from '../assets/project4.avif';
import projectImg5 from '../assets/project5.avif';
import projectImg6 from '../assets/project6.avif';
import myphoto from     '../assets/myphoto.png';
import project11 from "../assets/project11.jpg"
import project22 from "../assets/project22.jpg"
import project33 from "../assets/project33.jpg"
import project44 from "../assets/project44.jpg"
import project55 from "../assets/project55.jpg"
import project66 from "../assets/project66.jpg"



export const assets1 = {
    profileImg,
}

export const assets = {
    myphoto,
}

export const aboutInfo = [
    {
      icon: FaLightbulb,
      title: 'Innovative',
      description: 'I love creating unique solutions to complex problems with cutting-edge technologies.',
      color: 'text-purple'
    },
    {
      icon: FaPaintBrush,
      title: 'Design Oriented',
      description: 'Beautiful design and user experience are at the heart of everything I create.',
      color: 'text-pink'
    },
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'I write maintainable, efficient code following best practices and modern patterns.',
      color: 'text-blue'
    }
  ];


export const skills = [
  {
    icon: FaReact,
    title: "React",
    description: "Building modern and scalable single-page applications using React components, hooks, and reusable UI structures."
  },
  {
    icon: FaJs,
    title: "JavaScript",
    description: "Creating dynamic and interactive web experiences using modern JavaScript concepts like ES6, DOM manipulation, and API integration."
  },
  {
    icon: SiTailwindcss,
    title: "Tailwind CSS",
    description: "Designing fast and responsive user interfaces using utility-first Tailwind CSS for clean and maintainable styling."
  },
  {
    icon: SiBootstrap,
    title: "Bootstrap",
    description: "Developing responsive and mobile-first layouts using Bootstrap grid system and ready-to-use UI components."
  },
  {
    icon: FaCss3Alt,
    title: "CSS",
    description: "Crafting visually appealing and responsive layouts with modern CSS techniques including Flexbox, Grid, and animations."
  },
  {
    icon: FaHtml5,
    title: "HTML",
    description: "Creating well-structured, semantic, and accessible web pages using modern HTML5 standards."
  }
];


export const projects = [
  {
    title: "My Portfolio Website",
    description: "Developed a responsive personal portfolio using React and Tailwind CSS to showcase my projects and skills. Implemented smooth UI, animations, and mobile-friendly design for a better user experience.",
    image: project11,
    tech: ["React", "JavaScript", "TailwindCss","Framer Motion"],
    icons: [FaReact, FaNodeJs, FaDatabase , FaStripe],
    demo: "#",
    code: "#",
  },
  {
    title: "Todo List Ap",
    description: "Built a Todo List application using React to add, delete, and manage daily tasks efficiently. Used React state management to update tasks dynamically without reloading the page.",
    image: project66,
    tech: ["React.js", "JavaScript", "Tailwind CSS",],
    icons: [FaVuejs, FaFire, FaCloud , FaDatabase],
    demo: "https://babliraikwar.github.io/react-todo-app",
    code: "https://github.com/babliraikwar/react-todo-app",
  },
  {
    title: "Currency Converter",
    description: "Built a currency converter using JavaScript and API integration to fetch real-time exchange rates.Implemented dynamic conversion logic with a responsive UI.",
    image: project22,
    tech: ["JavaScript", "Html5", "Css3",],
    icons: [FaReact, FaDatabase],
    demo: "https://babliraikwar.github.io/currency-converter-with-api/",
    code: "https://github.com/babliraikwar/currency-converter-with-api",
  },
  {
    title: "Furniture Ecommerce Website",
    description: "Designed a responsive furniture eCommerce website layout using HTML, CSS, and Bootstrap. Implemented product sections, navigation bar, and modern UI for better product presentation.",
    image: project55,
    tech: ["Html", "Css", "Bootstrap"],
    icons: [FaReact, FaCloud],
    demo: "https://babliraikwar.github.io/woodcraft-ecommerce-website/",
    code: "https://github.com/babliraikwar/woodcraft-ecommerce-website",
  },
  {
    title: "Rock Paper Scissors Game",
    description: "Created an interactive Rock Paper Scissors game using HTML, CSS, and JavaScript.Implemented game logic, score tracking, and dynamic UI updates for user interaction.",
    image: project44,
    tech: ["JavaScript", "Html5", "Css3",],
    icons: [FaReact, FaNodeJs, FaDatabase ],
    demo: "https://babliraikwar.github.io/rock-paper-scissors-game/",
    code: "https://github.com/babliraikwar/rock-paper-scissors-game",
  },
  {
    title: "Tic Tac Toe Game",
    description: "Developed a Tic Tac Toe game using JavaScript with interactive game logic. Implemented turn-based gameplay and win/draw detection with dynamic UI updates.",
    image: project33,
    tech: ["JavaScript", "Html5", "Css3", ],
    icons: [FaRobot, FaReact, FaCloud],
    demo: "https://babliraikwar.github.io/tic-tac-toe-javascript/",
    code: "https://github.com/babliraikwar/tic-tac-toe-javascript",
  }
];


export const workData = [
  {
    role: "Web Designer & SEO Executive",
    company: "#1 Vinayak Infosoft",
    duration: "June'25 - March'26",
    description:
            "Designed responsive website layouts using HTML, CSS, and Bootstrap while implementing basic SEO techniques like meta tags and page optimization.",
  },
  {
    role: "Frontend Developer (Projects)",
    company: "Personal Projects",
    duration: "2024 - Present",
    description:
            "Developed modern web applications using React, Tailwind CSS, and JavaScript while focusing on responsive design and reusable components.",

  }
 
];
