
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, User, LogIn, LogOut, ChevronDown } from "lucide-react";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header = ({ toggleSidebar }: HeaderProps) => {
  const [activeTab, setActiveTab] = useState("home");
  const { user, profile, signOut } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  const tabs = [
    { id: "home", label: "Home", path: "/" },
    { id: "community", label: "Community", path: "/community" },
    { id: "complaint", label: "Complaint", path: "/complaint" },
  ];

  const getUserDisplayName = () => {
    if (profile && (profile.first_name || profile.last_name)) {
      return `${profile.first_name || ''} ${profile.last_name || ''}`.trim();
    }
    return user?.email?.split('@')[0] || 'User';
  };

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
              <img 
                src="/lovable-uploads/3c6dbbea-7d16-4baa-9fd3-29cdc89d1d02.png" 
                alt="Chill Campus Logo" 
                className="h-10 mr-2" 
              />
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
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center space-x-2 px-3 py-1 rounded-full bg-muted hover:bg-muted/80 transition-colors">
                    <User size={18} />
                    <span className="hidden sm:inline-block capitalize">
                      {getUserDisplayName()}
                    </span>
                    <ChevronDown size={14} />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>{getUserDisplayName()}</DropdownMenuLabel>
                  <DropdownMenuLabel className="text-xs text-muted-foreground">
                    {user.email}
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => navigate("/settings")}>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  
                  {profile?.user_type === "student" && (
                    <>
                      <DropdownMenuItem onClick={() => navigate("/curriculum")}>Academic Records</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => navigate("/finance")}>Financial Management</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => navigate("/examination")}>Examination</DropdownMenuItem>
                    </>
                  )}
                  
                  {profile?.user_type === "faculty" && (
                    <>
                      <DropdownMenuItem onClick={() => navigate("/calendar")}>Classes Schedule</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => navigate("/faculty")}>Student Management</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => navigate("/curriculum")}>Course Materials</DropdownMenuItem>
                    </>
                  )}
                  
                  {profile?.user_type === "admin" && (
                    <>
                      <DropdownMenuItem onClick={() => navigate("/settings")}>Campus Management</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => navigate("/faculty")}>User Administration</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => navigate("/settings")}>System Settings</DropdownMenuItem>
                    </>
                  )}
                  
                  {profile?.user_type === "parent" && (
                    <>
                      <DropdownMenuItem onClick={() => navigate("/curriculum")}>Student Progress</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => navigate("/finance")}>Fee Payment</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => navigate("/examination")}>Attendance Report</DropdownMenuItem>
                    </>
                  )}
                  
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleSignOut}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button variant="default" className="flex items-center space-x-2" onClick={() => navigate("/auth")}>
                <LogIn size={18} />
                <span className="hidden sm:inline-block">Login</span>
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
