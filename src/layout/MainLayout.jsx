import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Hero from "../components/Hero";

const MainLayout = () => {
  return (
    <div className="dark:bg-black">
      <Navbar />
      <main className="flex-grow flex flex-col justify-center mb-15">
      <div className="min-h-screen max-w-10/11 md:max-w-9/11 flex flex-col mx-auto">
        <Hero />
      </div>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
