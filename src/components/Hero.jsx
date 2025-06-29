import HeroBG from "./HeroBG";
import me from "../assets/me.jpg";
import { motion } from "motion/react";

const Hero = () => {
  const lightImage =
    "https://cdn-icons-png.flaticon.com/512/11743/11743974.png";
  const darkImage = "https://cdn-icons-png.flaticon.com/512/11743/11743790.png";

  return (
    <div>
      {/* hero section */}
      <HeroBG />
      <div className="flex flex-col-reverse gap-5 lg:grid lg:grid-cols-3 items-center place-items-center text-center">
        {/* left side */}
        <div className="md:col-span-2 md:space-y-8 sm:space-y-3 space-y-2">
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
          <h1 className="2xl:text-7xl xl:text-6xl md:text-5xl lg:flex lg:justify-start sm:text-4xl text-2xl dark:text-white font-[Alfa_Slab_One]">
            {" "}
            Jubayer Shikder ,
          </h1>
          {/* animate */}
          <div className="relative inline-block lg:flex lg:justify-start w-fit">
            <motion.div
              initial={{ width: 5 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-r dark:from-yellow-500 dark:to-pink-500 rounded-lg z-0"
            />

            <h1 className="relative z-10 bg-gradient-to-r bg-clip-text dark:text-white 2xl:text-7xl xl:text-6xl md:text-5xl sm:text-4xl text-2xl font-bold px-1 xl:py-4 py-3 ">
              A Full-Stack Developer.
            </h1>
          </div>
          {/* description */}
          <p className="dark:text-[#9b9b9b] text-[#474747] lg:text-left w-[85%] lg:mx-0 mx-auto text-center ">
            Passionate about building modern, scalable web applications with a
            strong foundation in Computer Science. Currently exploring Next.js,
            TypeScript, and DevOps through hands-on projects, focusing on clean
            architecture and production-ready solutions. Eager to contribute to
            impactful teams and turn ideas into real-world products.
          </p>

          {/* social links */}
          <motion.div className="flex gap-5 justify-center lg:justify-start">
            <motion.a
              whileHover={{ x: -5 }}
              href="https://linkedin.com/in/jubayers-r/"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/2111/2111499.png"
                width={35}
                height={35}
                alt=""
                className="pointer-events-none"
              />
            </motion.a>
            <motion.a whileHover={{ x: -5 }} href="https://x.com/jubayers_r">
              <img
                src="https://cdn-icons-png.flaticon.com/512/14417/14417460.png"
                width={35}
                height={35}
                alt=""
                className="bg-white rounded-sm pointer-events-none"
              />
            </motion.a>
            <motion.a
              whileHover={{ x: -5 }}
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
              whileHover={{ x: -5 }}
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
          </motion.div>
          <div className="w-full flex justify-center lg:justify-start">
            <motion.button
              whileTap={{ scale: 1.2 }}
              whileHover={{ x: -10 }}
              className="btn flex justify-center items-center lg:justify-start lg:w-auto w-fit "
            >
              Resume{" "}
              <img
                src="https://cdn-icons-png.flaticon.com/512/2989/2989976.png"
                width={35}
                height={35}
                alt=""
                className="pointer-events-none"
              />
            </motion.button>
          </div>
        </div>
        {/* right side */}

        <div className=" flex justify-center w-full ">
          <img
            src={me}
            alt=""
            className="rounded-full bg-white pointer-events-none lg:w-full w-1/2 h-auto "
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
