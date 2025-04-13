
import React from "react";

interface MainContentProps {
  children: React.ReactNode;
  isSidebarOpen: boolean;
}

const MainContent = ({ children, isSidebarOpen }: MainContentProps) => {
  return (
    <main 
      className={`flex-1 overflow-auto p-4 transition-all duration-300 ${
        isSidebarOpen ? "" : "md:ml-0"
      }`}
    >
      <div className="container mx-auto">
        {children}
      </div>
    </main>
  );
};

export default MainContent;
