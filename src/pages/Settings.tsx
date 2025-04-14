import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { 
  User, 
  Bell, 
  Shield, 
  Eye, 
  Moon, 
  Sun,
  Save,
  Undo,
  Loader2
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const { user, profile, updateProfile } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSaving, setIsSaving] = useState(false);
  
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    college_id: "",
    department: "",
    semester: "",
  });

  const [currency, setCurrency] = useState("USD");
  const [currencyRate, setCurrencyRate] = useState(1);

  useEffect(() => {
    if (!user) {
      navigate("/auth");
      return;
    }

    if (profile) {
      setFormData({
        first_name: profile.first_name || "",
        last_name: profile.last_name || "",
        email: user.email || "",
        phone: profile.phone || "",
        college_id: profile.college_id || "",
        department: profile.department || "",
        semester: profile.semester || "",
      });
    }

    const storedCurrency = localStorage.getItem("preferredCurrency") || "USD";
    setCurrency(storedCurrency);
    
    if (storedCurrency === "INR") {
      setCurrencyRate(83.34);
      toast({
        title: "Currency updated",
        description: "Financial amounts will be displayed in Indian Rupees (₹)",
      });
    } else {
      setCurrencyRate(1);
      toast({
        title: "Currency updated",
        description: "Financial amounts will be displayed in US Dollars ($)",
      });
    }
  }, [user, profile, navigate]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleCurrencyChange = (value: string) => {
    setCurrency(value);
    localStorage.setItem("preferredCurrency", value);
    
    if (value === "INR") {
      setCurrencyRate(83.34);
      toast({
        title: "Currency updated",
        description: "Financial amounts will be displayed in Indian Rupees (₹)",
      });
    } else {
      setCurrencyRate(1);
      toast({
        title: "Currency updated",
        description: "Financial amounts will be displayed in US Dollars ($)",
      });
    }
  };

  const handleProfileUpdate = async () => {
    if (!user) return;
    
    setIsSaving(true);
    
    try {
      const { error } = await updateProfile({
        first_name: formData.first_name,
        last_name: formData.last_name,
        phone: formData.phone,
        college_id: formData.college_id,
        department: formData.department,
        semester: formData.semester,
      });
      
      if (error) throw error;
      
      toast({
        title: "Profile updated",
        description: "Your profile has been updated successfully",
      });
    } catch (error: any) {
      console.error('Error updating profile:', error);
      toast({
        title: "Update failed",
        description: error.message || "Failed to update profile",
        variant: "destructive",
      });
    } finally {
      setIsSaving(false);
    }
  };

  const handleResetForm = () => {
    if (profile) {
      setFormData({
        first_name: profile.first_name || "",
        last_name: profile.last_name || "",
        email: user?.email || "",
        phone: profile.phone || "",
        college_id: profile.college_id || "",
        department: profile.department || "",
        semester: profile.semester || "",
      });
    }
  };

  return (
    <div className="space-y-6 py-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Settings</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="col-span-1">
          <div className="bg-card rounded-lg border p-4 space-y-2">
            <button 
              onClick={() => setActiveTab("profile")}
              className={`flex items-center w-full px-3 py-2 rounded-md text-left ${
                activeTab === "profile" ? "bg-primary text-primary-foreground" : "hover:bg-muted"
              }`}
            >
              <User size={18} className="mr-3" />
              <span>Profile</span>
            </button>
            <button 
              onClick={() => setActiveTab("notifications")}
              className={`flex items-center w-full px-3 py-2 rounded-md text-left ${
                activeTab === "notifications" ? "bg-primary text-primary-foreground" : "hover:bg-muted"
              }`}
            >
              <Bell size={18} className="mr-3" />
              <span>Notifications</span>
            </button>
            <button 
              onClick={() => setActiveTab("privacy")}
              className={`flex items-center w-full px-3 py-2 rounded-md text-left ${
                activeTab === "privacy" ? "bg-primary text-primary-foreground" : "hover:bg-muted"
              }`}
            >
              <Shield size={18} className="mr-3" />
              <span>Privacy & Security</span>
            </button>
            <button 
              onClick={() => setActiveTab("appearance")}
              className={`flex items-center w-full px-3 py-2 rounded-md text-left ${
                activeTab === "appearance" ? "bg-primary text-primary-foreground" : "hover:bg-muted"
              }`}
            >
              <Eye size={18} className="mr-3" />
              <span>Appearance</span>
            </button>
          </div>
        </div>
        
        <div className="col-span-1 md:col-span-3">
          <div className="bg-card rounded-lg border p-6">
            {activeTab === "profile" && (
              <div>
                <h2 className="text-xl font-semibold mb-6">Profile Settings</h2>
                <div className="space-y-6">
                  <div className="flex flex-col md:flex-row md:space-x-6 items-start">
                    <div className="w-32 h-32 rounded-full bg-muted flex items-center justify-center mb-4 md:mb-0">
                      <User size={48} className="text-muted-foreground" />
                    </div>
                    <div className="flex-1 space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium">First Name</label>
                          <Input 
                            type="text" 
                            name="first_name"
                            value={formData.first_name} 
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Last Name</label>
                          <Input 
                            type="text" 
                            name="last_name"
                            value={formData.last_name} 
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Email Address</label>
                        <Input 
                          type="email" 
                          name="email"
                          value={formData.email} 
                          disabled
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Phone Number</label>
                        <Input 
                          type="tel" 
                          name="phone"
                          value={formData.phone} 
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-6 border-t">
                    <h3 className="text-lg font-medium mb-4">Academic Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">College ID</label>
                        <Input 
                          type="text" 
                          name="college_id"
                          value={formData.college_id} 
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Department</label>
                        <Input 
                          type="text" 
                          name="department"
                          value={formData.department} 
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Semester</label>
                        <Input 
                          type="text" 
                          name="semester"
                          value={formData.semester} 
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">User Type</label>
                        <Input 
                          type="text" 
                          value={profile?.user_type || ''} 
                          className="bg-muted"
                          disabled
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end space-x-3">
                    <Button 
                      variant="outline"
                      className="flex items-center" 
                      onClick={handleResetForm}
                    >
                      <Undo size={18} className="mr-2" />
                      <span>Cancel</span>
                    </Button>
                    <Button 
                      className="flex items-center"
                      onClick={handleProfileUpdate}
                      disabled={isSaving}
                    >
                      {isSaving ? (
                        <>
                          <Loader2 size={18} className="mr-2 animate-spin" />
                          <span>Saving...</span>
                        </>
                      ) : (
                        <>
                          <Save size={18} className="mr-2" />
                          <span>Save Changes</span>
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === "notifications" && (
              <div>
                <h2 className="text-xl font-semibold mb-6">Notification Settings</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 hover:bg-muted rounded-md">
                    <div>
                      <h3 className="font-medium">Email Notifications</h3>
                      <p className="text-sm text-muted-foreground">Receive email updates about your account</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between p-3 hover:bg-muted rounded-md">
                    <div>
                      <h3 className="font-medium">SMS Notifications</h3>
                      <p className="text-sm text-muted-foreground">Receive text messages for important updates</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between p-3 hover:bg-muted rounded-md">
                    <div>
                      <h3 className="font-medium">Academic Alerts</h3>
                      <p className="text-sm text-muted-foreground">Notifications about assignments and exams</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between p-3 hover:bg-muted rounded-md">
                    <div>
                      <h3 className="font-medium">Campus Events</h3>
                      <p className="text-sm text-muted-foreground">Updates about events happening on campus</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === "privacy" && (
              <div>
                <h2 className="text-xl font-semibold mb-6">Privacy & Security</h2>
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Password</h3>
                    <div className="grid grid-cols-1 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Current Password</label>
                        <Input type="password" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">New Password</label>
                        <Input type="password" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Confirm New Password</label>
                        <Input type="password" />
                      </div>
                    </div>
                    <Button className="mt-2">
                      Update Password
                    </Button>
                  </div>
                  
                  <div className="pt-6 border-t">
                    <h3 className="text-lg font-medium mb-4">Privacy Settings</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 hover:bg-muted rounded-md">
                        <div>
                          <h3 className="font-medium">Profile Visibility</h3>
                          <p className="text-sm text-muted-foreground">Control who can see your profile information</p>
                        </div>
                        <select className="p-2 border rounded-md">
                          <option>Everyone</option>
                          <option>Only Friends</option>
                          <option>Private</option>
                        </select>
                      </div>
                      <div className="flex items-center justify-between p-3 hover:bg-muted rounded-md">
                        <div>
                          <h3 className="font-medium">Two-Factor Authentication</h3>
                          <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                        </div>
                        <Button variant="outline">
                          Enable
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === "appearance" && (
              <div>
                <h2 className="text-xl font-semibold mb-6">Appearance Settings</h2>
                <div className="space-y-6">
                  <div className="p-4 border rounded-lg">
                    <h3 className="text-lg font-medium mb-4">Theme</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="border rounded-lg p-4 flex items-center space-x-3 cursor-pointer hover:bg-muted">
                        <Sun size={24} />
                        <div>
                          <h4 className="font-medium">Light</h4>
                          <p className="text-sm text-muted-foreground">Light background with dark text</p>
                        </div>
                      </div>
                      <div className="border rounded-lg p-4 flex items-center space-x-3 cursor-pointer hover:bg-muted">
                        <Moon size={24} />
                        <div>
                          <h4 className="font-medium">Dark</h4>
                          <p className="text-sm text-muted-foreground">Dark background with light text</p>
                        </div>
                      </div>
                      <div className="border rounded-lg p-4 flex items-center space-x-3 cursor-pointer hover:bg-muted">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
                        <div>
                          <h4 className="font-medium">System</h4>
                          <p className="text-sm text-muted-foreground">Follow system appearance</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 border rounded-lg">
                    <h3 className="text-lg font-medium mb-4">Currency</h3>
                    <div className="space-y-2">
                      <Select
                        value={currency}
                        onValueChange={handleCurrencyChange}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select currency" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="USD">US Dollar ($)</SelectItem>
                          <SelectItem value="INR">Indian Rupee (₹)</SelectItem>
                        </SelectContent>
                      </Select>
                      <p className="text-sm text-muted-foreground mt-2">
                        Selected currency will be used across the app for financial information
                      </p>
                      {currency === "INR" && (
                        <div className="mt-2 p-2 bg-muted rounded-md text-sm">
                          Current exchange rate: 1 USD = {currencyRate} INR
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="p-4 border rounded-lg">
                    <h3 className="text-lg font-medium mb-4">Font Size</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Small</span>
                        <span className="text-lg">Large</span>
                      </div>
                      <input type="range" min="1" max="5" defaultValue="3" className="w-full" />
                    </div>
                  </div>
                  
                  <div className="p-4 border rounded-lg">
                    <h3 className="text-lg font-medium mb-4">Layout</h3>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <input type="radio" id="compact" name="layout" className="mr-2" />
                        <label htmlFor="compact">Compact</label>
                      </div>
                      <div className="flex items-center">
                        <input type="radio" id="comfortable" name="layout" className="mr-2" defaultChecked />
                        <label htmlFor="comfortable">Comfortable</label>
                      </div>
                      <div className="flex items-center">
                        <input type="radio" id="spacious" name="layout" className="mr-2" />
                        <label htmlFor="spacious">Spacious</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
