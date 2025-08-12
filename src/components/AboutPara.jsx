import { useState } from "react";

const AboutPara = () => {
  const [showFull, setShowFull] = useState(false);
  return (
    <>
      <div className="p-4  max-w-4xl mx-auto">
        <h3 className="text-2xl text-center lg:text-4xl font-semibold lg:mb-4">
          About Me
        </h3>
        <p
          className=" leading-relaxed text-muted-foreground text-[16px] lg:text-lg"
          style={{ hyphens: "auto", wordWrap: "break-word" }}
        >
          In early 2024, I took a leap of faith and transitioned into web
          development after realizing that graphic design—while creatively
          fulfilling—didn’t align with my long-term goals. During my time at{" "}
          <a
            className="mt-4 text-primary underline text-sm hover:opacity-80 transition"
            href="https://about.mommykidz.com/"
          >
            MommyKidz
          </a>
          , a startup in Mirpur, Dhaka, I designed marketing materials and
          product frames, gaining valuable experience that strengthened my
          communication, adaptability, and teamwork—skills that continue to
          support me in tech today. Though I enjoy the full stack, I find myself
          most drawn to backend logic, UI/UX,{" "}
          <button
            onClick={() => setShowFull(!showFull)}
            className=" text-primary underline text-sm hover:opacity-80 transition"
          >
            {!showFull && "Read More"}
          </button>
          {showFull && (
            <>
              and problem-solving. There’s something captivating about
              untangling complex puzzles with APIs and server-side work that
              truly boggles and excites my mind. Currently, I’m focused on
              deepening my expertise in backend development,{" "}
              <strong>DevOps</strong>, data structures and algorithms{" "}
              <strong>
                {"("}DSA{")"}
              </strong>{" "}
              , and emerging technologies like <strong>Web3</strong>. I’m always
              curious and eager to learn more.
              <br /> <br />
              Outside programming, I’m not much of an outdoor or sports person,
              but I love listening to people. Understanding human behavior and
              psychology fascinates me so much that if I weren’t a computer
              science student, I might have pursued psychology instead. I’m also
              passionate about keeping up with new tech trends, learning about
              cybersecurity, and experimenting with prompts like a prompt
              engineer. I’m naturally curious and detail-oriented—sometimes to a
              fault—as I often spend days tracking down a tiny bug just to fix
              it perfectly. Fitness is another interest, though financial
              stability has paused that journey for now; I look forward to
              picking it back up when I can. This curiosity about people feeds
              into my belief that problem-solving is a fundamental part of life,
              everyone is a problem solver by nature—whether it’s a newborn
              brightening their parents’ day with a smile or experts tackling
              complex challenges. For me, problem-solving isn’t a fancy
              skill—it’s just how life works, and it’s something I embrace both
              personally and professionally
              <br />
              <br />
              I’m currently a Computer Science student committed to mastering
              full-stack development because I see it as the core foundation
              that makes learning advanced tech—like AI, cybersecurity, or
              Web3—more accessible. My mindset is clear: now is the time to dive
              deep into full stack, fall in love with it like a lucky life
              partner, and then let the heart guide me toward whatever exciting
              path lies ahead.
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
