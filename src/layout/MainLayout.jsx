import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <div className="dark:bg-black">
      <div className="min-h-screen max-w-10/11 md:max-w-9/11  flex flex-col mx-auto">
        <Navbar />
        <main className="flex-grow flex flex-col justify-center mb-15">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
