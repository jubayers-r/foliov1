import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import test from "../components/HeroBG";
import SmoothScroll from "../pages/SmoothScroll";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: SmoothScroll,
      },
      // {
      //   path: "/:projectId",
      //   Component: ProjectDetailsPage,
      // },
      // {
      //   path: "skills",
      //   Component: SkillsMarquee,
      // },
      // {
      //   path: "projects",
      //   Component: Projects,
      // },
      // {
      //   path: "contact",
      //   Component: ContactSection,
      // },
    ],
  },
  {
    path: "test",
    Component: test,
  },
]);
