import Screenshot1 from '../assets/Screenshot1.png';
import Screenshot2 from '../assets/Screenshot2.png';
import Food1 from '../assets/Home.png';


export const projects = [
   {
    id: 1,
    title: 'Online Food Delivery App',
    featured: true,
    description: 'Developed a responsive food ordering interface using React',
    tech: ['HTML', 'CSS', 'BootStrap', 'JavaScript'],
    liveUrl: 'Coming Soon',
    repoUrl: '',
    image:  [Food1],// ← FIXED: use imported variable, not string,
  },
  {
    id: 2,
    title: 'Text to Speech Convertor',
    description: 'Developed a web tool to convert text input into speech output.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://text-to-speech-mocha-two.vercel.app/',
    repoUrl: 'https://github.com/AnushaDevi2004/text-to-speech',
    image: Screenshot1  // ← FIXED: use imported variable, not string
  },
  {
    id: 3,
    title: 'Calculator App',
    description: 'Build a Browser-based Calculator with Interactive UI.',
    tech: ['HTML', 'CSS', 'BootStrap', 'JavaScript'],
    liveUrl: 'https://calculator-app-nine-blush.vercel.app/',
    repoUrl: 'https://github.com/AnushaDevi2004/calculator-app',
    image: Screenshot2  // ← FIXED: use imported variable, not string
  },
 
  
];