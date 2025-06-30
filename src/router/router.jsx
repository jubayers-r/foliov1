import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import test from "../components/HeroBG";
import AboutMe from "../pages/AboutMe";
import SkillsMarquee from "../pages/SkillsMarquee";
import Projects from "../pages/Projects";
import ContactSection from "../pages/ContactSection";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "about",
        Component: AboutMe,
      },
      {
        path: "skills",
        Component: SkillsMarquee,
      },
      {
        path: "projects",
        Component: Projects,
      },
      {
        path: "contact",
        Component: ContactSection,
      },
    ],
  },
  {
    path: "test",
    Component: test,
  },
]);
