
import { useState } from "react";
import { 
  Bell, 
  FileText, 
  User, 
  Calendar,
  Tag,
  Search,
  Filter,
  ChevronDown
} from "lucide-react";

const Notices = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");
  const [expandedNotice, setExpandedNotice] = useState<number | null>(null);
  
  const notices = [
    {
      id: 1,
      title: "Mid-Semester Examination Schedule Released",
      category: "academic",
      date: "April 10, 2025",
      author: "Examination Controller",
      content: "The mid-semester examination schedule has been released. All students are required to check their examination dates and venues. The examinations will begin on May 1, 2025. Students with any scheduling conflicts should contact the examination office immediately."
    },
    {
      id: 2,
      title: "Campus Maintenance: Weekend Power Outage",
      category: "facility",
      date: "April 12, 2025",
      author: "Facilities Management",
      content: "Due to scheduled maintenance work, there will be a power outage in the Science Building and Library on Saturday, April 15 from 9:00 AM to 5:00 PM. Please plan your activities accordingly. Emergency power will be available in critical areas."
    },
    {
      id: 3,
      title: "New Library Resources Available",
      category: "resource",
      date: "April 14, 2025",
      author: "Library Services",
      content: "The university library has added new digital resources for all students. These include access to JSTOR, IEEE Xplore, and Science Direct databases. Workshop sessions on how to use these resources will be conducted next week. Check the library website for more details."
    },
    {
      id: 4,
      title: "Scholarship Application Deadline Extended",
      category: "financial",
      date: "April 15, 2025",
      author: "Financial Aid Office",
      content: "The deadline for scholarship applications for the upcoming academic year has been extended to May 15, 2025. Eligible students who haven't applied yet are encouraged to submit their applications. Visit the financial aid office or check the university portal for application guidelines."
    },
    {
      id: 5,
      title: "Guest Lecture: Artificial Intelligence and Future of Work",
      category: "event",
      date: "April 16, 2025",
      author: "Computer Science Department",
      content: "We are pleased to announce a guest lecture on 'Artificial Intelligence and the Future of Work' by Dr. Sarah Johnson, AI Researcher at Google. The lecture will take place on April 20 at 2:00 PM in the Main Auditorium. All students and faculty members are invited to attend."
    }
  ];
  
  const filteredNotices = notices.filter(notice => {
    const matchesSearch = notice.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         notice.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === "all" || notice.category === filter;
    return matchesSearch && matchesFilter;
  });
  
  const getCategoryColor = (category: string) => {
    switch(category) {
      case "academic": return "bg-blue-100 text-blue-800";
      case "facility": return "bg-orange-100 text-orange-800";
      case "resource": return "bg-green-100 text-green-800";
      case "financial": return "bg-purple-100 text-purple-800";
      case "event": return "bg-pink-100 text-pink-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6 py-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Notice Board</h1>
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search notices..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border rounded-md w-[200px] lg:w-[300px]"
            />
          </div>
          <div className="flex items-center bg-muted rounded-md px-3 py-2">
            <Filter size={16} className="mr-2" />
            <select 
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="bg-transparent outline-none"
            >
              <option value="all">All Notices</option>
              <option value="academic">Academic</option>
              <option value="facility">Facility</option>
              <option value="resource">Resource</option>
              <option value="financial">Financial</option>
              <option value="event">Event</option>
            </select>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {filteredNotices.length > 0 ? (
          filteredNotices.map((notice) => (
            <div key={notice.id} className="bg-card border rounded-lg overflow-hidden">
              <div 
                className="p-4 cursor-pointer hover:bg-muted/50"
                onClick={() => setExpandedNotice(expandedNotice === notice.id ? null : notice.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-start space-x-3">
                    <div className="bg-primary/10 rounded-full p-2 text-primary">
                      <Bell size={18} />
                    </div>
                    <div>
                      <h3 className="font-medium">{notice.title}</h3>
                      <div className="flex items-center space-x-4 mt-1 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar size={14} className="mr-1" />
                          <span>{notice.date}</span>
                        </div>
                        <div className="flex items-center">
                          <User size={14} className="mr-1" />
                          <span>{notice.author}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className={`text-xs px-2 py-0.5 rounded-full capitalize ${getCategoryColor(notice.category)}`}>
                      {notice.category}
                    </span>
                    <ChevronDown 
                      size={18} 
                      className={`transition-transform ${expandedNotice === notice.id ? 'rotate-180' : ''}`}
                    />
                  </div>
                </div>
              </div>
              {expandedNotice === notice.id && (
                <div className="px-4 pb-4 pt-1 border-t">
                  <p className="text-sm text-muted-foreground">{notice.content}</p>
                  {notice.category === "academic" && (
                    <div className="mt-4">
                      <button className="text-primary text-sm flex items-center">
                        <FileText size={16} className="mr-1" />
                        <span>View full schedule</span>
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="text-center py-12 bg-muted/50 rounded-lg">
            <Bell size={48} className="mx-auto text-muted-foreground mb-3" />
            <h3 className="text-lg font-medium">No notices found</h3>
            <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Notices;
