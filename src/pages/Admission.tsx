import { useState } from "react";
import { 
  Clipboard, 
  Upload, 
  Download, 
  Calendar as CalendarIcon, 
  Mail, 
  FileText, 
  User, 
  BookOpen,
  GraduationCap,
  Clock
} from "lucide-react";

const Admission = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    program: "",
    semester: "",
    previousEducation: "",
    documents: []
  });

  const handleNextStep = () => {
    if (step < 4) {
      setStep(step + 1);
    }
  };

  const handlePrevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="space-y-8 py-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Admission Application</h1>
        <div className="flex space-x-2">
          <button className="flex items-center space-x-2 px-3 py-1.5 bg-muted rounded-md text-sm">
            <Download size={16} />
            <span>Download</span>
          </button>
          <button className="flex items-center space-x-2 px-3 py-1.5 bg-primary text-primary-foreground rounded-md text-sm">
            <Upload size={16} />
            <span>Submit</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-1">
          <div className="bg-card rounded-lg border p-4 space-y-4">
            <h2 className="text-lg font-semibold">Application Steps</h2>
            
            <ul className="space-y-2">
              <li className={`flex items-center p-2 rounded-md ${step === 1 ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'}`}>
                <User size={18} className="mr-2" />
                <span>Personal Information</span>
              </li>
              <li className={`flex items-center p-2 rounded-md ${step === 2 ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'}`}>
                <BookOpen size={18} className="mr-2" />
                <span>Academic Details</span>
              </li>
              <li className={`flex items-center p-2 rounded-md ${step === 3 ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'}`}>
                <Clipboard size={18} className="mr-2" />
                <span>Document Upload</span>
              </li>
              <li className={`flex items-center p-2 rounded-md ${step === 4 ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'}`}>
                <FileText size={18} className="mr-2" />
                <span>Review & Submit</span>
              </li>
            </ul>
            
            <div className="pt-4 border-t">
              <h3 className="text-sm font-medium mb-2">Additional Resources</h3>
              <ul className="space-y-1.5 text-sm">
                <li>
                  <a href="#" className="text-primary hover:underline flex items-center">
                    <GraduationCap size={16} className="mr-2" />
                    <span>Programs & Courses</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-primary hover:underline flex items-center">
                    <CalendarIcon size={16} className="mr-2" />
                    <span>Academic Calendar</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-primary hover:underline flex items-center">
                    <Mail size={16} className="mr-2" />
                    <span>Contact Admissions</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-primary hover:underline flex items-center">
                    <Clock size={16} className="mr-2" />
                    <span>Application Deadlines</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="col-span-1 md:col-span-2">
          <div className="bg-card rounded-lg border p-6">
            <h2 className="text-xl font-semibold mb-6">Personal Information</h2>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium">First Name</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    className="w-full p-2 border rounded-md"
                    placeholder="Enter your first name" 
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    className="w-full p-2 border rounded-md"
                    placeholder="Enter your last name" 
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full p-2 border rounded-md"
                    placeholder="Enter your email address" 
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full p-2 border rounded-md"
                    placeholder="Enter your phone number" 
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="dob" className="text-sm font-medium">Date of Birth</label>
                  <input 
                    type="date" 
                    id="dob" 
                    className="w-full p-2 border rounded-md" 
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="gender" className="text-sm font-medium">Gender</label>
                  <select id="gender" className="w-full p-2 border rounded-md">
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                    <option value="prefer-not-to-say">Prefer not to say</option>
                  </select>
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="address" className="text-sm font-medium">Address</label>
                <textarea 
                  id="address" 
                  rows={3}
                  className="w-full p-2 border rounded-md"
                  placeholder="Enter your address" 
                ></textarea>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="city" className="text-sm font-medium">City</label>
                  <input 
                    type="text" 
                    id="city" 
                    className="w-full p-2 border rounded-md"
                    placeholder="Enter your city" 
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="state" className="text-sm font-medium">State/Province</label>
                  <input 
                    type="text" 
                    id="state" 
                    className="w-full p-2 border rounded-md"
                    placeholder="Enter your state or province" 
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="zip" className="text-sm font-medium">Zip/Postal Code</label>
                  <input 
                    type="text" 
                    id="zip" 
                    className="w-full p-2 border rounded-md"
                    placeholder="Enter your zip code" 
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="country" className="text-sm font-medium">Country</label>
                  <input 
                    type="text" 
                    id="country" 
                    className="w-full p-2 border rounded-md"
                    placeholder="Enter your country" 
                  />
                </div>
              </div>
              
              <div className="pt-4 flex justify-end">
                <button type="button" className="px-4 py-2 bg-primary text-primary-foreground rounded-md">
                  Next Step
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admission;
