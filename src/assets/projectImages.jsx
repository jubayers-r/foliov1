export const allImages = import.meta.glob(
  "../assets/web-demo/*/*.png",
  { eager: true, import: "default" }
);

export function getImagesByProjectName(projectName) {
  const images = {};

  for (const [path, mod] of Object.entries(allImages)) {
    if (path.includes(`/web-demo/${projectName}/`)) {
      const key = path.match(/\/([^/]+)\.png$/)?.[1];
      if (key) images[key] = mod;
    }
  }

  return Object.values(images).sort(); // sort alphabetically
}