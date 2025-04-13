
import { useState } from "react";
import { AlertCircle, CheckCircle2, FileText, Clock } from "lucide-react";

const Complaint = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState("");
  const [formData, setFormData] = useState({
    category: "",
    subject: "",
    description: "",
    studentId: "VIT2024001",
    contactEmail: "student@vit.ac.in"
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Generate a random ticket ID
    const randomTicket = "VIT" + Math.floor(100000 + Math.random() * 900000);
    setTicketId(randomTicket);
    setFormSubmitted(true);
  };

  return (
    <div className="space-y-6 py-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Complaint Management</h1>
        {formSubmitted && (
          <span className="vit-badge flex items-center">
            <CheckCircle2 className="h-3 w-3 mr-1" />
            Complaint Filed
          </span>
        )}
      </div>

      {!formSubmitted ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="dashboard-card">
              <h2 className="text-lg font-semibold mb-4">File a Complaint</h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Student ID</label>
                    <input
                      type="text"
                      name="studentId"
                      value={formData.studentId}
                      readOnly
                      className="w-full bg-muted/50 rounded-md px-3 py-2 text-sm border focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                    <p className="text-xs text-muted-foreground mt-1">Auto-filled from your profile</p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Contact Email</label>
                    <input
                      type="email"
                      name="contactEmail"
                      value={formData.contactEmail}
                      readOnly
                      className="w-full bg-muted/50 rounded-md px-3 py-2 text-sm border focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                    <p className="text-xs text-muted-foreground mt-1">We'll update you through this email</p>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Category <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                    className="w-full bg-background rounded-md px-3 py-2 text-sm border focus:border-primary focus:ring-1 focus:ring-primary"
                  >
                    <option value="" disabled>Select a category</option>
                    <option value="academic">Academic Issues</option>
                    <option value="facilities">Campus Facilities</option>
                    <option value="hostel">Hostel & Accommodation</option>
                    <option value="fees">Fee & Payments</option>
                    <option value="transport">Transportation</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-background rounded-md px-3 py-2 text-sm border focus:border-primary focus:ring-1 focus:ring-primary"
                    placeholder="Brief title for your complaint"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Description <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-background rounded-md px-3 py-2 text-sm border focus:border-primary focus:ring-1 focus:ring-primary"
                    placeholder="Please provide detailed information about your complaint..."
                  ></textarea>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Attachments (Optional)</label>
                  <input
                    type="file"
                    className="w-full bg-background rounded-md px-3 py-2 text-sm border focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                  <p className="text-xs text-muted-foreground mt-1">Upload any relevant documents or images (Max size: 5MB)</p>
                </div>
                
                <div className="flex justify-end space-x-3 pt-2">
                  <button
                    type="button"
                    className="px-4 py-2 border rounded-md text-sm hover:bg-muted transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm hover:bg-primary/90 transition-colors"
                  >
                    Submit Complaint
                  </button>
                </div>
              </form>
            </div>
          </div>
          
          <div>
            <div className="dashboard-card">
              <h2 className="text-lg font-semibold mb-4">Guidelines</h2>
              <div className="space-y-3 text-sm">
                <div className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                  <p>Please select the most appropriate category for your complaint to ensure it's directed to the right department.</p>
                </div>
                <div className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                  <p>Provide specific details, including dates, locations, and names where applicable.</p>
                </div>
                <div className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                  <p>Attach relevant documents or images to support your complaint.</p>
                </div>
                <div className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                  <p>All complaints are treated confidentially and reviewed by the appropriate authorities.</p>
                </div>
                <div className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                  <p>Response time may vary depending on the nature and complexity of the complaint.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="max-w-2xl mx-auto">
          <div className="dashboard-card">
            <div className="text-center mb-6">
              <div className="mx-auto w-16 h-16 bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 rounded-full flex items-center justify-center mb-4">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h2 className="text-xl font-semibold">Complaint Successfully Filed</h2>
              <p className="text-muted-foreground mt-1">Your complaint has been submitted and is under review</p>
            </div>
            
            <div className="bg-muted rounded-lg p-4 mb-6">
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-medium">Ticket ID:</span>
                <span className="font-mono text-sm bg-background px-2 py-1 rounded">{ticketId}</span>
              </div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-medium">Status:</span>
                <span className="text-sm flex items-center text-amber-600 dark:text-amber-400">
                  <Clock className="h-4 w-4 mr-1" />
                  Under Review
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Filed On:</span>
                <span className="text-sm">April 13, 2025</span>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium mb-1">Category</h3>
                <p className="text-sm">{formData.category || "Not specified"}</p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium mb-1">Subject</h3>
                <p className="text-sm">{formData.subject || "Not specified"}</p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium mb-1">Description</h3>
                <p className="text-sm text-muted-foreground">{formData.description || "Not provided"}</p>
              </div>
            </div>
            
            <div className="border-t mt-6 pt-6">
              <h3 className="text-sm font-medium mb-3">What happens next?</h3>
              <ol className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-primary text-primary-foreground w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2 flex-shrink-0 mt-0.5">1</div>
                  <p className="text-sm">Your complaint will be reviewed by the concerned department.</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary text-primary-foreground w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2 flex-shrink-0 mt-0.5">2</div>
                  <p className="text-sm">You will receive email updates on the status of your complaint.</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary text-primary-foreground w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2 flex-shrink-0 mt-0.5">3</div>
                  <p className="text-sm">You may be contacted for additional information if needed.</p>
                </li>
              </ol>
            </div>
            
            <div className="flex justify-center mt-6">
              <button
                onClick={() => setFormSubmitted(false)}
                className="px-4 py-2 border rounded-md text-sm hover:bg-muted transition-colors mr-3"
              >
                File Another Complaint
              </button>
              <button
                className="px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm hover:bg-primary/90 transition-colors"
              >
                <FileText className="h-4 w-4 mr-1 inline-block" />
                Track Complaints
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Complaint;
