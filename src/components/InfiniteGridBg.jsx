const InfiniteGridBg = ({ children }) => {
  return (
    <div className="relative w-full">
      {/* Background layer that grows with content */}
      <div className="absolute inset-0 w-full h-full pointer-events-none -z-10">
        <div className="w-full h-full bg-infinite-grid-light dark:bg-infinite-grid-dark dark:bg-black" />
      </div>

      {/* Foreground content */}
      {children}
    </div>
  );
};

export default InfiniteGridBg;