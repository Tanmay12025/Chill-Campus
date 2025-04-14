
import { useState } from "react";
import { Link } from "react-router-dom";
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
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header = ({ toggleSidebar }: HeaderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState("home");
  const [userType, setUserType] = useState<"student" | "faculty" | "admin" | "parent">("student");
  const [loginOpen, setLoginOpen] = useState(false);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const handleLogin = (type: "student" | "faculty" | "admin" | "parent") => {
    setIsLoggedIn(true);
    setUserType(type);
    setLoginOpen(false);
  };

  const tabs = [
    { id: "home", label: "Home", path: "/" },
    { id: "community", label: "Community", path: "/community" },
    { id: "complaint", label: "Complaint", path: "/complaint" },
    // Removed admission form tab as requested
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
            {isLoggedIn ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center space-x-2 px-3 py-1 rounded-full bg-muted hover:bg-muted/80 transition-colors">
                    <User size={18} />
                    <span className="hidden sm:inline-block capitalize">{userType} Profile</span>
                    <ChevronDown size={14} />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>John Doe</DropdownMenuLabel>
                  <DropdownMenuLabel className="text-xs text-muted-foreground">
                    {userType === "student" ? "student@chillcampus.edu" : 
                     userType === "faculty" ? "faculty@chillcampus.edu" :
                     userType === "admin" ? "admin@chillcampus.edu" : "parent@example.com"}
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  
                  {userType === "student" && (
                    <>
                      <DropdownMenuItem>Academic Records</DropdownMenuItem>
                      <DropdownMenuItem>Financial Management</DropdownMenuItem>
                      <DropdownMenuItem>Examination</DropdownMenuItem>
                    </>
                  )}
                  
                  {userType === "faculty" && (
                    <>
                      <DropdownMenuItem>Classes Schedule</DropdownMenuItem>
                      <DropdownMenuItem>Student Management</DropdownMenuItem>
                      <DropdownMenuItem>Course Materials</DropdownMenuItem>
                    </>
                  )}
                  
                  {userType === "admin" && (
                    <>
                      <DropdownMenuItem>Campus Management</DropdownMenuItem>
                      <DropdownMenuItem>User Administration</DropdownMenuItem>
                      <DropdownMenuItem>System Settings</DropdownMenuItem>
                    </>
                  )}
                  
                  {userType === "parent" && (
                    <>
                      <DropdownMenuItem>Student Progress</DropdownMenuItem>
                      <DropdownMenuItem>Fee Payment</DropdownMenuItem>
                      <DropdownMenuItem>Attendance Report</DropdownMenuItem>
                    </>
                  )}
                  
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => setIsLoggedIn(false)}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Dialog open={loginOpen} onOpenChange={setLoginOpen}>
                <DialogTrigger asChild>
                  <Button variant="default" className="flex items-center space-x-2">
                    <LogIn size={18} />
                    <span className="hidden sm:inline-block">Login</span>
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Login to Chill Campus</DialogTitle>
                    <DialogDescription>
                      Access your campus resources and information
                    </DialogDescription>
                  </DialogHeader>
                  
                  <Tabs defaultValue="student" className="w-full mt-4">
                    <TabsList className="grid w-full grid-cols-4">
                      <TabsTrigger value="student">Student</TabsTrigger>
                      <TabsTrigger value="faculty">Faculty</TabsTrigger>
                      <TabsTrigger value="admin">Admin</TabsTrigger>
                      <TabsTrigger value="parent">Parent</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="student" className="space-y-4 mt-4">
                      <div className="space-y-2">
                        <Label htmlFor="student-email">Email</Label>
                        <Input id="student-email" placeholder="student@chillcampus.edu" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="student-password">Password</Label>
                        <Input id="student-password" type="password" />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="student-remember" className="rounded" />
                          <Label htmlFor="student-remember" className="text-sm">Remember me</Label>
                        </div>
                        <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                          Forgot password?
                        </Link>
                      </div>
                      <Button className="w-full" onClick={() => handleLogin("student")}>
                        Login as Student
                      </Button>
                      <div className="text-center">
                        <span className="text-sm text-muted-foreground">Or login with</span>
                        <div className="flex justify-center space-x-2 mt-2">
                          <Button variant="outline" className="w-full">Google</Button>
                          <Button variant="outline" className="w-full">Microsoft</Button>
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="faculty" className="space-y-4 mt-4">
                      <div className="space-y-2">
                        <Label htmlFor="faculty-email">Email</Label>
                        <Input id="faculty-email" placeholder="faculty@chillcampus.edu" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="faculty-password">Password</Label>
                        <Input id="faculty-password" type="password" />
                      </div>
                      <Button className="w-full" onClick={() => handleLogin("faculty")}>
                        Login as Faculty
                      </Button>
                    </TabsContent>
                    
                    <TabsContent value="admin" className="space-y-4 mt-4">
                      <div className="space-y-2">
                        <Label htmlFor="admin-email">Email</Label>
                        <Input id="admin-email" placeholder="admin@chillcampus.edu" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="admin-password">Password</Label>
                        <Input id="admin-password" type="password" />
                      </div>
                      <Button className="w-full" onClick={() => handleLogin("admin")}>
                        Login as Admin
                      </Button>
                    </TabsContent>
                    
                    <TabsContent value="parent" className="space-y-4 mt-4">
                      <div className="space-y-2">
                        <Label htmlFor="parent-email">Email</Label>
                        <Input id="parent-email" placeholder="parent@example.com" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="parent-password">Password</Label>
                        <Input id="parent-password" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="student-id">Student ID</Label>
                        <Input id="student-id" placeholder="Student ID" />
                      </div>
                      <Button className="w-full" onClick={() => handleLogin("parent")}>
                        Login as Parent
                      </Button>
                    </TabsContent>
                  </Tabs>
                </DialogContent>
              </Dialog>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
