
import { useState } from "react";
import { FileText, Star, ChevronDown, ChevronUp } from "lucide-react";

interface Notice {
  id: string;
  title: string;
  date: string;
  content: string;
  category: "academic" | "administrative" | "exam" | "placement";
  isImportant: boolean;
}

const NoticeBoard = () => {
  const [expandedNoticeId, setExpandedNoticeId] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>("all");

  // Sample notices data
  const notices: Notice[] = [
    {
      id: "1",
      title: "Semester Registration Deadline Extended",
      date: "April 13, 2025",
      content: "The deadline for semester registration has been extended to April 20, 2025. All students are required to complete their registration by this date. Late registrations will incur additional fees.",
      category: "administrative",
      isImportant: true
    },
    {
      id: "2",
      title: "Mid-Semester Examination Schedule",
      date: "April 12, 2025",
      content: "The mid-semester examinations will be conducted from April 21 to April 28, 2025. The detailed schedule is available on the university examination portal. Students are advised to check their respective schedules.",
      category: "exam",
      isImportant: true
    },
    {
      id: "3",
      title: "Internship Opportunities with Tech Giants",
      date: "April 10, 2025",
      content: "Several leading technology companies are offering summer internship opportunities for students. Interested candidates should apply through the placement portal by April 25, 2025.",
      category: "placement",
      isImportant: false
    },
    {
      id: "4",
      title: "Workshop on Research Methodology",
      date: "April 8, 2025",
      content: "A workshop on advanced research methodology will be conducted on April 18, 2025, from 10:00 AM to 4:00 PM in Seminar Hall 2. All research scholars and interested faculty members are invited to attend.",
      category: "academic",
      isImportant: false
    }
  ];

  const toggleNoticeDetails = (noticeId: string) => {
    if (expandedNoticeId === noticeId) {
      setExpandedNoticeId(null);
    } else {
      setExpandedNoticeId(noticeId);
    }
  };

  const filteredNotices = filter === "all" 
    ? notices 
    : filter === "important" 
      ? notices.filter(notice => notice.isImportant)
      : notices.filter(notice => notice.category === filter);

  const getCategoryBadge = (category: string, isImportant: boolean) => {
    let baseClasses = "text-xs rounded-full px-2 py-0.5 ";
    
    if (isImportant) {
      return baseClasses + "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
    }
    
    switch (category) {
      case "academic": 
        return baseClasses + "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      case "administrative": 
        return baseClasses + "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
      case "exam": 
        return baseClasses + "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200";
      case "placement": 
        return baseClasses + "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      default: 
        return baseClasses + "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200";
    }
  };

  return (
    <div className="dashboard-card">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold flex items-center">
          <FileText className="h-5 w-5 mr-2" />
          Notice Board
        </h3>
        <select 
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="text-xs bg-muted rounded px-2 py-1 border-0 focus:ring-1 focus:ring-primary"
        >
          <option value="all">All Notices</option>
          <option value="important">Important Only</option>
          <option value="academic">Academic</option>
          <option value="administrative">Administrative</option>
          <option value="exam">Examination</option>
          <option value="placement">Placement</option>
        </select>
      </div>

      <div className="space-y-3">
        {filteredNotices.length > 0 ? (
          filteredNotices.map((notice) => (
            <div key={notice.id} className="border rounded-md overflow-hidden">
              <div 
                className="flex justify-between items-center p-3 cursor-pointer hover:bg-muted/50 transition-colors"
                onClick={() => toggleNoticeDetails(notice.id)}
              >
                <div className="flex-1">
                  <div className="flex items-center">
                    {notice.isImportant && (
                      <Star className="h-4 w-4 text-amber-500 mr-1 flex-shrink-0" />
                    )}
                    <h4 className="font-medium text-sm line-clamp-1">{notice.title}</h4>
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {notice.date}
                  </div>
                </div>
                <div className="flex items-center ml-2">
                  <span className={`mr-2 ${getCategoryBadge(notice.category, notice.isImportant)}`}>
                    {notice.category.charAt(0).toUpperCase() + notice.category.slice(1)}
                  </span>
                  {expandedNoticeId === notice.id ? (
                    <ChevronUp className="h-4 w-4 text-muted-foreground" />
                  ) : (
                    <ChevronDown className="h-4 w-4 text-muted-foreground" />
                  )}
                </div>
              </div>
              
              {expandedNoticeId === notice.id && (
                <div className="p-3 border-t bg-muted/30">
                  <p className="text-xs text-muted-foreground">{notice.content}</p>
                  <button className="mt-2 text-xs text-primary hover:underline">
                    View full notice
                  </button>
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="text-center py-6 text-muted-foreground">
            No notices found for the selected category.
          </div>
        )}
      </div>
    </div>
  );
};

export default NoticeBoard;
