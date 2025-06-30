// src/data/projects.js
import { techLogosMap } from "../utils/getTechLogos";

 const TasteScript = [
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
    link: [
      { label: "Live Demo", url: "https://recipe-book-app-e876f.web.app/" },
      {
        label: "GitHub",
        url: "https://github.com/jubayers-r/recipe-book-monorepo",
      },
    ],
  },
];
export default TasteScript;