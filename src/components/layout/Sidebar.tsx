
import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Calendar, 
  Bell, 
  FileText, 
  Settings, 
  Book, 
  GraduationCap, 
  DollarSign, 
  Users 
} from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar = ({ isOpen }: SidebarProps) => {
  const [activeLink, setActiveLink] = useState("dashboard");

  return (
    <aside 
      className={`bg-card border-r transition-all duration-300 ${
        isOpen ? "w-64" : "w-0 -ml-4 md:w-20"
      } overflow-hidden`}
    >
      <div className="h-full flex flex-col py-4">
        <div className="px-4 mb-6">
          <h2 className={`font-semibold text-lg transition-opacity ${
            isOpen ? "opacity-100" : "opacity-0 md:opacity-100"
          }`}>
            Dashboard
          </h2>
        </div>
        
        <nav className="flex-1 px-2 space-y-1">
          {/* Dashboard links */}
          <div className="space-y-1">
            <SidebarLink 
              isOpen={isOpen} 
              icon={<Calendar />} 
              label="Calendar" 
              active={activeLink === "calendar"} 
              onClick={() => setActiveLink("calendar")}
              path="/calendar"
            />
            <SidebarLink 
              isOpen={isOpen} 
              icon={<Bell />} 
              label="Events" 
              active={activeLink === "events"} 
              onClick={() => setActiveLink("events")}
              path="/events"
            />
            <SidebarLink 
              isOpen={isOpen} 
              icon={<FileText />} 
              label="Notice Board" 
              active={activeLink === "notices"} 
              onClick={() => setActiveLink("notices")}
              path="/notices"
            />
            <SidebarLink 
              isOpen={isOpen} 
              icon={<Settings />} 
              label="Settings" 
              active={activeLink === "settings"} 
              onClick={() => setActiveLink("settings")}
              path="/settings"
            />
          </div>
          
          <div className="pt-4 mt-4 border-t">
            <h3 className={`text-xs font-medium text-muted-foreground px-2 mb-2 transition-opacity ${
              isOpen ? "opacity-100" : "opacity-0 md:opacity-100"
            }`}>
              Quick Links
            </h3>
            <div className="space-y-1">
              <SidebarLink 
                isOpen={isOpen} 
                icon={<Book />} 
                label="Curriculum" 
                active={activeLink === "curriculum"} 
                onClick={() => setActiveLink("curriculum")}
                path="/curriculum"
              />
              <SidebarLink 
                isOpen={isOpen} 
                icon={<GraduationCap />} 
                label="Examination" 
                active={activeLink === "examination"} 
                onClick={() => setActiveLink("examination")}
                path="/examination"
              />
              <SidebarLink 
                isOpen={isOpen} 
                icon={<DollarSign />} 
                label="Finance" 
                active={activeLink === "finance"} 
                onClick={() => setActiveLink("finance")}
                path="/finance"
              />
              <SidebarLink 
                isOpen={isOpen} 
                icon={<Users />} 
                label="Faculty" 
                active={activeLink === "faculty"} 
                onClick={() => setActiveLink("faculty")}
                path="/faculty"
              />
            </div>
          </div>
        </nav>
        
        <div className="px-4 mt-6">
          <div className={`text-xs text-muted-foreground transition-opacity ${
            isOpen ? "opacity-100" : "opacity-0 hidden md:block md:opacity-0"
          }`}>
            <p>VIT Bhopal University</p>
            <p>Portal v1.0.0</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

interface SidebarLinkProps {
  isOpen: boolean;
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
  path: string;
}

const SidebarLink = ({ isOpen, icon, label, active, onClick, path }: SidebarLinkProps) => {
  return (
    <Link
      to={path}
      className={`flex items-center px-2 py-2 text-sm rounded-md transition-colors ${
        active 
          ? "bg-primary text-primary-foreground" 
          : "text-foreground hover:bg-muted"
      }`}
      onClick={onClick}
    >
      <span className="flex-shrink-0 w-6">{icon}</span>
      <span className={`ml-3 transition-opacity ${
        isOpen ? "opacity-100" : "opacity-0 hidden md:block md:opacity-0"
      }`}>
        {label}
      </span>
    </Link>
  );
};

export default Sidebar;
