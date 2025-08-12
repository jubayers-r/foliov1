// src/data/projects.js
import { techLogosMap } from "../utils/getTechLogos";
import TasteScript1 from "../assets/web-demo/TasteScript/TasteScript1.png";
import TasteScript2 from "../assets/web-demo/TasteScript/TasteScript2.png";
import TasteScript3 from "../assets/web-demo/TasteScript/TasteScript3.png";
import TasteScript4 from "../assets/web-demo/TasteScript/TasteScript4.png";
import hn1 from "../assets/web-demo/HackerNews/1.png";
import hn2 from "../assets/web-demo/HackerNews/2.png";
import hn3 from "../assets/web-demo/HackerNews/3.png";
import hn4 from "../assets/web-demo/HackerNews/4.png";
import kp1 from "../assets/web-demo/KindPaws/1.png";
import kp2 from "../assets/web-demo/KindPaws/2.png";
import kp3 from "../assets/web-demo/KindPaws/3.png";
import kp4 from "../assets/web-demo/KindPaws/4.png";
import kp5 from "../assets/web-demo/KindPaws/5.png";
import kp6 from "../assets/web-demo/KindPaws/6.png";
import kp7 from "../assets/web-demo/KindPaws/7.png";
import kp8 from "../assets/web-demo/KindPaws/8.png";

const ShowCaseProjects = [
  {
    name: "KindPaws - Adopt, Donate, Transform Lives",
    description:
      "A compassionate pet adoption platform connecting loving homes with animals in need through campaigns, donations, and verified adoption requests.",
    features: [
      "Role-based access with Firebase Auth and Admin Dashboard",
      "Donation campaigns with Stripe integration and real-time support tracking",
      "Infinite scroll, pet browsing, and success stories with smooth UX",
    ],
    techLogo: [
      techLogosMap["1"],
      techLogosMap["2"],
      techLogosMap["2.3"],
      techLogosMap["2.4"],
      techLogosMap["11"],
      techLogosMap["3"],
      techLogosMap["4"],
      techLogosMap["5"],
      techLogosMap["6.1"],
      techLogosMap["9"],
      techLogosMap["7"],
      techLogosMap["14"],
      techLogosMap["15.1"],
    ],
    img: [kp1, kp2, kp3, kp4, kp5, kp6, kp7, kp8],
    link: [
      { label: "Live", url: "https://kind-paws.web.app/" },
      {
        label: "GitHub",
        url: "https://github.com/jubayers-r/kindpaws-monorepo",
      },
    ],
    challenges: [
      "Managing role-based authentication and admin privileges with Firebase Auth was tricky.",
      "Integrating Stripe payments and handling real-time donation updates required understanding async flows and APIs.",
      "Ensuring smooth infinite scroll performance and maintaining verified adoption requests posed challenges.",
    ],
    futurePlans: [
      "Improve donation analytics dashboard.",
      "Implement push notifications for campaign updates.",
      "Enhance mobile responsiveness.",
      "Add multi-language support for broader user reach.",
    ],
  },
  {
    name: "Hacker News Lite – Real-time Hacker Stories Feed ",
    description:
      "A performant, fully responsive Hacker News clone using the official HN Firebase API. Built for speed, accessibility, and scalability with modern frontend architecture.",
    features: [
      "Responsive dark mode UI built with Tailwind and Shadcn components",
      "Story Type Switching – Top, New, Comment, Ask",
      "Recursive comment rendering with real-time nested threads",
    ],
    techLogo: [
      techLogosMap["2.1"],
      techLogosMap["2.2"],
      techLogosMap["5"],
      techLogosMap["2.3"],
      techLogosMap["2.4"],
      techLogosMap["14"],
      techLogosMap["9"],
      techLogosMap["16"],
      techLogosMap["17"],
      techLogosMap["19"],
      techLogosMap["7"],
    ],
    img: [hn1, hn2, hn3, hn4],
    link: [
      { label: "Live", url: "https://hacker-news-lite.vercel.app/" },
      {
        label: "GitHub",
        url: "https://github.com/jubayers-r/mini-hacker-news",
      },
    ],
    challenges: [
      "Implementing recursive comment rendering with real-time nested threads was complex for a beginner.",
      "Managing state efficiently across different story types (Top, New, Ask) and handling dark mode UI toggling was challenging.",
      "Optimizing performance while using the Firebase API required learning advanced frontend techniques.",
    ],
    futurePlans: [
      "Add offline support using service workers.",
      "Implement user accounts for customized feeds.",
      "Enhance accessibility features further.",
      "Optimize SEO for better discoverability.",
    ],
  },
  {
    name: "TasteScript - Recipes, Written to Remember.",
    description:
      "A beautifully designed, fully responsive Recipe Book App where users can explore, save, and manage recipes with ease. Built with Firebase authentication, MongoDB backend, and a modern UI, this app makes recipe discovery and creation a joy for food enthusiasts.",
    features: [
      "Authenticated Recipe Management System",
      "Personalized User Dashboard",
      "Responsive UI with Modern Design Tools",
    ],
    techLogo: [
      techLogosMap["1"],
      techLogosMap["2"],
      techLogosMap["11"],
      techLogosMap["3"],
      techLogosMap["4"],
      techLogosMap["5"],
      techLogosMap["9"],
      techLogosMap["13"],
      techLogosMap["6"],
      techLogosMap["7"],
    ],
    img: [TasteScript1, TasteScript2, TasteScript3, TasteScript4],
    link: [
      { label: "Live", url: "https://recipe-book-app-e876f.web.app/" },
      {
        label: "GitHub",
        url: "https://github.com/jubayers-r/recipe-book-monorepo",
      },
    ],
    challenges: [
      "Integrating Firebase authentication with MongoDB backend required learning about syncing data across different services.",
      "Building a responsive UI that works seamlessly on various devices was tough initially.",
      "Handling recipe management and personalized dashboards demanded good state management practices.",
    ],
    futurePlans: [
      "Introduce social sharing and collaboration features.",
      "Add push notifications for new recipes.",
      "Improve search functionality with filters.",
      "Enhance accessibility for users with disabilities.",
    ],
  },
];
export default ShowCaseProjects;
