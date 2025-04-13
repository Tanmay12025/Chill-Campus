
import { useState } from "react";
import { 
  User, 
  Mail, 
  Phone, 
  Building, 
  Award, 
  BookOpen, 
  Clock,
  Search,
  Filter
} from "lucide-react";

const Faculty = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");
  
  const facultyMembers = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      position: "Professor",
      department: "Computer Science",
      email: "sarah.johnson@chillcampus.edu",
      phone: "(123) 456-7890",
      office: "Science Building, Room 302",
      officeHours: "Mon, Wed: 2:00 PM - 4:00 PM",
      image: "https://picsum.photos/seed/prof1/300/300",
      education: ["Ph.D. in Computer Science, MIT", "M.S. in Computer Science, Stanford", "B.Tech. in Computer Science, IIT"],
      research: ["Artificial Intelligence", "Machine Learning", "Computer Vision"],
      courses: ["CS101: Introduction to Programming", "CS401: Artificial Intelligence"]
    },
    {
      id: 2,
      name: "Dr. James Wilson",
      position: "Associate Professor",
      department: "Computer Science",
      email: "james.wilson@chillcampus.edu",
      phone: "(123) 456-7891",
      office: "Science Building, Room 305",
      officeHours: "Tue, Thu: 10:00 AM - 12:00 PM",
      image: "https://picsum.photos/seed/prof2/300/300",
      education: ["Ph.D. in Computer Science, Stanford", "M.S. in Computer Science, Berkeley", "B.S. in Computer Science, UCLA"],
      research: ["Database Systems", "Data Mining", "Big Data Analytics"],
      courses: ["CS201: Data Structures", "CS301: Database Systems"]
    },
    {
      id: 3,
      name: "Dr. Emily Chen",
      position: "Assistant Professor",
      department: "Electrical Engineering",
      email: "emily.chen@chillcampus.edu",
      phone: "(123) 456-7892",
      office: "Engineering Building, Room 204",
      officeHours: "Mon, Wed, Fri: 11:00 AM - 12:00 PM",
      image: "https://picsum.photos/seed/prof3/300/300",
      education: ["Ph.D. in Electrical Engineering, MIT", "M.S. in Electrical Engineering, Caltech", "B.S. in Electrical Engineering, Cornell"],
      research: ["Microelectronics", "Signal Processing", "Embedded Systems"],
      courses: ["EE201: Circuit Analysis", "EE301: Signals and Systems"]
    },
    {
      id: 4,
      name: "Dr. Michael Brown",
      position: "Professor",
      department: "Business Administration",
      email: "michael.brown@chillcampus.edu",
      phone: "(123) 456-7893",
      office: "Business Building, Room 120",
      officeHours: "Tue, Thu: 2:00 PM - 4:00 PM",
      image: "https://picsum.photos/seed/prof4/300/300",
      education: ["Ph.D. in Business Administration, Harvard", "MBA, Wharton", "B.A. in Economics, Yale"],
      research: ["Strategic Management", "Organizational Behavior", "Business Ethics"],
      courses: ["BUS101: Introduction to Business", "BUS301: Strategic Management"]
    }
  ];
  
  const departments = [
    { id: "all", name: "All Departments" },
    { id: "computer-science", name: "Computer Science" },
    { id: "electrical-engineering", name: "Electrical Engineering" },
    { id: "mechanical-engineering", name: "Mechanical Engineering" },
    { id: "business-administration", name: "Business Administration" }
  ];
  
  const filteredFaculty = facultyMembers.filter(faculty => {
    const matchesSearch = faculty.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         faculty.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === "all" || faculty.department.toLowerCase().replace(/\s+/g, "-") === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-6 py-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Faculty Directory</h1>
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search faculty..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border rounded-md w-[200px] lg:w-[300px]"
            />
          </div>
        </div>
      </div>

      <div className="flex overflow-x-auto space-x-2 pb-2">
        {departments.map((dept) => (
          <button
            key={dept.id}
            onClick={() => setFilter(dept.id)}
            className={`px-4 py-2 whitespace-nowrap rounded-md text-sm font-medium ${
              filter === dept.id 
                ? "bg-primary text-primary-foreground" 
                : "bg-muted hover:bg-muted/80"
            }`}
          >
            {dept.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredFaculty.map((faculty) => (
          <div key={faculty.id} className="bg-card border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
            <div className="flex p-4">
              <div className="w-24 h-24 rounded-full overflow-hidden mr-4">
                <img src={faculty.image} alt={faculty.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">{faculty.name}</h3>
                <p className="text-sm text-muted-foreground">{faculty.position}</p>
                <span className="inline-block mt-1 text-xs px-2 py-0.5 bg-blue-100 text-blue-800 rounded-full">
                  {faculty.department}
                </span>
                <div className="mt-2 flex items-center text-sm text-primary">
                  <Mail size={14} className="mr-1" />
                  <a href={`mailto:${faculty.email}`} className="hover:underline">Email</a>
                </div>
              </div>
            </div>
            
            <div className="border-t px-4 py-3">
              <div className="space-y-2 text-sm">
                <div className="flex items-start">
                  <Phone size={16} className="mr-2 mt-0.5 text-muted-foreground" />
                  <span>{faculty.phone}</span>
                </div>
                <div className="flex items-start">
                  <Building size={16} className="mr-2 mt-0.5 text-muted-foreground" />
                  <span>{faculty.office}</span>
                </div>
                <div className="flex items-start">
                  <Clock size={16} className="mr-2 mt-0.5 text-muted-foreground" />
                  <span>{faculty.officeHours}</span>
                </div>
              </div>
            </div>
            
            <div className="border-t px-4 py-3 bg-muted/30">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-medium">Courses</h4>
                <button className="text-xs text-primary hover:underline">View Profile</button>
              </div>
              <div className="mt-2 space-y-1">
                {faculty.courses.map((course, index) => (
                  <div key={index} className="text-xs flex items-center">
                    <BookOpen size={12} className="mr-1 text-muted-foreground" />
                    <span>{course}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faculty;
