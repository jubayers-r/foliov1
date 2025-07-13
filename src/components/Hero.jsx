import HeroBG from "./HeroBG";
import me from "../assets/me.jpg";
import { motion } from "motion/react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-scroll";
import { getOffset } from "../utils/getOffset";

export const drivePath = (id) => `https://drive.google.com/file/d/${id}`;

const Hero = () => {
  const lightImage =
    "https://cdn-icons-png.flaticon.com/512/11743/11743974.png";
  const darkImage = "https://cdn-icons-png.flaticon.com/512/11743/11743790.png";

  return (
    <div
      id="me"
      className=" max-w-10/11 md:max-w-9/11 flex flex-col mx-auto lg:my-40 my-10"
    >
      {/* hero section */}
      <HeroBG />
      <div className=" mt-5 sm:mt-0 flex flex-col-reverse gap-5 lg:grid lg:grid-cols-3 items-center place-items-center text-center ">
        {/* left side */}
        <div className="md:col-span-2 md:space-y-8 sm:space-y-3 space-y-2 z-10">
          <p className="dark:text-white flex items-center sm:text-4xl text-2xl  justify-center lg:justify-start">
            {" "}
            <img
              src={lightImage}
              alt="Terminal free icon"
              title="Terminal free icon"
              className="w-5 h-5 sm:w-10 sm:h-10 dark:hidden pointer-events-none"
            />{" "}
            <img
              src={darkImage}
              alt="Terminal free icon dark"
              title="Terminal free icon"
              className="w-5 h-5 sm:w-10 sm:h-10 hidden dark:inline bg-white rounded-lg mr-1 pointer-events-none"
            />{" "}
            I am
          </p>
          <h1 className="2xl:text-7xl xl:text-6xl md:text-5xl lg:flex lg:justify-start sm:text-4xl text-2xl dark:text-white font-[Alfa_Slab_One] ">
            {" "}
            Jubayer Shikder,
          </h1>
          {/* animate */}
          <div className="relative inline-block lg:flex lg:justify-start w-fit">
            <motion.div
              initial={{ width: 5 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-r to-yellow-500 from-pink-500 rounded-lg z-0"
            />

            <h1 className="relative z-10 bg-gradient-to-r bg-clip-text text-white 2xl:text-7xl xl:text-6xl md:text-5xl sm:text-4xl text-2xl font-bold px-1 xl:py-4 py-3 ">
              A Full-Stack Developer.
            </h1>
          </div>
          {/* description */}
          <p className="dark:text-[#9b9b9b] text-[#474747] lg:text-left w-[95%] sm:w-[85%] lg:mx-0 mx-auto text-center text-lg ">
            Passionate about building modern, scalable web applications with a
            strong foundation in Computer Science. Currently exploring Next.js,
            TypeScript, and DevOps through hands-on projects, focusing on clean
            architecture and production-ready solutions. Eager to contribute to
            impactful teams and turn ideas into real-world products.
          </p>

          {/* social links */}
          <div className="my-5">
            <motion.div className="flex gap-5 justify-center lg:justify-start">
              <motion.a
                whileHover={{ x: 5 }}
                href="https://linkedin.com/in/jubayers-r/"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2111/2111499.png"
                  width={35}
                  height={35}
                  alt=""
                  className="pointer-events-none "
                />
              </motion.a>
              <motion.a whileHover={{ x: 5 }} href="https://x.com/jubayers_r">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/14417/14417460.png"
                  width={35}
                  height={35}
                  alt=""
                  className="bg-white rounded-sm pointer-events-none"
                />
              </motion.a>
              <motion.a
                whileHover={{ x: 5 }}
                href="https://github.com/jubayers-r"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/4926/4926624.png"
                  width={35}
                  height={35}
                  alt=""
                  className="bg-white rounded-full pointer-events-none"
                />
              </motion.a>
              <motion.a
                whileHover={{ x: 5 }}
                href="mailto:jubayer.shikder.007@gmail.com"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/5968/5968534.png"
                  width={35}
                  height={35}
                  alt=""
                  className="bg-white rounded-sm -p-2 pointer-events-none"
                />
              </motion.a>
              <motion.a
                whileHover={{ x: 5 }}
                href="https://wa.me/+8801866965359"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/4423/4423697.png"
                  width={35}
                  height={35}
                  alt=""
                  className="bg-white rounded-sm -p-2 pointer-events-none"
                />
              </motion.a>
            </motion.div>
          </div>
          <div className="w-full flex justify-center lg:justify-start gap-5  ">
            {/* hire me */}
            <Link
              to={"contact"}
              spy={true}
              smooth={true}
              offset={getOffset("contact")}
              duration={500}
            >
              <button className="text-lg btn bg-[#ffaa00] hover:bg-yellow-600 text-white flex justify-center items-center lg:justify-start lg:w-auto w-fit group transition-all duration-300">
                Hire Me
                <IoIosArrowForward className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </Link>
            {/* resume */}
            <button className=" text-lg font-semibold text-center  flex justify-center items-center lg:justify-start lg:w-auto w-fit hover:link-hover group transition-all duration-300">
              <a
                href={drivePath("1F1eWXFRsZUMo4cgzFInKGlkr2Erh3dc1")}
                target="_blank"
              >
                View Resume
              </a>
              <IoIosArrowForward className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
        {/* right side */}

        <div className=" flex justify-center w-full lg:-mt-30 ">
          <img
            src={me}
            alt=""
            className="rounded-full bg-white pointer-events-none lg:w-full w-1/3 h-auto z-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
