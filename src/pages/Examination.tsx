
import { useState } from "react";
import { 
  Calendar, 
  Clock, 
  MapPin, 
  AlertCircle, 
  CheckCircle, 
  FileText, 
  Download,
  BarChart
} from "lucide-react";

const Examination = () => {
  const [activeTab, setActiveTab] = useState("upcoming");
  
  const exams = {
    upcoming: [
      {
        id: 1,
        course: "CS301: Database Systems",
        date: "May 10, 2025",
        time: "9:00 AM - 12:00 PM",
        venue: "Examination Hall 1",
        status: "scheduled",
        type: "Mid-Semester"
      },
      {
        id: 2,
        course: "CS305: Computer Networks",
        date: "May 12, 2025",
        time: "2:00 PM - 5:00 PM",
        venue: "Examination Hall 2",
        status: "scheduled",
        type: "Mid-Semester"
      },
      {
        id: 3,
        course: "MTH202: Discrete Mathematics",
        date: "May 15, 2025",
        time: "9:00 AM - 12:00 PM",
        venue: "Examination Hall 3",
        status: "scheduled",
        type: "Mid-Semester"
      }
    ],
    past: [
      {
        id: 4,
        course: "CS201: Data Structures",
        date: "December 15, 2024",
        time: "9:00 AM - 12:00 PM",
        venue: "Examination Hall 1",
        status: "completed",
        grade: "A",
        type: "End-Semester"
      },
      {
        id: 5,
        course: "CS202: Algorithms",
        date: "December 18, 2024",
        time: "2:00 PM - 5:00 PM",
        venue: "Examination Hall 2",
        status: "completed",
        grade: "A-",
        type: "End-Semester"
      },
      {
        id: 6,
        course: "PHY101: Physics",
        date: "December 20, 2024",
        time: "9:00 AM - 12:00 PM",
        venue: "Examination Hall 3",
        status: "completed",
        grade: "B+",
        type: "End-Semester"
      }
    ]
  };
  
  const gradeSummary = {
    currentGPA: 3.75,
    cumulativeGPA: 3.82,
    completedCredits: 84,
    requiredCredits: 120,
    distribution: {
      A: 7,
      "A-": 3,
      "B+": 2,
      B: 1
    }
  };

  return (
    <div className="space-y-6 py-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Examination</h1>
        <div className="flex space-x-2">
          <button
            onClick={() => setActiveTab("upcoming")}
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              activeTab === "upcoming" ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
            }`}
          >
            Upcoming Exams
          </button>
          <button
            onClick={() => setActiveTab("past")}
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              activeTab === "past" ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
            }`}
          >
            Past Exams
          </button>
          <button
            onClick={() => setActiveTab("grades")}
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              activeTab === "grades" ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
            }`}
          >
            Grades
          </button>
        </div>
      </div>

      {activeTab === "upcoming" && (
        <div className="space-y-4">
          <div className="bg-amber-50 border border-amber-200 text-amber-800 rounded-lg p-4 flex items-start">
            <AlertCircle className="mr-3 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-medium">Important Notice</h3>
              <p className="text-sm">Mid-semester examinations are scheduled from May 10 to May 20, 2025. Ensure you check your exam venues and timings. Bring your student ID card to all examinations.</p>
            </div>
          </div>
          
          {exams.upcoming.map((exam) => (
            <div key={exam.id} className="bg-card border rounded-lg p-4">
              <div className="flex flex-col md:flex-row justify-between">
                <div>
                  <h3 className="font-semibold text-lg">{exam.course}</h3>
                  <span className="inline-block mt-1 text-xs px-2 py-0.5 bg-blue-100 text-blue-800 rounded-full">
                    {exam.type} Examination
                  </span>
                  <div className="mt-3 space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-2" />
                      <span>{exam.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock size={16} className="mr-2" />
                      <span>{exam.time}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-2" />
                      <span>{exam.venue}</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 md:mt-0 md:text-right">
                  <div className="flex flex-col md:items-end">
                    <span className="inline-block text-xs px-2 py-0.5 bg-amber-100 text-amber-800 rounded-full uppercase">
                      {exam.status}
                    </span>
                    <div className="mt-4 space-x-2">
                      <button className="px-3 py-1.5 text-sm border rounded-md hover:bg-muted">
                        View Syllabus
                      </button>
                      <button className="px-3 py-1.5 text-sm bg-primary text-primary-foreground rounded-md">
                        Set Reminder
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      
      {activeTab === "past" && (
        <div className="space-y-4">
          {exams.past.map((exam) => (
            <div key={exam.id} className="bg-card border rounded-lg p-4">
              <div className="flex flex-col md:flex-row justify-between">
                <div>
                  <h3 className="font-semibold text-lg">{exam.course}</h3>
                  <span className="inline-block mt-1 text-xs px-2 py-0.5 bg-blue-100 text-blue-800 rounded-full">
                    {exam.type} Examination
                  </span>
                  <div className="mt-3 space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-2" />
                      <span>{exam.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock size={16} className="mr-2" />
                      <span>{exam.time}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-2" />
                      <span>{exam.venue}</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 md:mt-0 md:text-right">
                  <div className="flex flex-col md:items-end">
                    <div className="flex items-center space-x-2 justify-end">
                      <CheckCircle size={16} className="text-green-600" />
                      <span className="inline-block text-xs px-2 py-0.5 bg-green-100 text-green-800 rounded-full uppercase">
                        {exam.status}
                      </span>
                    </div>
                    <div className="mt-2 text-2xl font-bold">{exam.grade}</div>
                    <div className="mt-4 space-x-2">
                      <button className="px-3 py-1.5 text-sm border rounded-md hover:bg-muted flex items-center">
                        <FileText size={16} className="mr-2" />
                        Answer Script
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      
      {activeTab === "grades" && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-card border rounded-lg p-4 flex flex-col items-center justify-center">
              <div className="text-sm text-muted-foreground mb-1">Current Semester GPA</div>
              <div className="text-3xl font-bold">{gradeSummary.currentGPA}</div>
            </div>
            <div className="bg-card border rounded-lg p-4 flex flex-col items-center justify-center">
              <div className="text-sm text-muted-foreground mb-1">Cumulative GPA</div>
              <div className="text-3xl font-bold">{gradeSummary.cumulativeGPA}</div>
            </div>
            <div className="bg-card border rounded-lg p-4 flex flex-col items-center justify-center">
              <div className="text-sm text-muted-foreground mb-1">Credits Completed</div>
              <div className="text-3xl font-bold">{gradeSummary.completedCredits}/{gradeSummary.requiredCredits}</div>
            </div>
            <div className="bg-card border rounded-lg p-4 flex flex-col items-center justify-center">
              <div className="text-sm text-muted-foreground mb-1">Grade Distribution</div>
              <div className="flex items-center justify-center space-x-2 mt-2">
                <div className="text-center">
                  <div className="text-xs">A</div>
                  <div className="text-lg font-bold">{gradeSummary.distribution.A}</div>
                </div>
                <div className="text-center">
                  <div className="text-xs">A-</div>
                  <div className="text-lg font-bold">{gradeSummary.distribution["A-"]}</div>
                </div>
                <div className="text-center">
                  <div className="text-xs">B+</div>
                  <div className="text-lg font-bold">{gradeSummary.distribution["B+"]}</div>
                </div>
                <div className="text-center">
                  <div className="text-xs">B</div>
                  <div className="text-lg font-bold">{gradeSummary.distribution.B}</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-card border rounded-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Semester-Wise Performance</h2>
              <button className="flex items-center text-sm px-3 py-1.5 border rounded-md hover:bg-muted">
                <Download size={16} className="mr-2" />
                Export Transcript
              </button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-muted">
                    <th className="px-4 py-2 text-left">Semester</th>
                    <th className="px-4 py-2 text-left">Credit Hours</th>
                    <th className="px-4 py-2 text-left">GPA</th>
                    <th className="px-4 py-2 text-left">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="px-4 py-3">Fall 2022</td>
                    <td className="px-4 py-3">18</td>
                    <td className="px-4 py-3">3.83</td>
                    <td className="px-4 py-3">
                      <span className="px-2 py-0.5 bg-green-100 text-green-800 rounded-full text-xs">
                        Completed
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-3">Spring 2023</td>
                    <td className="px-4 py-3">20</td>
                    <td className="px-4 py-3">3.90</td>
                    <td className="px-4 py-3">
                      <span className="px-2 py-0.5 bg-green-100 text-green-800 rounded-full text-xs">
                        Completed
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-3">Fall 2023</td>
                    <td className="px-4 py-3">22</td>
                    <td className="px-4 py-3">3.75</td>
                    <td className="px-4 py-3">
                      <span className="px-2 py-0.5 bg-green-100 text-green-800 rounded-full text-xs">
                        Completed
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Spring 2024</td>
                    <td className="px-4 py-3">24</td>
                    <td className="px-4 py-3">3.82</td>
                    <td className="px-4 py-3">
                      <span className="px-2 py-0.5 bg-blue-100 text-blue-800 rounded-full text-xs">
                        In Progress
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Examination;
