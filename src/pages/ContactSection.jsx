import InfiniteGridBg from "../components/InfiniteGridBg";
import Navbar from "../layout/Navbar";

const ContactSection = () => {
  return (
    <InfiniteGridBg>
    <section className="min-h-screen max-w-10/11 md:max-w-9/11 overflow-hidden mx-auto">
      <Navbar/>
      <div className="mb-6">
        <div className="text-center">
          <h1 className="text-[38px] font-semibold">CONTACT</h1>
          {/* <h2 className="text-[20px] font-semibold text-highlighte -mt-3">
            Hire Me
          </h2> */}
        </div>
      </div>

      {/* Contact Info */}
  <div className="text-center">
  <div className="mb-4 flex flex-col items-center">
  <div className="flex items-center text-xl font-semibold">
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 512 512"
      className="mr-2 text-highlighte"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M391.1 351.1c-15.1 0-30-2.3-44.2-6.8c-6.6-2.1-13.8-.6-18.7 4.3l-46.1 46.1c-60.6-31.9-110.2-81.4-142.1-142.1l46.1-46.1c5-5 6.5-12.2 4.3-18.7c-4.5-14.2-6.8-29.1-6.8-44.2c0-10.6-8.6-19.2-19.2-19.2H92.1C81.5 125.4 73 134 73 144.6c0 194.2 157.2 351.4 351.4 351.4c10.6 0 19.2-8.6 19.2-19.2v-76.3c0-10.6-8.6-19.2-19.2-19.2z" />
    </svg>
    <h1>Phone Number :</h1>
  </div>
  <p className="text-sm font-thin mt-2">+880 1866965359</p>
</div>

  <div className="mb-4 flex flex-col items-center">
    <div className="flex items-center text-xl font-semibold">
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 24 24"
        className="mr-2 text-highlighte"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill="none" d="M0 0h24v24H0z" />
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
      <h1>Email :</h1>
    </div>
    <p className="text-sm font-thin mt-2">jubayer.shikder.007@gmail.com</p>
  </div>
</div>

      {/* Contact Form */}

     <div className="w-full flex justify-center">
  <div className="w-full md:w-[700px]">
    <div className="w-full mb-4">
      <h1 className="font-thin">Your name</h1>
      <input
        type="text"
        placeholder="Your Name"
        className="w-full outline-none h-[60px] border bg-white rounded-full px-4 mt-3 placeholder:font-serif"
      />
    </div>

    <div className="w-full mb-4">
      <h1 className="font-thin">Your email</h1>
      <input
        type="email"
        placeholder="Your Email"
        className="w-full outline-none h-[60px] border bg-white rounded-full px-4 mt-3 placeholder:font-serif"
      />
    </div>

    <div className="w-full mb-4">
      <h1 className="font-thin">
        Have Something on Your Mind? I'm Here to Listen!
      </h1>
      <textarea
        rows="7"
        cols="40"
        placeholder="Write here..."
        className="w-full outline-none py-2 border bg-white rounded-xl px-4 mt-3 placeholder:font-serif"
      ></textarea>
    </div>

    <button className="bg-red-200 text-[#141427] font-bold px-5 py-4 rounded-xl text-md mb-4 active:scale-105 duration-150 ease-in-out">
      Send Message
    </button>
  </div>
</div>

    </section>
    </InfiniteGridBg>
  );
};

export default ContactSection;