import React from "react";
import AboutMe from "./AboutMe";
import SkillsMarquee from "./SkillsMarquee";
import Projects from "./Projects";
import ContactSection from "./ContactSection";
import Navbar from "../layout/Navbar";
import InfiniteGridBg from "../components/InfiniteGridBg";
import Hero from "../components/Hero";

const SmoothScroll = () => {
  return (
    <>
      <InfiniteGridBg>
        <AboutMe />
        <SkillsMarquee />
        <Projects />
        <ContactSection />
      </InfiniteGridBg>
    </>
  );
};

export default SmoothScroll;
