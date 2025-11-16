const PageWrapper = ({ children }) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 mt-16 lg:mt-20">
      {children}
    </div>
  );
};

export default PageWrapper;
