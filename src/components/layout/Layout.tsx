
import { useState, useEffect } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import ThemeSwitcher from "./ThemeSwitcher";
import Chatbot from "../chatbot/Chatbot";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleChatbot = () => {
    setIsChatbotOpen(!isChatbotOpen);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header toggleSidebar={toggleSidebar} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar isOpen={isSidebarOpen} />
        <MainContent isSidebarOpen={isSidebarOpen}>
          {children}
        </MainContent>
      </div>
      
      {/* Fixed position theme switcher */}
      <div className="fixed bottom-4 left-4 z-50">
        <ThemeSwitcher />
      </div>
      
      {/* Floating Chatbot button */}
      <button 
        onClick={toggleChatbot}
        className="fixed bottom-4 right-4 z-50 bg-primary text-primary-foreground rounded-full p-3 shadow-lg hover:shadow-xl transition-all"
        aria-label="Open chatbot"
      >
        <img 
          src="/lovable-uploads/00ee4722-aa8f-468c-8a69-1e24565bb3e1.png" 
          alt="Virtual Assistant" 
          className="h-6 w-6" 
        />
      </button>
      
      {/* Chatbot component */}
      <Chatbot isOpen={isChatbotOpen} onClose={() => setIsChatbotOpen(false)} />
    </div>
  );
};

export default Layout;
