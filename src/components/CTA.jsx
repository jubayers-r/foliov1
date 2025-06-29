import React from "react";
import { MdEmail, MdCallEnd} from "react-icons/md";


const CTA = () => {
  return (
    <>
      {/* Email */}
      <div className="flex place-items-center gap-2">
        <div className="grid">
          <MdEmail size={40} />
        </div>
        <div>
          <p>Email Me</p>
          <a href="mailto:jubayer.shikder.007@gmail.com">
            jubayer.shikder.007@gmail.com
          </a>
        </div>
      </div>
      {/* Call/ Whatsapp */}
      <div className="flex  gap-2 sm:justify-start">
        <div className="grid">
          <MdCallEnd size={40} />
        </div>
        <div>
          <p>Call / WhasApp Me</p>
          <a href="tel:+8801866965359">+880 18669-65359</a>
        </div>
      </div>
    </>
  );
};

export default CTA;
