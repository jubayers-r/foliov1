import aboutIMG from "../assets/about.jpg";

import AboutCheckList from "../components/AboutCheckList";
import AboutPara from "../components/AboutPara";
import CTA from "../components/CTA";

const AboutMe = () => {
  return (
    <div id="about">
      <>
        <div
          className="max-w-10/11 md:max-w-9/11 mx-auto lg:mx-30 my-50"
          data-aos="fade-down"
        >
          <div className="grid lg:grid-cols-2 lg:gap-20 lg:my-30  place-items-center">
            {/* left side */}
            <div className="px-4">
              <img
                src={aboutIMG}
                alt=""
                className="h-60 sm:h-96 w-auto -scale-x-100 pointer-events-none"
              />
            </div>
            {/* right side */}
            <div className="text-lg">
              <AboutPara />
              {/* check list */}
              <div className="sm:grid-cols-2 grid sm:place-items-start gap-2 px-4 ">
                {/* each list */}
                <AboutCheckList />
              </div>
              {/* CTA */}
              <div className=" px-8 py-5 my-12 rounded-2xl 2xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-2 grid bg-white gap-2 text-black shadow-sm">
                <CTA />
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default AboutMe;
