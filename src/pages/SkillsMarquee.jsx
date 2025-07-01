
import FastMarquee from "../components/FastMarquee";

const techLogoImports = import.meta.glob(
  "/src/assets/technologies/*.{jpg,jpeg,png,svg,webp}",
  {
    eager: true,
    import: "default",
  }
);

const techLogos = Object.entries(techLogoImports)
  .sort(([a], [b]) => {
    // Extract numbers like 1, 2, 3 from file names
    const numA = parseInt(a.match(/\/(\d+)\./)[1], 10);
    const numB = parseInt(b.match(/\/(\d+)\./)[1], 10);
    return numA - numB;
  })
  .map(([, module]) => module);

// js(), react(), nodejs(), express(), tailwind(), framer motion(), mongodb(), firebase(), github(), vscode(), daisyui(), vite(), react router(), jwt(), vercel(), netlify(), pritter(), eslint(), bash()

// next to add: pnpm/yarn/bun, TypeScript, nextjs, postman, linux, redux, git, OAuth/Auth0, python, Stripe , sslcommerz, mysql, orms, docker, vim, Prisma, socketio, webrtc, jest/vitest/Cypress, graphql, gsap, React Three Fiber, figma, wordpress, elementor pro, framer, shopify

const SkillsMarquee = () => {
  return (
    <div id="skills" data-aos="fade-down">
    <>
      <section className="h-fit my-50 max-w-10/11 md:max-w-9/11 overflow-hidden mx-auto " >
        <h1 className=" text-center text-2xl md:text-3xl xl:text-4xl font-semibold">
          Recent Technologies I’ve Used
        </h1>
        <div className="mt-6 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
          <FastMarquee gradient={false} speed={50}>
            <div className="flex gap-12 w-max pointer-events-none">
              {[...techLogos, ...techLogos].map((src, idx) => (
                <div
                  key={idx}
                  className="w-[70px] h-[70px] relative hover:scale-105 transition-transform duration-150 ease-in-out"
                >
                  <img
                    src={src}
                    alt="tech-icon"
                    className="absolute w-full h-full object-contain inset-0"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </FastMarquee>
        </div>
      </section>
    </>
    </div>
  );
};

export default SkillsMarquee;
