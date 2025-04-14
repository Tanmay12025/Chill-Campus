import { Download as DownloadIcon } from "lucide-react";

const Tutoring = () => {
  return (
    <div className="space-y-6 py-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Tutoring Center</h1>
        <span className="vit-badge">Academic Support</span>
      </div>

      <div className="dashboard-card">
        <h2 className="text-xl font-semibold mb-4">Welcome to the Tutoring Center</h2>
        <p className="mb-6 text-muted-foreground">
          The Tutoring Center provides free academic support services to all Chill Campus students. 
          Our dedicated team of peer tutors and faculty members are available to help you succeed in your courses.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium mb-3 text-lg">Services Offered</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                  <span className="h-2 w-2 rounded-full bg-primary"></span>
                </span>
                <span>One-on-one tutoring sessions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                  <span className="h-2 w-2 rounded-full bg-primary"></span>
                </span>
                <span>Group study sessions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                  <span className="h-2 w-2 rounded-full bg-primary"></span>
                </span>
                <span>Exam preparation workshops</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                  <span className="h-2 w-2 rounded-full bg-primary"></span>
                </span>
                <span>Writing assistance for papers and assignments</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                  <span className="h-2 w-2 rounded-full bg-primary"></span>
                </span>
                <span>Academic skills development</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-3 text-lg">Hours of Operation</h3>
            <div className="space-y-2">
              <div className="flex justify-between pb-2 border-b">
                <span className="font-medium">Monday - Thursday</span>
                <span>9:00 AM - 8:00 PM</span>
              </div>
              <div className="flex justify-between pb-2 border-b">
                <span className="font-medium">Friday</span>
                <span>9:00 AM - 5:00 PM</span>
              </div>
              <div className="flex justify-between pb-2 border-b">
                <span className="font-medium">Saturday</span>
                <span>10:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Sunday</span>
                <span>Closed</span>
              </div>
            </div>
            
            <div className="mt-6">
              <h3 className="font-medium mb-3 text-lg">Location</h3>
              <p className="text-muted-foreground">
                Main Library, 2nd Floor<br />
                Room 204-210<br />
                Chill Campus University
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="dashboard-card md:col-span-2">
          <h2 className="text-xl font-semibold mb-4">Available Tutors</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b text-left">
                  <th className="py-2 px-3 font-medium">Name</th>
                  <th className="py-2 px-3 font-medium">Subject</th>
                  <th className="py-2 px-3 font-medium">Availability</th>
                  <th className="py-2 px-3 font-medium">Rating</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-muted/50">
                  <td className="py-2 px-3">Dr. Rahul Sharma</td>
                  <td className="py-2 px-3">Physics</td>
                  <td className="py-2 px-3">Mon, Wed 2-5 PM</td>
                  <td className="py-2 px-3">
                    <div className="flex items-center">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg key={star} className={`w-4 h-4 ${star <= 5 ? "text-yellow-300" : "text-gray-300"}`} fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-muted-foreground">(42)</span>
                    </div>
                  </td>
                </tr>
                <tr className="border-b hover:bg-muted/50">
                  <td className="py-2 px-3">Prof. Anita Desai</td>
                  <td className="py-2 px-3">Mathematics</td>
                  <td className="py-2 px-3">Tue, Thu 1-4 PM</td>
                  <td className="py-2 px-3">
                    <div className="flex items-center">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg key={star} className={`w-4 h-4 ${star <= 4 ? "text-yellow-300" : "text-gray-300"}`} fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-muted-foreground">(38)</span>
                    </div>
                  </td>
                </tr>
                <tr className="border-b hover:bg-muted/50">
                  <td className="py-2 px-3">Dr. Vikram Mehta</td>
                  <td className="py-2 px-3">Chemistry</td>
                  <td className="py-2 px-3">Mon, Fri 10 AM-1 PM</td>
                  <td className="py-2 px-3">
                    <div className="flex items-center">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg key={star} className={`w-4 h-4 ${star <= 5 ? "text-yellow-300" : "text-gray-300"}`} fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-muted-foreground">(29)</span>
                    </div>
                  </td>
                </tr>
                <tr className="border-b hover:bg-muted/50">
                  <td className="py-2 px-3">Prof. Meera Patel</td>
                  <td className="py-2 px-3">Computer Science</td>
                  <td className="py-2 px-3">Wed, Sat 3-6 PM</td>
                  <td className="py-2 px-3">
                    <div className="flex items-center">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg key={star} className={`w-4 h-4 ${star <= 4 ? "text-yellow-300" : "text-gray-300"}`} fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-muted-foreground">(56)</span>
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-muted/50">
                  <td className="py-2 px-3">Dr. Sanjay Kumar</td>
                  <td className="py-2 px-3">Electronics</td>
                  <td className="py-2 px-3">Tue, Thu 9 AM-12 PM</td>
                  <td className="py-2 px-3">
                    <div className="flex items-center">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg key={star} className={`w-4 h-4 ${star <= 5 ? "text-yellow-300" : "text-gray-300"}`} fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-muted-foreground">(47)</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="mt-4 text-center">
            <button className="text-primary text-sm hover:underline">View All Tutors</button>
          </div>
        </div>
        
        <div className="dashboard-card">
          <h2 className="text-xl font-semibold mb-4">Resources</h2>
          
          <div className="space-y-4">
            <div className="p-3 border rounded-lg flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-700">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                  </svg>
                </div>
                <div>
                  <div className="font-medium">Study Guides</div>
                  <div className="text-xs text-muted-foreground">PDF, 2.3 MB</div>
                </div>
              </div>
              <button className="text-primary hover:text-primary/80">
                <DownloadIcon size={18} />
              </button>
            </div>
            
            <div className="p-3 border rounded-lg flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 bg-green-100 rounded-lg flex items-center justify-center text-green-700">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                  </svg>
                </div>
                <div>
                  <div className="font-medium">Practice Problems</div>
                  <div className="text-xs text-muted-foreground">PDF, 1.5 MB</div>
                </div>
              </div>
              <button className="text-primary hover:text-primary/80">
                <DownloadIcon size={18} />
              </button>
            </div>
            
            <div className="p-3 border rounded-lg flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 bg-amber-100 rounded-lg flex items-center justify-center text-amber-700">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2Z"></path>
                    <path d="M18 14h-8"></path>
                    <path d="M15 18h-5"></path>
                    <path d="M10 6h8v4h-8V6Z"></path>
                  </svg>
                </div>
                <div>
                  <div className="font-medium">Writing Guidelines</div>
                  <div className="text-xs text-muted-foreground">PDF, 850 KB</div>
                </div>
              </div>
              <button className="text-primary hover:text-primary/80">
                <DownloadIcon size={18} />
              </button>
            </div>
            
            <div className="mt-6">
              <h3 className="font-medium mb-3">Online Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm flex items-center text-primary hover:underline">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                    Khan Academy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm flex items-center text-primary hover:underline">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                    MIT OpenCourseWare
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm flex items-center text-primary hover:underline">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                    Coursera
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm flex items-center text-primary hover:underline">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                    edX
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="dashboard-card">
        <h2 className="text-xl font-semibold mb-4">Book a Session</h2>
        <p className="text-muted-foreground mb-4">
          Schedule a tutoring session with one of our expert tutors. Choose your subject, preferred tutor, and available time slot.
        </p>
        
        <div className="flex justify-center mt-6">
          <button className="bg-primary text-primary-foreground px-6 py-2 rounded-md hover:bg-primary/90 transition-colors">
            Schedule Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tutoring;
