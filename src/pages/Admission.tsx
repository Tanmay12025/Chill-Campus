
import { 
  Clipboard, 
  Upload, 
  CreditCard, 
  CheckCircle2, 
  ArrowRight, 
  FileText, 
  User, 
  BookOpen,
  GraduationCap,
  Clock  // Add this import
} from "lucide-react";

const Admission = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  const handleNextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="space-y-6 py-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Admission Application</h1>
        <span className="vit-badge">2025-26 Academic Year</span>
      </div>

      {/* Progress steps */}
      <div className="relative">
        <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 h-1 bg-muted"></div>
        <div 
          className="absolute top-1/2 left-0 -translate-y-1/2 h-1 bg-primary transition-all duration-300"
          style={{ width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%` }}
        ></div>
        <div className="relative flex justify-between">
          {[1, 2, 3, 4].map((step) => (
            <div 
              key={step} 
              className={`flex flex-col items-center relative ${
                step <= currentStep ? "text-primary" : "text-muted-foreground"
              }`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-colors ${
                step <= currentStep ? "bg-primary text-primary-foreground border-primary" : "bg-card border-muted"
              }`}>
                {step < currentStep ? (
                  <CheckCircle2 className="h-5 w-5" />
                ) : (
                  <span>{step}</span>
                )}
              </div>
              <span className="text-xs mt-1 text-center">
                {step === 1 ? "Personal Info" : 
                 step === 2 ? "Documents" : 
                 step === 3 ? "Payment" : "Confirmation"}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Form content based on current step */}
      <div className="dashboard-card">
        {currentStep === 1 && (
          <div>
            <h2 className="text-lg font-semibold mb-4 flex items-center">
              <Clipboard className="h-5 w-5 mr-2" />
              Personal Information
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  className="w-full bg-background rounded-md px-3 py-2 text-sm border focus:border-primary focus:ring-1 focus:ring-primary"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input 
                  type="email" 
                  className="w-full bg-background rounded-md px-3 py-2 text-sm border focus:border-primary focus:ring-1 focus:ring-primary"
                  placeholder="Enter your email address"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Date of Birth <span className="text-red-500">*</span>
                </label>
                <input 
                  type="date" 
                  className="w-full bg-background rounded-md px-3 py-2 text-sm border focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Contact Number <span className="text-red-500">*</span>
                </label>
                <input 
                  type="tel" 
                  className="w-full bg-background rounded-md px-3 py-2 text-sm border focus:border-primary focus:ring-1 focus:ring-primary"
                  placeholder="Enter your contact number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Gender <span className="text-red-500">*</span>
                </label>
                <select className="w-full bg-background rounded-md px-3 py-2 text-sm border focus:border-primary focus:ring-1 focus:ring-primary">
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                  <option value="prefer_not_to_say">Prefer not to say</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Nationality <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  className="w-full bg-background rounded-md px-3 py-2 text-sm border focus:border-primary focus:ring-1 focus:ring-primary"
                  placeholder="Enter your nationality"
                />
              </div>
            </div>
            
            <h3 className="text-md font-semibold mb-3">Address Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">
                  Address Line 1 <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  className="w-full bg-background rounded-md px-3 py-2 text-sm border focus:border-primary focus:ring-1 focus:ring-primary"
                  placeholder="Street address"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">
                  Address Line 2
                </label>
                <input 
                  type="text" 
                  className="w-full bg-background rounded-md px-3 py-2 text-sm border focus:border-primary focus:ring-1 focus:ring-primary"
                  placeholder="Apartment, suite, unit, etc. (optional)"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  City <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  className="w-full bg-background rounded-md px-3 py-2 text-sm border focus:border-primary focus:ring-1 focus:ring-primary"
                  placeholder="Enter city"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  State/Province <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  className="w-full bg-background rounded-md px-3 py-2 text-sm border focus:border-primary focus:ring-1 focus:ring-primary"
                  placeholder="Enter state/province"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Postal/Zip Code <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  className="w-full bg-background rounded-md px-3 py-2 text-sm border focus:border-primary focus:ring-1 focus:ring-primary"
                  placeholder="Enter postal/zip code"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Country <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  className="w-full bg-background rounded-md px-3 py-2 text-sm border focus:border-primary focus:ring-1 focus:ring-primary"
                  placeholder="Enter country"
                />
              </div>
            </div>
            
            <h3 className="text-md font-semibold mb-3">Program Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Program Type <span className="text-red-500">*</span>
                </label>
                <select className="w-full bg-background rounded-md px-3 py-2 text-sm border focus:border-primary focus:ring-1 focus:ring-primary">
                  <option value="">Select program type</option>
                  <option value="undergraduate">Undergraduate</option>
                  <option value="postgraduate">Postgraduate</option>
                  <option value="doctorate">Doctorate</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Program of Interest <span className="text-red-500">*</span>
                </label>
                <select className="w-full bg-background rounded-md px-3 py-2 text-sm border focus:border-primary focus:ring-1 focus:ring-primary">
                  <option value="">Select program</option>
                  <option value="btech_cse">B.Tech Computer Science</option>
                  <option value="btech_civil">B.Tech Civil Engineering</option>
                  <option value="btech_mech">B.Tech Mechanical Engineering</option>
                  <option value="btech_eee">B.Tech Electrical & Electronics</option>
                  <option value="mtech_cse">M.Tech Computer Science</option>
                  <option value="mtech_ai">M.Tech Artificial Intelligence</option>
                  <option value="mba">MBA</option>
                  <option value="phd">Ph.D</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Entry Term <span className="text-red-500">*</span>
                </label>
                <select className="w-full bg-background rounded-md px-3 py-2 text-sm border focus:border-primary focus:ring-1 focus:ring-primary">
                  <option value="">Select term</option>
                  <option value="fall_2025">Fall 2025</option>
                  <option value="spring_2026">Spring 2026</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Mode of Study <span className="text-red-500">*</span>
                </label>
                <select className="w-full bg-background rounded-md px-3 py-2 text-sm border focus:border-primary focus:ring-1 focus:ring-primary">
                  <option value="">Select mode</option>
                  <option value="full_time">Full-time</option>
                  <option value="part_time">Part-time</option>
                </select>
              </div>
            </div>
          </div>
        )}
        
        {currentStep === 2 && (
          <div>
            <h2 className="text-lg font-semibold mb-4 flex items-center">
              <Upload className="h-5 w-5 mr-2" />
              Document Upload
            </h2>
            
            <div className="space-y-6">
              <div className="border rounded-md p-4">
                <h3 className="text-md font-medium mb-2 flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  Identification Documents
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Government ID <span className="text-red-500">*</span>
                    </label>
                    <div className="border-2 border-dashed rounded-md p-6 text-center">
                      <Upload className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                      <p className="text-sm text-muted-foreground mb-2">
                        Drag and drop your ID, or <span className="text-primary">browse files</span>
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Supported formats: JPG, PNG, PDF (Max: 5MB)
                      </p>
                      <input type="file" className="hidden" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Passport-sized Photograph <span className="text-red-500">*</span>
                    </label>
                    <div className="border-2 border-dashed rounded-md p-6 text-center">
                      <Upload className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                      <p className="text-sm text-muted-foreground mb-2">
                        Drag and drop your photo, or <span className="text-primary">browse files</span>
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Supported formats: JPG, PNG (Max: 2MB)
                      </p>
                      <input type="file" className="hidden" />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="border rounded-md p-4">
                <h3 className="text-md font-medium mb-2 flex items-center">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Educational Records
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      High School / 10+2 Certificate <span className="text-red-500">*</span>
                    </label>
                    <div className="border-2 border-dashed rounded-md p-6 text-center">
                      <Upload className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                      <p className="text-sm text-muted-foreground mb-2">
                        Drag and drop your certificate, or <span className="text-primary">browse files</span>
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Supported formats: JPG, PNG, PDF (Max: 5MB)
                      </p>
                      <input type="file" className="hidden" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Transcripts <span className="text-red-500">*</span>
                    </label>
                    <div className="border-2 border-dashed rounded-md p-6 text-center">
                      <Upload className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                      <p className="text-sm text-muted-foreground mb-2">
                        Drag and drop your transcripts, or <span className="text-primary">browse files</span>
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Supported formats: JPG, PNG, PDF (Max: 5MB)
                      </p>
                      <input type="file" className="hidden" />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="border rounded-md p-4">
                <h3 className="text-md font-medium mb-2 flex items-center">
                  <GraduationCap className="h-4 w-4 mr-2" />
                  Additional Documents
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Statement of Purpose 
                    </label>
                    <div className="border-2 border-dashed rounded-md p-6 text-center">
                      <Upload className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                      <p className="text-sm text-muted-foreground mb-2">
                        Drag and drop your document, or <span className="text-primary">browse files</span>
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Supported formats: DOC, DOCX, PDF (Max: 2MB)
                      </p>
                      <input type="file" className="hidden" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Letter of Recommendation
                    </label>
                    <div className="border-2 border-dashed rounded-md p-6 text-center">
                      <Upload className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                      <p className="text-sm text-muted-foreground mb-2">
                        Drag and drop your document, or <span className="text-primary">browse files</span>
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Supported formats: DOC, DOCX, PDF (Max: 2MB)
                      </p>
                      <input type="file" className="hidden" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-muted/50 rounded-md p-4 mt-6">
              <div className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-medium">AI Document Verification</h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    Our AI system will verify your documents for accuracy and completeness. You'll be notified if any issues are detected.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {currentStep === 3 && (
          <div>
            <h2 className="text-lg font-semibold mb-4 flex items-center">
              <CreditCard className="h-5 w-5 mr-2" />
              Application Fee Payment
            </h2>
            
            <div className="bg-muted/50 rounded-md p-4 mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Application Fee</span>
                <span className="text-sm font-medium">₹2,000</span>
              </div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Processing Fee</span>
                <span className="text-sm font-medium">₹100</span>
              </div>
              <div className="flex items-center justify-between pt-2 border-t">
                <span className="text-sm font-medium">Total Amount</span>
                <span className="text-md font-bold">₹2,100</span>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-md font-medium mb-3">Payment Method</h3>
                <div className="grid grid-cols-3 gap-3">
                  <div className="border rounded-md p-3 cursor-pointer hover:border-primary transition-colors">
                    <div className="text-center">
                      <CreditCard className="h-6 w-6 mx-auto mb-1" />
                      <span className="text-xs">Credit/Debit Card</span>
                    </div>
                  </div>
                  <div className="border rounded-md p-3 cursor-pointer hover:border-primary transition-colors">
                    <div className="text-center">
                      <svg className="h-6 w-6 mx-auto mb-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="24" height="24" rx="4" fill="currentColor" fillOpacity="0.1" />
                        <path d="M17 8H7a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" fill="currentColor" />
                      </svg>
                      <span className="text-xs">Net Banking</span>
                    </div>
                  </div>
                  <div className="border rounded-md p-3 cursor-pointer hover:border-primary transition-colors">
                    <div className="text-center">
                      <svg className="h-6 w-6 mx-auto mb-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="24" height="24" rx="4" fill="currentColor" fillOpacity="0.1" />
                        <path d="M12 15V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M15 12H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="text-xs">UPI</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="border rounded-md p-4">
                <h3 className="text-md font-medium mb-3">Card Details</h3>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Card Number <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="text" 
                      className="w-full bg-background rounded-md px-3 py-2 text-sm border focus:border-primary focus:ring-1 focus:ring-primary"
                      placeholder="1234 5678 9012 3456"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Expiry Date <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="text" 
                        className="w-full bg-background rounded-md px-3 py-2 text-sm border focus:border-primary focus:ring-1 focus:ring-primary"
                        placeholder="MM/YY"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        CVV <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="text" 
                        className="w-full bg-background rounded-md px-3 py-2 text-sm border focus:border-primary focus:ring-1 focus:ring-primary"
                        placeholder="123"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Cardholder Name <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="text" 
                      className="w-full bg-background rounded-md px-3 py-2 text-sm border focus:border-primary focus:ring-1 focus:ring-primary"
                      placeholder="Enter cardholder name"
                    />
                  </div>
                </div>
              </div>
              
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="save_card" 
                  className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                />
                <label htmlFor="save_card" className="ml-2 block text-sm text-muted-foreground">
                  Save card details for future payments
                </label>
              </div>
            </div>
          </div>
        )}
        
        {currentStep === 4 && (
          <div>
            <div className="text-center mb-6">
              <div className="mx-auto w-16 h-16 bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 rounded-full flex items-center justify-center mb-4">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h2 className="text-xl font-semibold">Application Submitted Successfully!</h2>
              <p className="text-muted-foreground mt-1">Your application has been received and is being processed</p>
            </div>
            
            <div className="bg-muted rounded-lg p-4 mb-6">
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-medium">Application ID:</span>
                <span className="font-mono text-sm bg-background px-2 py-1 rounded">VIT2526789</span>
              </div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-medium">Status:</span>
                <span className="text-sm flex items-center text-amber-600 dark:text-amber-400">
                  <Clock className="h-4 w-4 mr-1" />
                  Under Review
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Submitted On:</span>
                <span className="text-sm">April 13, 2025</span>
              </div>
            </div>
            
            <div className="border rounded-md p-4 mb-6">
              <h3 className="text-md font-medium mb-3">Next Steps</h3>
              <ol className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-primary text-primary-foreground w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2 flex-shrink-0 mt-0.5">1</div>
                  <div>
                    <p className="text-sm font-medium">Document Verification</p>
                    <p className="text-xs text-muted-foreground">Our team will verify all the submitted documents.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary text-primary-foreground w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2 flex-shrink-0 mt-0.5">2</div>
                  <div>
                    <p className="text-sm font-medium">Entrance Test & Interview</p>
                    <p className="text-xs text-muted-foreground">You'll receive an email with details about the entrance test and interview schedule.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary text-primary-foreground w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2 flex-shrink-0 mt-0.5">3</div>
                  <div>
                    <p className="text-sm font-medium">Admission Decision</p>
                    <p className="text-xs text-muted-foreground">The final admission decision will be communicated via email and on your application portal.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary text-primary-foreground w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2 flex-shrink-0 mt-0.5">4</div>
                  <div>
                    <p className="text-sm font-medium">Fee Payment & Enrollment</p>
                    <p className="text-xs text-muted-foreground">If accepted, you'll need to pay the admission fee and complete the enrollment process.</p>
                  </div>
                </li>
              </ol>
            </div>
            
            <div className="border rounded-md p-4">
              <h3 className="text-md font-medium mb-3">Important Information</h3>
              <div className="space-y-2 text-sm">
                <p>• Please check your email regularly for updates regarding your application.</p>
                <p>• All communication will be sent to the email address provided in your application.</p>
                <p>• You can check your application status anytime by logging into the admission portal.</p>
                <p>• For any queries, please contact our admission helpdesk at <span className="text-primary">admissions@vitbhopal.ac.in</span> or call <span className="text-primary">+91-XXXXXXXXXX</span>.</p>
              </div>
            </div>
            
            <div className="flex justify-center mt-6 space-x-4">
              <button className="flex items-center px-4 py-2 border rounded-md text-sm hover:bg-muted transition-colors">
                <FileText className="h-4 w-4 mr-2" />
                Download Receipt
              </button>
              <button className="flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm hover:bg-primary/90 transition-colors">
                Track Application
                <ArrowRight className="h-4 w-4 ml-2" />
              </button>
            </div>
          </div>
        )}
        
        {/* Form navigation buttons */}
        <div className="flex justify-between mt-8 pt-4 border-t">
          <button
            type="button"
            onClick={handlePrevStep}
            className={`px-4 py-2 border rounded-md text-sm hover:bg-muted transition-colors ${
              currentStep === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={currentStep === 1}
          >
            Previous
          </button>
          {currentStep < totalSteps ? (
            <button
              type="button"
              onClick={handleNextStep}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm hover:bg-primary/90 transition-colors"
            >
              Next
            </button>
          ) : (
            <button
              type="button"
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm hover:bg-primary/90 transition-colors"
            >
              Return to Home
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admission;
