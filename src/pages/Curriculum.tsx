
import { useState } from "react";
import { Book, Clock, Calendar, User, Award, BarChart, Bookmark, Filter } from "lucide-react";

const Curriculum = () => {
  const [activeTab, setActiveTab] = useState("computer-science");
  const [filter, setFilter] = useState("all");
  
  const programs = [
    { id: "computer-science", name: "Computer Science" },
    { id: "electrical-engineering", name: "Electrical Engineering" },
    { id: "mechanical-engineering", name: "Mechanical Engineering" },
    { id: "business-admin", name: "Business Administration" },
    { id: "architecture", name: "Architecture" }
  ];
  
  const courses = [
    { 
      id: 1, 
      code: "CS101", 
      title: "Introduction to Programming", 
      credits: 4, 
      semester: 1, 
      department: "computer-science", 
      description: "This course introduces students to fundamental programming concepts, algorithms, and problem-solving techniques using Python programming language.",
      prerequisites: [],
      outcomes: ["Understand basic programming concepts", "Develop algorithms to solve problems", "Implement solutions using Python"],
      instructors: ["Dr. James Wilson", "Prof. Sarah Chen"]
    },
    { 
      id: 2, 
      code: "CS201", 
      title: "Data Structures", 
      credits: 4, 
      semester: 2, 
      department: "computer-science", 
      description: "This course introduces fundamental data structures and algorithms, including lists, stacks, queues, trees, and graphs, with implementation in Java.",
      prerequisites: ["CS101"],
      outcomes: ["Implement various data structures", "Analyze algorithm efficiency", "Select appropriate data structures for specific problems"],
      instructors: ["Dr. Michael Rodriguez"]
    },
    { 
      id: 3, 
      code: "CS301", 
      title: "Database Systems", 
      credits: 3, 
      semester: 3, 
      department: "computer-science", 
      description: "This course covers database design, implementation, and management with focus on relational databases, SQL, and database administration.",
      prerequisites: ["CS201"],
      outcomes: ["Design and implement relational database", "Write complex SQL queries", "Understand database optimization techniques"],
      instructors: ["Prof. Lisa Johnson"]
    },
    { 
      id: 4, 
      code: "CS401", 
      title: "Artificial Intelligence", 
      credits: 4, 
      semester: 4, 
      department: "computer-science", 
      description: "This course introduces principles and techniques of artificial intelligence, including search algorithms, knowledge representation, and machine learning.",
      prerequisites: ["CS201", "MTH202"],
      outcomes: ["Implement AI algorithms", "Apply machine learning techniques", "Design intelligent systems"],
      instructors: ["Dr. Emily Wang", "Dr. Robert Lee"]
    }
  ];
  
  const filteredCourses = courses.filter(course => {
    const matchesDepartment = course.department === activeTab;
    const matchesSemester = filter === "all" || course.semester.toString() === filter;
    return matchesDepartment && matchesSemester;
  });

  return (
    <div className="space-y-6 py-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Curriculum</h1>
        <div className="flex items-center space-x-3">
          <div className="flex items-center bg-muted rounded-md px-3 py-1.5">
            <Filter size={16} className="mr-2" />
            <select 
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="bg-transparent outline-none"
            >
              <option value="all">All Semesters</option>
              <option value="1">Semester 1</option>
              <option value="2">Semester 2</option>
              <option value="3">Semester 3</option>
              <option value="4">Semester 4</option>
              <option value="5">Semester 5</option>
              <option value="6">Semester 6</option>
              <option value="7">Semester 7</option>
              <option value="8">Semester 8</option>
            </select>
          </div>
        </div>
      </div>

      <div className="flex overflow-x-auto space-x-2 pb-2">
        {programs.map((program) => (
          <button
            key={program.id}
            onClick={() => setActiveTab(program.id)}
            className={`px-4 py-2 whitespace-nowrap rounded-md text-sm font-medium ${
              activeTab === program.id 
                ? "bg-primary text-primary-foreground" 
                : "bg-muted hover:bg-muted/80"
            }`}
          >
            {program.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4">
        {filteredCourses.map((course) => (
          <div key={course.id} className="bg-card border rounded-lg p-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div>
                <div className="flex items-center">
                  <span className="text-sm font-medium bg-primary/10 text-primary rounded-md px-2 py-1">
                    {course.code}
                  </span>
                  <h3 className="ml-3 text-lg font-semibold">{course.title}</h3>
                </div>
                <div className="mt-2 flex flex-wrap items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Clock size={16} className="mr-1" />
                    <span>{course.credits} Credits</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-1" />
                    <span>Semester {course.semester}</span>
                  </div>
                  <div className="flex items-center">
                    <User size={16} className="mr-1" />
                    <span>{course.instructors[0]} {course.instructors.length > 1 ? `+ ${course.instructors.length - 1} more` : ''}</span>
                  </div>
                  {course.prerequisites.length > 0 && (
                    <div className="flex items-center">
                      <Book size={16} className="mr-1" />
                      <span>Prerequisites: {course.prerequisites.join(', ')}</span>
                    </div>
                  )}
                </div>
              </div>
              <div className="mt-3 md:mt-0">
                <button className="flex items-center space-x-1 px-3 py-1.5 border rounded-md hover:bg-muted">
                  <Bookmark size={16} />
                  <span>Save</span>
                </button>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t">
              <p className="text-sm text-muted-foreground">{course.description}</p>
              
              <div className="mt-4 pt-4 border-t">
                <h4 className="text-sm font-medium mb-2 flex items-center">
                  <Award size={16} className="mr-2" />
                  Learning Outcomes
                </h4>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-2">
                  {course.outcomes.map((outcome, index) => (
                    <li key={index}>{outcome}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Curriculum;
