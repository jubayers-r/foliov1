import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Hero from "../components/Hero";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const MainLayout = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration in ms
      once: false, // Allow it to re-trigger on scroll up
      mirror: true, // Animate out when scrolling up
      offset: 100, // offset (in px) from the top to trigger animation
    });
  }, []);
  return (
    <div className=" dark:bg-black ">
      <Navbar />
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow flex flex-col justify-center ">
          <Hero />
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
