export const getOffset = (section) => {
  const isMobile = window.innerWidth < 640;
  const navbarHeight = isMobile ? 100 : 250; // adjust to your navbar height

  // Special cases
  if (section === "skills") return -(navbarHeight + (isMobile ? 180 : 100));
  if (section === "projects") return -(navbarHeight + 40);
  if (section === "contact") return -(navbarHeight - (isMobile ? 60 : 160));

  // Default for all other sections
  return -navbarHeight;
};
