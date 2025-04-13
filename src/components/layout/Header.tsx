
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, User, LogIn, LogOut } from "lucide-react";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header = ({ toggleSidebar }: HeaderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState("home");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const tabs = [
    { id: "home", label: "Home", path: "/" },
    { id: "community", label: "Community", path: "/community" },
    { id: "complaint", label: "Complaint", path: "/complaint" },
    { id: "admission", label: "Admission Form", path: "/admission" },
  ];

  return (
    <header className="bg-card border-b sticky top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <button
              onClick={toggleSidebar}
              className="mr-2 p-2 rounded-md hover:bg-muted transition-colors"
              aria-label="Toggle sidebar"
            >
              <Menu size={24} />
            </button>
            <Link to="/" className="flex items-center">
              <span className="font-bold text-xl mr-2">Chill</span>
              <span className="text-primary font-bold">Campus</span>
            </Link>
          </div>

          {/* Navigation Tabs */}
          <nav className="hidden md:flex items-center space-x-1">
            {tabs.map((tab) => (
              <Link
                key={tab.id}
                to={tab.path}
                className={`tab-button ${
                  activeTab === tab.id ? "tab-button-active" : "tab-button-inactive"
                }`}
                onClick={() => handleTabClick(tab.id)}
              >
                {tab.label}
              </Link>
            ))}
          </nav>

          {/* User Profile/Login */}
          <div className="flex items-center">
            {isLoggedIn ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center space-x-2 px-3 py-1 rounded-full bg-muted hover:bg-muted/80 transition-colors">
                    <User size={18} />
                    <span className="hidden sm:inline-block">Student Profile</span>
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>John Doe</DropdownMenuLabel>
                  <DropdownMenuLabel className="text-xs text-muted-foreground">student@chillcampus.edu</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>Academic Records</DropdownMenuItem>
                  <DropdownMenuItem>Financial Management</DropdownMenuItem>
                  <DropdownMenuItem>Examination</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => setIsLoggedIn(false)}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <button 
                onClick={() => setIsLoggedIn(true)}
                className="flex items-center space-x-2 px-3 py-1 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                <LogIn size={18} />
                <span className="hidden sm:inline-block">Sign In</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
