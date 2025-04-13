
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
  Users,
  Library,
  UserPlus,
  Home,
  Utensils,
  Building,
  HandHelping,
  CreditCard,
  ClipboardList,
  Wifi,
  Laptop,
  Heart,
  Globe
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
        
        <nav className="flex-1 px-2 space-y-1 overflow-y-auto">
          {/* Main Dashboard links */}
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
          
          {/* Academic Resources */}
          <div className="pt-4 mt-4 border-t">
            <h3 className={`text-xs font-medium text-muted-foreground px-2 mb-2 transition-opacity ${
              isOpen ? "opacity-100" : "opacity-0 md:opacity-100"
            }`}>
              Academic Resources
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
                icon={<Library />} 
                label="Library Services" 
                active={activeLink === "library"} 
                onClick={() => setActiveLink("library")}
                path="/library"
              />
              <SidebarLink 
                isOpen={isOpen} 
                icon={<UserPlus />} 
                label="Tutoring Center" 
                active={activeLink === "tutoring"} 
                onClick={() => setActiveLink("tutoring")}
                path="/tutoring"
              />
              <SidebarLink 
                isOpen={isOpen} 
                icon={<GraduationCap />} 
                label="Examination" 
                active={activeLink === "examination"} 
                onClick={() => setActiveLink("examination")}
                path="/examination"
              />
            </div>
          </div>
          
          {/* Campus Life */}
          <div className="pt-4 mt-4 border-t">
            <h3 className={`text-xs font-medium text-muted-foreground px-2 mb-2 transition-opacity ${
              isOpen ? "opacity-100" : "opacity-0 md:opacity-100"
            }`}>
              Campus Life
            </h3>
            <div className="space-y-1">
              <SidebarLink 
                isOpen={isOpen} 
                icon={<Utensils />} 
                label="Dining Services" 
                active={activeLink === "dining"} 
                onClick={() => setActiveLink("dining")}
                path="/dining"
              />
              <SidebarLink 
                isOpen={isOpen} 
                icon={<Home />} 
                label="Housing" 
                active={activeLink === "housing"} 
                onClick={() => setActiveLink("housing")}
                path="/housing"
              />
            </div>
          </div>
          
          {/* Student Support */}
          <div className="pt-4 mt-4 border-t">
            <h3 className={`text-xs font-medium text-muted-foreground px-2 mb-2 transition-opacity ${
              isOpen ? "opacity-100" : "opacity-0 md:opacity-100"
            }`}>
              Student Support
            </h3>
            <div className="space-y-1">
              <SidebarLink 
                isOpen={isOpen} 
                icon={<HandHelping />} 
                label="Counselling" 
                active={activeLink === "counselling"} 
                onClick={() => setActiveLink("counselling")}
                path="/counselling"
              />
              <SidebarLink 
                isOpen={isOpen} 
                icon={<Heart />} 
                label="Financial Aid" 
                active={activeLink === "aid"} 
                onClick={() => setActiveLink("aid")}
                path="/aid"
              />
            </div>
          </div>
          
          {/* Financial & Administrative */}
          <div className="pt-4 mt-4 border-t">
            <h3 className={`text-xs font-medium text-muted-foreground px-2 mb-2 transition-opacity ${
              isOpen ? "opacity-100" : "opacity-0 md:opacity-100"
            }`}>
              Financial & Administrative
            </h3>
            <div className="space-y-1">
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
                icon={<CreditCard />} 
                label="Billing & Payments" 
                active={activeLink === "billing"} 
                onClick={() => setActiveLink("billing")}
                path="/billing"
              />
              <SidebarLink 
                isOpen={isOpen} 
                icon={<ClipboardList />} 
                label="Registrar" 
                active={activeLink === "registrar"} 
                onClick={() => setActiveLink("registrar")}
                path="/registrar"
              />
            </div>
          </div>
          
          {/* Technology & Resources */}
          <div className="pt-4 mt-4 border-t">
            <h3 className={`text-xs font-medium text-muted-foreground px-2 mb-2 transition-opacity ${
              isOpen ? "opacity-100" : "opacity-0 md:opacity-100"
            }`}>
              Technology & Resources
            </h3>
            <div className="space-y-1">
              <SidebarLink 
                isOpen={isOpen} 
                icon={<Laptop />} 
                label="IT Services" 
                active={activeLink === "it"} 
                onClick={() => setActiveLink("it")}
                path="/it"
              />
              <SidebarLink 
                isOpen={isOpen} 
                icon={<Wifi />} 
                label="Campus WiFi" 
                active={activeLink === "wifi"} 
                onClick={() => setActiveLink("wifi")}
                path="/wifi"
              />
            </div>
          </div>
          
          {/* Student Organizations */}
          <div className="pt-4 mt-4 border-t">
            <h3 className={`text-xs font-medium text-muted-foreground px-2 mb-2 transition-opacity ${
              isOpen ? "opacity-100" : "opacity-0 md:opacity-100"
            }`}>
              Student Organizations
            </h3>
            <div className="space-y-1">
              <SidebarLink 
                isOpen={isOpen} 
                icon={<Users />} 
                label="Faculty" 
                active={activeLink === "faculty"} 
                onClick={() => setActiveLink("faculty")}
                path="/faculty"
              />
              <SidebarLink 
                isOpen={isOpen} 
                icon={<Users />} 
                label="Clubs & Groups" 
                active={activeLink === "clubs"} 
                onClick={() => setActiveLink("clubs")}
                path="/clubs"
              />
              <SidebarLink 
                isOpen={isOpen} 
                icon={<Globe />} 
                label="Community Service" 
                active={activeLink === "community-service"} 
                onClick={() => setActiveLink("community-service")}
                path="/community-service"
              />
            </div>
          </div>
        </nav>
        
        <div className="px-4 mt-6">
          <div className={`text-xs text-muted-foreground transition-opacity ${
            isOpen ? "opacity-100" : "opacity-0 hidden md:block md:opacity-0"
          }`}>
            <p>Chill Campus University</p>
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
