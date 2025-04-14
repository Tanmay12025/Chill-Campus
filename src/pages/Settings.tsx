import { useState } from "react";
import { 
  User, 
  Bell, 
  Shield, 
  Eye, 
  Moon, 
  Sun,
  Save,
  Undo
} from "lucide-react";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("profile");
  
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
                          <input type="text" className="w-full p-2 border rounded-md" defaultValue="John" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Last Name</label>
                          <input type="text" className="w-full p-2 border rounded-md" defaultValue="Doe" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Email Address</label>
                        <input type="email" className="w-full p-2 border rounded-md" defaultValue="john.doe@example.com" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Phone Number</label>
                        <input type="tel" className="w-full p-2 border rounded-md" defaultValue="(123) 456-7890" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-6 border-t">
                    <h3 className="text-lg font-medium mb-4">Academic Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Student ID</label>
                        <input type="text" className="w-full p-2 border rounded-md bg-muted" defaultValue="S12345678" readOnly />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Program</label>
                        <input type="text" className="w-full p-2 border rounded-md bg-muted" defaultValue="Computer Science" readOnly />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Batch</label>
                        <input type="text" className="w-full p-2 border rounded-md bg-muted" defaultValue="2022-2026" readOnly />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Current Semester</label>
                        <input type="text" className="w-full p-2 border rounded-md bg-muted" defaultValue="4" readOnly />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end space-x-3">
                    <button className="flex items-center px-4 py-2 border rounded-md hover:bg-muted">
                      <Undo size={18} className="mr-2" />
                      <span>Cancel</span>
                    </button>
                    <button className="flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-md">
                      <Save size={18} className="mr-2" />
                      <span>Save Changes</span>
                    </button>
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
                        <input type="password" className="w-full p-2 border rounded-md" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">New Password</label>
                        <input type="password" className="w-full p-2 border rounded-md" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Confirm New Password</label>
                        <input type="password" className="w-full p-2 border rounded-md" />
                      </div>
                    </div>
                    <button className="mt-2 px-4 py-2 bg-primary text-primary-foreground rounded-md">
                      Update Password
                    </button>
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
                        <button className="px-3 py-1.5 border rounded-md hover:bg-muted">
                          Enable
                        </button>
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
