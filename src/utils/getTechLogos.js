// getTechLogos.js or similar
const techLogoImports = import.meta.glob(
  "/src/assets/technologies/*.{jpg,jpeg,png,svg,webp}",
  {
    eager: true,
    import: "default",
  }
);

// Create a map: { 'react': <imported-module>, ... }
export const techLogosMap = Object.entries(techLogoImports).reduce((acc, [path, module]) => {
  const key = path.match(/\/([^/]+)\.(jpg|jpeg|png|svg|webp)$/)?.[1];
  if (key) acc[key] = module;
  return acc;
}, {});