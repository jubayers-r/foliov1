export const getOffset = (section) => {
  // Example: Different offset for "contact", or based on window width
  if (window.innerWidth < 640 && section === "skills") return -250;
  if (
    section === "projects" ||
    // section === "contact" ||
    (window.innerWidth < 640 && section === "me") ||
    (window.innerWidth < 640 && section === "about")
  )
    return -100;
  if (section === "contact") return -50;
  if (window.innerWidth < 640 && section === "contact") return -150;
  // if (window.innerWidth < 640) return -150; // Small screens
  return -230; // Default
};
