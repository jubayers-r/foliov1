import React, { useState } from 'react';

const AboutPara = () => {
    const [showFull, setShowFull] = useState(false);
    return (
        <>
 <div className="p-4  max-w-4xl mx-auto">
              <h3 className="text-4xl font-semibold mb-4">About Me</h3>
              <p className=" leading-relaxed text-muted-foreground text-lg">
                In early 2024, I took a leap of faith and transitioned into web
                development after realizing that graphic design—while creatively
                fulfilling—didn’t align with my long-term goals. During my time
                at{" "}
                <a
                  className="mt-4 text-primary underline text-sm hover:opacity-80 transition"
                  href="https://about.mommykidz.com/"
                >
                  MommyKidz
                </a>
                , a startup based in Mirpur, Dhaka, I worked closely with a
                small team where I designed marketing materials and product
                frames. It was a valuable experience that strengthened my
                communication, adaptability, and teamwork—skills that continue
                to support me in tech today. Motivated by my growing interest in
                logic-driven problem-solving and UI/UX,{" "}
                <button
                  onClick={() => setShowFull(!showFull)}
                  className="mt-4 text-primary underline text-sm hover:opacity-80 transition"
                >
                  {!showFull && "Read More"}
                </button>
                {showFull && (
                  <>
                    I began teaching myself full-stack development using the
                    MERN stack. What started as curiosity quickly became a
                    passion. <br />
                    <br /> I’ve since been actively building applications,
                    refining both frontend and backend skills, and expanding
                    into technologies like <strong>Next.js</strong>,{" "}
                    <strong>TypeScript</strong>, and <strong>DevOps</strong>.
                    <br />
                    <br />
                    I’m currently a Computer Science student, and I'm looking to
                    grow as a developer by collaborating with a team of
                    professionals, contributing to real-world projects, and
                    exploring open-source opportunities. My journey so far has
                    taught me that stepping outside your comfort zone opens
                    doors you didn’t know existed—and I’m excited for what’s
                    next.
                  </>
                )}
              </p>
              <button
                onClick={() => setShowFull(!showFull)}
                className="mt-4 text-primary underline text-sm hover:opacity-80 transition"
              >
                {showFull && "Read Less"}
              </button>
              </div>
        </>
    );
};

export default AboutPara;