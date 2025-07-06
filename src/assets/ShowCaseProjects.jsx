// src/data/projects.js
import { techLogosMap } from "../utils/getTechLogos";
import TasteScript1 from "../assets/web-demo/TasteScript/TasteScript1.png";
import TasteScript2 from "../assets/web-demo/TasteScript/TasteScript2.png";
import TasteScript3 from "../assets/web-demo/TasteScript/TasteScript3.png";
import TasteScript4 from "../assets/web-demo/TasteScript/TasteScript4.png";
import law1 from "../assets/web-demo/LawUSA/image.png";
import law2 from "../assets/web-demo/LawUSA/image (1).png";
import law3 from "../assets/web-demo/LawUSA/image (2).png";
import law4 from "../assets/web-demo/LawUSA/image (3).png";
import meal1 from "../assets/web-demo/MealMind/image (5).png";
import meal2 from "../assets/web-demo/MealMind/image (6).png";
import meal3 from "../assets/web-demo/MealMind/image (7).png";
import meal4 from "../assets/web-demo/MealMind/image (8).png";

const ShowCaseProjects = [
  {
    name: "🍲 TasteScript - Recipes, Written to Remember.",
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
      techLogosMap["15"],
      techLogosMap["17"],
      techLogosMap["19"],
    ],
    img: [TasteScript1, TasteScript2, TasteScript3, TasteScript4],
    link: [
      { label: "Live", url: "https://recipe-book-app-e876f.web.app/" },
      {
        label: "GitHub",
        url: "https://github.com/jubayers-r/recipe-book-monorepo",
      },
      {
        label: "Details",
        url: "https://github.com/jubayers-r/recipe-book-monorepo",
      },
    ],
  },
  {
    name: "⚖️LAW.USA",
    description:
      "An interactive React-based web app for browsing lawyer profiles, checking availability, and booking appointments. Designed with performance, accessibility, and user experience in mind.",
    features: [
      "Interactive Booking System with Availability Logic",
      "Dynamic Data Visualization with Recharts",
      "Responsive & Accessible UI Built with Tailwind CSS",
    ],
    techLogo: [
      techLogosMap["1"],
      techLogosMap["2"],
      techLogosMap["11"],
      techLogosMap["5"],
      techLogosMap["13"],
      techLogosMap["12"],
      techLogosMap["15"],
      techLogosMap["17"],
      techLogosMap["19"],
    ],
    img: [law1, law2, law3, law4],
    link: [
      { label: "Live", url: "https://gorgeous-crepe-040b98.netlify.app/" },
      {
        label: "GitHub",
        url: "https://github.com/jubayers-r/lawyer-appointment-app",
      },
      {
        label: "Details",
        url: "https://github.com/jubayers-r/lawyer-appointment-app",
      },
    ],
  },
  {
    name: " 🍽️ MealMind - Optimizing Restaurants, One Bite at a Time.",
    description:
      "A fully responsive, feature-rich restaurant management platform built with the MERN stack. It allows users to browse foods, place orders, manage their items, and streamline restaurant operations for admins and staff. Designed to be eye-pleasing, recruiter-friendly, and technically robust with JWT-authenticated private routes, Firebase login, and complete MongoDB backend integration.",
    features: [
      "Robust Authentication & Route Protection",
      "Full Food Lifecycle Management",
      "Responsive & Intuitive UI",
    ],
    techLogo: [
      techLogosMap["1"],
      techLogosMap["2"],
      techLogosMap["11"],
      techLogosMap["3"],
      techLogosMap["4"],
      techLogosMap["5"],
      techLogosMap["8"],
      techLogosMap["9"],
      techLogosMap["13"],
      techLogosMap["6"],
      techLogosMap["7"],
      techLogosMap["15"],
      techLogosMap["17"],
      techLogosMap["19"],
    ],
    img: [meal1, meal2, meal3, meal4],
    link: [
      { label: "Live", url: "https://restaurant-management-e0449.web.app/" },
      {
        label: "GitHub",
        url: "https://github.com/jubayers-r/mealmind-client",
      },
      {
        label: "Details",
        url: "https://github.com/jubayers-r/mealmind-client",
      },
    ],
  },
];
export default ShowCaseProjects;
